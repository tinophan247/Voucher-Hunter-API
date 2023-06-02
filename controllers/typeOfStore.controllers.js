const {ToS} = require("../models");

const createTypeOfStore = async (req, res) => {
  const { description } = req.body;
  try {
    const newToS = await ToS.create({ description });
    res.status(201).send(newToS);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllTypeOfStore = async (req, res) => {
    try {
        const ListToS = await ToS.findAll();
        res.status(200).send(ListToS);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateTypeOfStore = async (req, res) => {
  const {id} = req.params;
  const { description } = req.body;
  try {
      const detailToS = await ToS.findOne({
        where: {
          id
        }
      });
      detailToS.description = description;
      await detailToS.save();

      res.status(200).send(detailToS);
  } catch (error) {
      res.status(500).send(error);
  }
};

const deleteTypeOfStore = async (req, res) => {
  const {id} = req.params;
  try {
      await ToS.destroy({
        where: {
          id
        }
      });
      res.status(200).send('Delete Success')
  } catch (error) {
      res.status(500).send(error);
  }
};

module.exports = {
  getAllTypeOfStore,
  createTypeOfStore,
  updateTypeOfStore,
  deleteTypeOfStore
};
