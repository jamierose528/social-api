const { Schema, model } = require("mongoose");
const thoughtSchema = require("./thought");

const reactionSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trimmed: " ",
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      isEmail: true,
    },
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User = model("user", userSchema);

module.exports = User;

// username

// String
// Unique
// Required
// Trimmed

// email

// String
// Required
// Unique
// Must match a valid email address (look into Mongoose's matching validation)

// thoughts

// Array of _id values referencing the Thought model

// friends

// Array of _id values referencing the User model (self-reference)
