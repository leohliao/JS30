# AngularJS
Resource: Lesson[https://alison.com/topic/learn/64838/introduction-to-angularjs]

## Why AngularJS?
### Suitable for Creating Dynamic Website:
- helps you organize your JavaScript.
- helps you create responsive website.
- plays well with jQuery (Unlike ReactJS)
- easy for testing (BDD, TDD)

## What is AngularJS?
- A client-side JavaScript Framework for adding interactivity to HTML.

### 1. Directive
- A Directive is marker on a HTML tag that tells AngularJS to run or reference some JavaScript code:
```html
<!-- index.html -->
<!DOCTYPE HTML>
<html>
  <body ng-controller="storeController">
  </body>
</html>
```

```javascript
  /* app.js */
  function storeController() {
    alert('welcome', 'leo')
  }
```
Types of Directives: 
`ng-app` - attach the Application Module to the page.
`ng-controller` - attach a Controller function to the page.
`ng-show / ng-hide` - display a section based on an Expression.
`ng-repeat` - repeat a section for each item in the array.

#### *Using Filter for the Directives*
`{{ data* | filter:options }} `
For example: 
`{{poduct.price | currency }}` - Pipe - "send the output into"
`{{ '1388123412323' | date: 'MM/dd/yyyy @ h:mma' }}` => 12/27/2013 @ 12:50 AM
`{{ 'octagon gem' | uppercase }}` => OCTAGON GEM
`<li ng-repeat="product in store.products | limitTo: 3">` => *displaying only 3 products of the array
`<li ng-repeat="product in store.products | orderBy: '-price'">` => *displaying only 3 products of the array
`<img ng-src="{{product.images[0].full}}"/>`

### 2. Modules 
- Where we write pieces of our angularJS application.
- Makes our code more maintainable, testable, and readable.
- Where we define dependencies for our app.

### 3. Expressions
- Allow you to insert dynamic values into your HTML.
```html
<p>
  I am {{4 + 6}} <!-- I am 10 -->
  {{"hello" + "you"}} <!-- hello you -->
</p>
```

### 4. Controllers 
- Controllers are where we define our app's behavior by defining functions and values.



