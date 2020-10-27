const { words } = require("../data/words");

// write your handlers here...
const getWord = (req, res) => {
  console.log(req.params.id);
  const findWord = words.filter((word) => {
    if (word.id == req.params.id) {
      return true;
    }
  });
  res.status(200).json({
    status: 200,
    message: findWord[0],
  });
};

const getWordIdAndCount = (req, res) => {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  res.status(200).json({
    status: 200,
    message: { id: randomWord.id, letterCount: randomWord.letterCount },
  });
};
const getWordStatus = (req, res) => {
  const id = req.params.id;
  const guessed = req.params.letter;
  const selectedWordArr = words.filter((word) => {
    if (word.id == id) {
      return true;
    }
  });
  if (selectedWordArr.length === 0) {
    res.status(400).json({
      status: 400,
      message: `There are no words with the ID of ${id}.`,
    });
  } else if (guessed.length !== 1 || typeof guessed !== "string") {
    res.status(400).json({
      status: 400,
      message: `${guessed} is not valid.`,
    });
  } else {
    const selectedWord = selectedWordArr[0].word;
    const wordSplitArr = selectedWord.split("");
    const resultsArr = wordSplitArr.map((letter) => {
      if (letter == guessed) {
        return true;
      } else {
        return false;
      }
    });
    const hangmanResults = resultsArr
      .map((bool) => {
        if (bool === true) {
          return guessed;
        } else {
          return "_";
        }
      })
      .join(" ");
    if (resultsArr.indexOf(true) !== -1) {
      res.status(200).json({
        status: 200,
        isLetterHere: resultsArr,
        hangman: hangmanResults,
      });
    } else {
      res.status(400).json({
        status: 400,
        isLetterHere: "Incorrect, try again.",
        hangman: hangmanResults,
      });
    }
  }
};

module.exports = { getWord, getWordIdAndCount, getWordStatus };
