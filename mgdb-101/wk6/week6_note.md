# Week 6 - Aggregation Framework 

## Introduction to Aggregation Framework 
- a set of analytic tools that allow you to run various type of report or analysis. 
- Aggregation Pipeline (similar to Linux shell):
----------------------------------------------------------
| Database -> Stage1 -> Stage 2 -> Stage 3 ... -> Output  |
----------------------------------------------------------
- in the stage: the input docs goes into data processor one-at-a-time, and then produce output docs one-at-a-time
- each stage will only consist of one type of task 
- the task a pipeline stage performs is tunable.
- piplines use a MongoDB collection as input.

## Familiar Aggregation 
- match(find)
- project
- sort 
- skip 
- limit

db.companies.aggregate([
  {$match: { founded_year: 2004 }},
  { $sort: { name:1 }}
  { $limit: 5 }
  {$project: {
    _id: 0,
    name: 1,
    founded_year: 1
  }}
])

## Expression 
- Boolean Expression
- Set Expressions
- Arimethtic expression
- String expression
- Array expression  
- Variable expression
- Date expression 
- Conditional expression
- Use aggregation pipeline over 

## Project introduction to reshaping 
- db.companies.aggregate([
  {$match: {"funding_rounds.investments.financial_org.permalink": "greylock"}},
  { $project: {
    _id; 0, 
    name: 1,
    ipo: "$ipo.pub_year",
    valuation: "$ipo.valuation_amount",
    founders: "$funding_rounds.investments.financial_org.permalink"
  }}
])

- db.companies.aggregate([
  {$match: {"funding_rounds.investments.financial_org.permalink": "greylock"}},
  { $project: {
    _id; 0, 
    name: 1,
    founded: {
      year: "$founded_year",
      month: "$founded_month",
      day: "$founded_day"
    }
  }}
])
- Quiz - Reshaping document in $project stages
db.companies.aggregate([
    {$match: {"name" : "Facebook"}},
    { $project: {
        _id: 0,
        name: 1,
        people: "$relationships.person.last_name"
    }}])

## Unwind 
- turns array value into single value 
- db.companies.aggregate([
  {$match: {"funding_rounds.investments.financial_org.permalink": "greylock"}},
  { $unwind: "$funding_rounds" },
  { $project: {
    _id; 0, 
    name: 1,
    ipo: "$ipo.pub_year",
    valuation: "$ipo.valuation_amount",
    founders: "$funding_rounds.investments.financial_org.permalink"
  }}
])

## Array expressions 
db.companies.aggregate([
  { $match: {"funding_rounds.investments.financial_org.permalink": "greylock"} },
  { $project: {
      _id: 0,
      name: 1,
      founded_year: 1,
      rounds: { $filter: {  => filter works with array
        input: "$funding_rounds", => 
        as: "round",  => defining a variable 
        cond: { $gte: ["$$round.raised_amount", 100000 ]}}}, => 
  }}, 
  { $match: {"rounds.investments.financial_org.permalink": "greylock" }},
]).pretty()

## Group 
- db.companies.aggregate ([
  { $match: { "relationships.person": { $ne: null }}},
  { $project: { relationships: 1, _id:0 }},
  { $unwind: "$relationships" },
  { $group: {
    _id: { founded_year: "$founded_year" },
    companies: { $push: "$name" }
  }}, 
  { $sort: { "_id.founded_year": 1 }}
])

