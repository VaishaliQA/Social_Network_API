const { Schema, Types } = require("mongoose");
const moment = require("moment");

// Schema to Reaction User model
const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: "Please enter your reaction",
    maxLength: 280,
  },
  username: {
    type: String,
    required: "You need a username!",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) =>
      moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
  },
});

module.exports = ReactionSchema;
