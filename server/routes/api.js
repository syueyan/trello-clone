const express = require('express');
// router can be passed 3 params: request, response, next
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController")
const cardsController = require("../controllers/cardsController")
const { validateBoard } = require("../validators/validators");

// board
router.get('/boards', boardsController.getBoards );
router.post('/boards', validateBoard, boardsController.createBoard );
router.get('/boards/:id', boardsController.getBoardId);

// list
router.post('/lists', listsController.createList);
router.put('/lists/:id', listsController.editList);

// card
router.post('/cards', cardsController.createCard);
router.get('/cards/:id', cardsController.getCardId);
// router.put('/cards/:id', boardsController.editCard);

module.exports = router;