const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");
const moment = require("moment");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: () => moment().format("LLL"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model("thought", thoughtSchema);

module.exports = Thought;

// thoughtText

// String
// Required
// Must be between 1 and 280 characters

// createdAt

// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query

// username (The user that created this thought)

// String
// Required

// reactions (These are like replies)

// Array of nested documents created with the reactionSchema
