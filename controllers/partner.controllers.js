const {Partner} = require("../models");

const createPartner = async (req, res) => {
  const { partnerName, description, taxCode, top } = req.body;
  try {
    const newPartner = await Partner.create({ partnerName, description, taxCode, top  });
    res.status(201).send(newPartner);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllPartner = async (req, res) => {
    try {
        const ListPartner = await Partner.findAll();
        res.status(200).send(ListPartner);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updatePartner = async (req, res) => {
  const {id} = req.params;
  const { partnerName, description, taxCode, top } = req.body;
  try {
      const detailPartner = await Partner.findOne({
        where: {
          id
        }
      });
      detailPartner.partnerName = partnerName;
      detailPartner.description = description;
      detailPartner.taxCode = taxCode;
      detailPartner.top = top;
      await detailPartner.save();

      res.status(200).send(detailPartner);
  } catch (error) {
      res.status(500).send(error);
  }
};

const deletePartner = async (req, res) => {
  const {id} = req.params;
  try {
      await Partner.destroy({
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
    getAllPartner,
  createPartner,
  updatePartner,
  deletePartner
};
