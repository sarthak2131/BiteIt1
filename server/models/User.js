// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   cartItems: {
//     type: Array,
//     default: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "food",
//       },
//     ],
//   },
//   otp: {
//     type: Number,
//     default: 0,
//   },
//   isAdmin: {
//     type: Boolean,
//     default: false,
//   },
// });

// const User = mongoose.model("user", userSchema);
// module.exports = User;




const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart"
  },
  otp: {
    type: Number,
    default: 0
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
