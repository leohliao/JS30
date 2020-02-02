const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
// Use Catch Error handlers
const { catchErrors } = require('../handlers/errorHandlers');

// router.get('/', storeController.myMiddleware, storeController.homePage);
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));

// Do work here
// router.get('/', (req, res) => {
  // Type I:
    // res.send('Hey! It works!');

  // Type II:
    // res.json({
    //   'name': 'Leo',
    //   'age': '17',
    //   'hobit': 'Watch tutorial'
    // });

  // Type III: with parameters
  // coonnecting to  http://localhost:7777?name=leo&age=17
  // res.json(req.query);

  // Type IV: render with templates
  // http://localhost:7777/?age=23
  // res.render('example', {
  //   name: 'Snoopy',
  //   age: req.query.age
  // });

  // Type V: use layout and templates
  // http://localhost:7777/
  // res.render('app', {
  //   title: 'Great'
  // });
// });
  // Type III: with parameters in different link
  // http://localhost:7777/reverse/[thisisreversed}
router.get('/reverse/:name', (req, res) => {
  const reversed = [...req.params.name].reverse().join('');
  res.send(reversed);
});
module.exports = router;
