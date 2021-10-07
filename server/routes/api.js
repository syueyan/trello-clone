const express = require('express');
// router can be passed 3 params: request, response, next
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const { validateBoard } = require("../validators/validators");

// board
router.get('/boards', boardsController.getBoards );
router.post('/boards', validateBoard, boardsController.createBoard );
router.get('/boards/:id', boardsController.getBoardId);

// list
// router.post('/lists', validateBoard, boardsController.createList);
// router.put('/lists/:id', boardsController.editList);

// card
// router.post('/cards', boardsController.createCard);
// router.get('/cards/:id', boardsController.getCard);
// router.put('/cards/:id', boardsController.editCard);

module.exports = router;