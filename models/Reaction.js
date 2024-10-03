const mongoose = require('mongoose');
// Construct a new instance of the schema class
const reactionSchema = new mongoose.Schema({
    // Configure individual properties using Schema Types
   reactionId: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId()
   },
   reactionBody: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
   },
   username: {
    type: String,
    required: true
   },
   createdAt: { 
    type: Date,
    default: Date.now
    // format Date
  },
  });
  
  module.exports = reactionSchema;