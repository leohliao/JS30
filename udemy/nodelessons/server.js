// var http = require('http');
// var fs = require('fs');
//
// //404 response
// const send404Response = (response) => {
//   response.writeHead(404, {"Content-Type": "text/plain"});
//   response.write("Error 404: page not found!");
//   response.end();
// };
//
// //Handle user request
// const onRequest = (request, response) => {
//   if( request.method == 'GET' && request.url == '/' ) {
//     response.writeHead(200, {"Content-Type": "text/html"});
//     fs.createReadStream("./index.html").pipe(response);
//   } else {
//     send404Response(response);
//   }
// };
//
// http.createServer(onRequest).listen(8888);
// console.log("server is now running....");

// ===================================================================

var connect = require ('connect');
var http = require ('http');

var app = connect();

function profile(request, response) {
    console.log("this is profile");
}

function forum(request, response) {
    console.log("this is forum");
}

app.use("/profile", profile);
app.use("/forum", forum);

http.createServer(app).listen(8888);
console.log("Server is running...");
