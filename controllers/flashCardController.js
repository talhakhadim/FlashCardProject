const FlashCard = require("../models/Flashcard");

module.exports = {
  //get all flashcards
  getFlashcards: async (req, res) => {
    try {
      const flashcards = await FlashCard.find();
      return res.json(flashcards);
    } catch (error) {
      console.log("Error: getFlashcards", error.message);
      return res.status(500).json({ msg: error.message });
    }
  },
};
