# AWS Study 

[AWS Serverse APIs & Apps - A Complete Introduction](https://www.udemy.com/aws-serverless-a-complete-introduction/)

## Creating an API with API Gateway & AWS Lambda
---------------------------------
### *_What is API Gateway?_*
- Create REST APIs
- Define API Endpoints & HTTP Methods
- Authorize Access
- Trigger Actions (Directly access some AWS Services; Run Lambda Code (and forward Request Data))

- Create Resource - 
  1. `Configure as proxy resource`
      - catches all data
      - API will only have one single resources.
  2. Enable API Gateway CORS

[API Gateway Overview](https://aws.amazon.com/api-gateway/)
[API Gateway Developer Doc](https://aws.amazon.com/documentation/apigateway/)

---------------------------------
### *_Lambda Function_*
Event Source -> Code -> Result
[AWS Lambda Overview](https://aws.amazon.com/lambda/)
[AWS Lambda Developer Documentation](http://docs.aws.amazon.com/lambda/latest/dg/welcome.html)

#### On AWS Management Console
``` javascript
// Lambda function on AWS
// Handler need to set to be `index.fn`, which resembles the following module name
// index.js
exports.fn = (event, context, callback) => {
    // TODO implement
    callback(null, {message: 'Hi, I\'m Lambda!'})
};
```

#### Test whether your API works or not
```javascript
// use codepen.io for fast test
var endpoint = '{AWS API}'; // NEED TO ENTER YOUR OWN VALUE
var method = '{AWS API Method}'; // ENTER YOUR OWN METHOD TYPE, e.g. GET, POST
var xhr = new XMLHttpRequest();
xhr.open(method, endpoint);
xhr.onreadystatechange = function(event) {
  console.log(event.target.response);
}
xhr.send();
```