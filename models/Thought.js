const mongoose = require("mongoose");
// Import reactionSchema
const reactionSchema = require("./Reaction");
// Construct a new instance of the schema class
const thoughtSchema = new mongoose.Schema(
  {
    // Configure individual properties using Schema Types
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // format Date
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    // Declaring virtual
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets the amount of reactions per thought
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    let reactions = this.reactions;
    console.log(reactions)
    return `${reactions.length}`;
  })

// Using mongoose.model() to compile a model based on the schema 'thoughtSchema'
const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
