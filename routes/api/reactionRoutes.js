const router = require("express").Router();
const {
  createReaction,
  deleteReaction,
} = require("../../controllers/reactionController");

// api/thoughts/:thoughtId/reaction
router
  .route("/thoughts/:thoughtId/reactions")
  .post(createReaction)
  .delete(deleteReaction);

module.exports = router;
