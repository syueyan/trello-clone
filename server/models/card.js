const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: String,
  description: {
    type: String,
    default: "",
  },
  labels: {
    type: Array,
    default: [],
  },
  listId: { type: Schema.ObjectId, ref: "List" },
  archived: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  dueDate: {
    type: Date,
    default: null,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  boardId: { type: Schema.ObjectId, ref: "Board" },
  commentsCount: {
    type: Number,
    default: 0,
  }
})

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;