const Card = require('../models/card')
const List = require('../models/list')
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createCard = async (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    try {
      const list = await List.findById({ _id: req.body.listId })
      const createdCard = await Card.create({
        ...req.body.card,
        listId: req.body.listId,
        boardId: list.boardId
      })

      await List.findByIdAndUpdate(
        { _id: req.body.listId },
        { $push: { "cards": createdCard._id } }
      )

      const formattedCard = await Card.findById({ _id: createdCard._id}, { __v: 0 }) 
      res.json(formattedCard)
    } catch (err) {
      next(new HttpError("Creating card failed, please try again", 500))
    }
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
}

const getCardId = (req, res, next) => {
  const cardId = req.params.id;
  Card.findById(cardId, { __v: 0 }).then((card) => {
      res.json({
        card,
      });
    })
    .catch((err) => {
      next(new HttpError("The specified board id does not exist.", 404))
    })
}

exports.createCard = createCard
exports.getCardId = getCardId

