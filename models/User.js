// Require schema and model from mongoose
const mongoose = require('mongoose');

// Construct a new instance of the schema class
const userSchema = new mongoose.Schema({
  // Configure individual properties using Schema Types
  username: {
    type: String, 
    unique: true, 
    required: true,
    trimmed: true
  },
  email: { 
    type: String, 
    unique: true, 
    required: true,
    // Validator function that utilizes regex to filter for emails
    validate: {
      validator: function(v) {
        return /\^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    },
    required: [true, 'User email address required']
  },
  thoughts: [
    // Array uses objects from the Thoughts model
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Thought",
    },
  ],
  friends: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    },
  ],
});

// Using mongoose.model() to compile a model based on the schema 'userSchema'
const User = mongoose.model('User', userSchema);

module.exports = User;
