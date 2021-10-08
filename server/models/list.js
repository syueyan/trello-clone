const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: String,
  boardId: { type: Schema.ObjectId, ref: "Board" },
  position: Number,
  cards: [{ type: Schema.ObjectId, ref: "Card" }],
}, { timestamps: true }) 

const List = mongoose.model('List', ListSchema);

module.exports = List;