const {Game} = require("../models");

const getAllGame = async (req, res) => {
    try {
        const ListGame = await Game.findAll();
        res.status(200).send(ListGame);
    } catch (error) {
        res.status(500).send(error);
    }
};

const createGame = async (req, res) => {
    const { gameName } = req.body;
    try {
      const newGame = await Game.create({ gameName });
      res.status(201).send(newGame);
    } catch (error) {
      res.status(500).send(error);
    }
  };

module.exports = {
    getAllGame,
    createGame
}