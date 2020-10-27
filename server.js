"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {
  getClientsHandler,
  getClientByIdHandler,
  addClientHandler,
  deleteClientById,
} = require("./handlers/clientHandlers");

const {
  getWord,
  getWordIdAndCount,
  getWordStatus,
} = require("./handlers/hangmanHandlers");

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints
  .get("/test", (req, res) => {
    res.status(200).json({
      status: 200,
      message: "It is a test endpoint",
    });
  })

  .get("/clients", getClientsHandler)

  .get("/clients/:id", getClientByIdHandler)

  .post("/clients", addClientHandler)

  .delete("/clients", deleteClientById)

  //Hangman game

  .get("/hangman/word/:id", getWord)

  .get("/hangman/word", getWordIdAndCount)

  .get("/hangman/guess/:id/:letter", getWordStatus)

  .listen(8000, () => console.log(`Listening on port 8000`));
