// 01 create a counter that start at 0
// increment the counter by 1

// My Solution
let i = 0;
function increment (){
  i ++;
  console.log(i)
}
setInterval(increment, 1000)

/* KEY CONCEPT
++counter VS counter ++
If you use ++ counter, the first number shown will be added
if you use counter ++, the first number shown will not be the number that has been added.
*/

/* KEY CONCEPT - CLOSURE
DEFINITION:
When a variable definted in the outer function tht are used in the inner function
long after the outer function has been provoked.
*/

function outer(){
  var count = 0;
  var instructor = "Elie";
  return function inner(){
    debugger // use debugger in the chrome console, then you can go to sources to see the closure
    return count // this is an example of closure cause you are using variable from outer function
  }
} // In this case, count is the closure (but not instructor) because only count is called in the inner function

// better example
function counter(){
  var count = 0;
  return function inner(){
    return ++count
  }
}
var counter1 = counter();
counter1();

/* Additional Examples for Closure:
ReactJS - export default connect(mapStateToProps, mapDispatchToProps)(Todo)
NodeJS - var express = require("express")
//          var app = express()

*/

/* KEY CONCEPT - SCOPE
DEFINITION:
Each function creates a scope,
and scope determines the accessiblity (visibility) of these variable.
For example, a variable defined insde the function are not accessible from outside of the function.
*/

/* KEY CONCEPT - MEMORY LEAKS
DEFINITION:
When you define a variable that is unnecessary / not used
*/

///////////////////////////////////////////////////////////////////////////////////////////////////
//02 Array Method
// return a new array with all the values doubled
// using map will return a new array
let arr = [1, 2, 3, 4];
const doubled = arr.map(el => {
  return el * 2;
});
console.log(doubled);
console.log(arr)

// a different way
function doubleWithLoop(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i ++) {
    newArr.push(arr[i]*2);
  };
  return newArr
};

// Wrap it inside a function
function doubleWithMap(arr){
    return arr.map(function(val){
      return val * 2
    })
  };

/* KEY CONCEPT:
DECLARATION: Shows result / Using Map Approach
IMPERATIVE: Step by Step / Procedural / Using Loop Approach / Functional Programming
*/

///////////////////////////////////////////////////////////////////////////////////////////////////
// 03 reduce
// you can turn the variable into different kind of data structure
//// example 1
[1, 2, 3, 4].reduce(function(accumulator, nextValue) {
  return accumulator += nextValue;
}, 0);
/// example 2
[1, 2, 3, 4].reduce(function (accumulator, nextValue) {
  if (nextValue % 2 === 0) {
    accumulator.push(nextValue);
  };
  return accumulator
}, []);
//// example 3
[1, 2, 3, 4, 3, 2, 0].reduce(function (accumulator, nextValue) {
  if (nextValue in accumulator) {
    accumulator[nextValue]++;
  }else {
    accumulator[nextValue] = 1;
  };
  return accumulator
}, []);


///////////////////////////////////////////////////////////////////////////////////////////////////

/* KEY CONCEPT -
1. GLOBAL OBJECT
- when the keyword is declared in an child object, its going to refer to the parent object
2. IMPLICIT
-
3. EXPLICIT
-
4. NEW
- call, apply, bind
*/

/*
/// 04 THIS
1. THIS refers to Global Object
2. When you invoke a function, you will have "THIS" and "ARGUMENTS"
3. You have no idea what "THIS" refers to, until you see the action invoke
*/
///example 1
function awesome(){
  return this
} /// you have no idea what it refers until you see the action invoke
awesome() // =>         window
new awesome() // =>     object
awesome.call([]) // =>  []
awesome.call({}); // => {}

/////example 2 - IMPLICIT
var obj = {
  firstName: "Elie",
  sayHi: function(){
    return `Hello ${this.firstName}`
  }
}
//// example 3 - EXPLICIT
var instructor = {
  firstName: "Elie",
  sayHi: function () {
    return `Hello ${this.firstName}`
  }
}
var instructor2 = {
  firstName: "Matt";
}
instructor.sayHi() // currently this is referring to instructor
instructor.sayHi().call(instructor2) // currently this is referring to instructor2
/// IMPROVED VERSION
var instructor = {
  firstName: "Elie",
  lastName: "Mike"
}

var instructor2 = {
  firstName: "Matt";
  lastName: "Oral"
}

function sayHi(){
    return `Hello ${this.firstName}`
}

sayHi.call(instructor); // "hello ellie";
sayHi.call(instructor2); // "hello Matt";

///////////////////////////////////////////////////////////////////////////////////////////////////

// CALL AND APPLY
sayHi.call(instructor, 1, 2, 3) // when you pass argument
sayHi.apply(instructor, [1, 2, 3]) // when you pass an array

Math.max([1,2,3,10]) // Nan
Math.max.apply(this, [1, 2, 3, 10]) // 10
Math.max(...[1,2,3, 10]) // spread operator // 10


/* KEY CONCEPT - BIND()

BIND():
- the bind() methods creates a new function that, when called,
has its "this" keyword set to the provided value.
- Implemented through closure

EXAMPLE:
  var pokemon = {
    firstName: 'Pika',
    lastName: 'Chu',
    getPokeName: function(){
      var fullName = this.firstName + ' ' + this.lastName;
      return fullName
    }
  };
  var pokemonName = function(snack, hobby){
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
  };
  var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon = pokemon now
  logPokemon('sushi', 'alogrithms'); // Pika Chu loves sushi and alogrithms
*/

var instructor = {
  firstName: "Elie"
}
function doMath(a, b, c) {
  return `${this.firstName} adds ${a +b +c}`
}
var invokeLater = doMath.bind(instructor, 2)
invokeLater(10, 20) /// "Elie adds 32"

/* KEY CONCEPT - currying
Calls the function over and over again until al the argument are passed in
*/

// in the following example, there is a function inside the inner function,
// thus "this" got lost and function does not that where "this is name"
var obj = {
  firstName: "Elie",
  sayHi: function(){
    setTimeout(function(){
      console.log(`Hello ${this.firstName}`)
    }, 1000)
  }
}
obj.sayHi(); // Hello undefined

// Ways to solve this problem:
/// 1. ES5 Way
var obj = {
  firstName: "Elie",
  sayHi: function () {
    setTimeout(() => {
      console.log(`Hello ${this.firstName}`)
    }, 1000)
  }
}

obj.sayHi(); // Hello Elie

/// 2. Using bind
var obj = {
  firstName: "Elie",
  sayHi: function () {
    setTimeout(function() {
      console.log(`Hello ${this.firstName}`)
    }.bind(obj), 1000)
  }
}

obj.sayHi(); // Hello Elie

// 3. Using bind and this ** More preferrable way
var obj = {
  firstName: "Elie",
  sayHi: function () {
    setTimeout(function () {
      console.log(`Hello ${this.firstName}`)
    }.bind(this), 1000)
  }
}

obj.sayHi(); // Hello Elie
