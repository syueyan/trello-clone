const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: String,
  boardId: { type: Schema.ObjectId, ref: "Board" },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  position: Number,
  cards: [{ type: Schema.ObjectId, ref: "Card" }],
})

const List = mongoose.model('List', ListSchema);

module.exports = List;