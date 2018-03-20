// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt-nodejs');
//
// // check to see if
// const validateEmail = (email) => {
//   return (/\S+@\S+\.\S+/).test(email);
// };
//
// // take plain javascript object as an argument
// // user model, check to see if our input is validate
// const userSchema = new Schema({
//   email: {
//     type: String,
//     unique: true,
//     lowercase: true,
//     required: 'Email is requied',
//     validate: [ validateEmail, 'Please enter a valid email' ]
//   },
//   password: {
//     type: String
//   }
// });
//
// //encrypt user password, will be execute before an user is saved.
// userSchema.pre('save', function(next){
//   var user = this;
//   // if user is new, encrypt the password
//   if (user.isNew || user.isModified('password')) {
//   bcrypt.genSalt(10, function(err, salt){
//     if (err) { return next(err); }
//     bcrypt.hash(user.password, salt, null, function(error, hash){
//       if (error) { return next(error); }
//       user.password = hash;
//       next();
//       });
//     });
//   } else {
//     next();
//   }
// });
//
// module.exports = mongoose.model('user', userSchema);
