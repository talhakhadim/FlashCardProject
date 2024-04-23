const express = require('express');
const flashCardController = require('../controllers/flashCardController');
const flashCardRouter = express.Router();

flashCardRouter.get('/', flashCardController.getFlashcards);
  
module.exports = flashCardRouter;
  