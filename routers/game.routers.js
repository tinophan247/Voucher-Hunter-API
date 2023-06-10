const express = require('express');
const { getAllGame, createGame } = require('../controllers/game.controllers');
const gameRouter =  express.Router();

gameRouter.post("/", createGame);
gameRouter.get("/", getAllGame);

module.exports = {
    gameRouter
}