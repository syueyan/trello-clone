const Board = require("../models/board");
const List = require("../models/list")
const Card = require("../models/card")
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const getBoards = (req, res, next) => {
  Board.find({}, "title _id createdAt updatedAt").then((boards) => {
    res.json({
      boards,
    });
  });
};

const createBoard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    Board.create(req.body.board)
      .then((board) => {
        Board.find({ _id: board._id }, "title _id createdAt updatedAt").then(
          (board) => res.json({ board })
        );
      })
      .catch((err) =>
        next(new HttpError("Creating board failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const getBoardId = (req, res, next) => {
  const boardId = req.params.id;
  Board.findById(boardId).populate({ 
    path: 'lists', 
    populate: { 
      path: "cards", 
    }})
    .then((board) => {
      console.log(board)
      res.json({
        board,
      });
    })
    .catch((err) => {
      next(new HttpError("The specified board id does not exist.", 404))
    })
}

// const editList = (req, res, next) => {
//   const listId = req.params.id
//   const filter = { _id: listId }
//   const update = req.body
//   // after it finds the list in db
//   // it updates & returns the list
//   // .then finds the list in db and "returns" it in res
//   List.findOneAndUpdate(filter, update, { new: true }).then((list) => {
//     (list) => res.json(list)
//   })
// }

// // boardId is in the schema
// // but it doesn't default to anything
// const createCard = (req, res, next) => {
//   Card.create({...req.body.card, listId: req.body.listId}).then((card) => {
//     res.json(card)
//   })
// }

// // the comments and actions fields
// // hold an array of objects
// const getCard = (req, res, next) => {
//   const cardId = req.params.id

//   // find card by id in db
//   // then "return" it in res
//   Card.findById(cardId).then((card) => {
//     console.log(card)
//   });
// }

// // generates card actions
// // payload should include at least one attribute:
// // title, listId, position, description, archived, dueDate, completed, labels
// const editCard = (req, res, next) => {
//   const cardId = req.params.id
//   const { title, ...attributes } = req.body.card
//   const filter = { title }
//   const update = attributes

//   Card.findOneAndUpdate(filter, update, { new: true }).then((card) => {
//     console.log(card)
//   })
// }

exports.getBoards = getBoards;
exports.createBoard = createBoard;
exports.getBoardId = getBoardId;
// exports.createList = createList;
// exports.editList = editList;
// exports.createCard = createCard;
// exports.getCard = getCard;
// exports.editCard = editCard;
