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
}, { timestamps: true })

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;