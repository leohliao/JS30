// exports.myMiddleware = (req, res, next) => {
//   req.name = 'leo';
//   next();
// };

const mongoose = require('mongoose');
const Store = mongoose.model('Store'); // From ./models/Stores.js;
exports.homePage = (req, res) => {
  console.log(req.name);
  // req.flash('error', 'Something Happened!');
  // req.flash('info', 'Something Happened!');
  // req.flash('warning', 'Something Happened!');
  // req.flash('success', 'Something Happened!');
  res.render('index');
};

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store'});
};

exports.createStore = async(req, res) => {
  // res.json(req.body);
  // Find model in Store.js 
  // Actually saves in the mongo db database
  const store = await (new Store(req.body)).save(); 
  // Shows flash message
  // globally available in app.js
  req.flash('success', `Successfully created ${store.name}. Care to leave a review?`);

  res.redirect(`/store/${store.slug}`);
};