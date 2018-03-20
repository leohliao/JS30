// const User = require('../models/user');
// // create to generate json web token to send back to user, contains
// // user object with user id and timstamp
// const jwt = require('jwt-simple');
// const config = require('../config');
//
// function tokenForUser(user) {
//   var timestamp = new Date().getTime();
//   return jwt.encode({
//     sub: user.id,
//     iat: timestamp
//   }, config.secret);
// }
//
// // get input from user
// exports.signup = (req, res, next) => {
//   console.log(req);
//   var email = req.body.email;
//   var password = req.body.password;
//   // console.log(email);
//   // console.log(password);
//   if(!email || !password) {
//     return res.status(422).json({error: "You must provide an email and password"});
//   }
//
// //check to see if user already exists, send errors if they do
//   User.findOne({ email: email }, function(err, exisitingUser){
//     // if email exists in the database, return error message
//     if (err) { return next(err); }
//     if (exisitingUser) {
//       return res.status(422).json({error: "Email taken"});
//     }
//
//     // if email dont exists, create new user
//     var user = new User({
//       email: email,
//       password: password
//     });
//
//     // save user information
//     user.save(function(error) {
//       if (error) { return next(error); }
//       res.json({user_id: user._id, token: tokenForUser(user)});
//     });
// });
//
// };// end signup
