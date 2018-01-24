## 01 Write Concern 
w    |    j
----------------
1    |    false  - fast, small window of vulnerable
1    |    true   - slow
0    |    unacknowledge write - not recommended 

## 02 Network Errors 
Why an Applicaiton may receive an error back even if write was successful?
- The network TCP connection between the application and the server was reset after the server received a write but before a response could be sent.
- The MongoDB server terminates between receiving the write and responding to it.
- The network fails between the time of the write and the time the client receives a response to the write.

## 03 Introduction to Replication
- Get fault tolerance and change primary nodes 
- Needs minimum of 3 nodes.

## 04 Replica Set Electronics
- Regular ode
- Arbiter Node (Voting purposes) 
- Delayed / Regular 
- Hidden 

## Sharding 
- Each shard contains replica set(3 nodes minimum)
- MongoS 
- Sharding is ranged based
- Shard Key 

## Homework 7.3 Shard Key 
What is true about and using a shard key?
- There must be an index on the collection that starts with the shard key.
- MongoDB cannot enforce unique indexes on a sharded collection other than the shard key itself or indexes prefixed by the shard key.
- Any single update that does not contain the shard key or _id field will result in an error.
