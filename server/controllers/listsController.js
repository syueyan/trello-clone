const List = require("../models/list");
const Board = require("../models/board")
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");


const createList = async (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      const createdList = await List.create({ ...req.body.list, boardId: req.body.boardId })
      await Board.findByIdAndUpdate(
        { _id: req.body.boardId },
        { $push: { "lists": createdList._id } }
      )
      const formattedList = await List.findOne(
        { _id: createdList._id }, "title _id createdAt updatedAt position boardId")
      res.json(formattedList)
    } catch (err) {
      next(new HttpError("Creating list failed, please try again", 500))
    }
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
}


const editList = (req, res, next) => {
  const listId = req.params.id
  const filter = { _id: listId }
  const { _id, ...update } = req.body

  try {
    List.findOneAndUpdate(filter, update, { new: true })
      .then((list) => res.json(list))
  } catch (err) {
    return next(new HttpError("List Edit Failed. Please try again.", 500));
  }
}


exports.createList = createList;
exports.editList = editList;