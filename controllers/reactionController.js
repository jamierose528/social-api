const { countReset } = require("console");
const { Reaction, Thought, User } = require("../models");

module.exports = {
  // POST to create a reaction stored in a single thought's reactions array field
  createReaction(req, res) {
    Reaction.create(req.body)
      .then((reaction) => res.json(reaction))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // DELETE to pull and remove a reaction by the reaction's reactionId value
  deleteReaction(req, res) {
    Reaction.findOneAndDelete({ _id: req.params.reactionId })
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: "No reaction with that ID" })
          : Thought.findOneAndUpdate(
              { reaction: req.params.reactionId },
              { $pull: { reaction: req.params.reactionId } },
              { new: true }
            )
      )
      .then(() => res.json({ message: "Reaction deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
};
