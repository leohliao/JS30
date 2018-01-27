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

### Directives 
- A Directive is marker on a HTML tag that tells AngularJS to run or reference some JavaScript code:
```html
/* index.html */
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