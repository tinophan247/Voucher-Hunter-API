const {Store} = require("../models");

const createStore = async (req, res) => {
  const { partnerName, storeName, province, district, ward, address, tos } = req.body;
  try {
    const newStore = await Store.create({ partnerName, storeName, province, district, ward, address, tos });
    res.status(201).send(newStore);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllStore = async (req, res) => {
    try {
        const ListStore = await Store.findAll();
        res.status(200).send(ListStore);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateStore = async (req, res) => {
  const {id} = req.params;
  const { partnerName, storeName, province, district, ward, address, tos } = req.body;
  try {
      const detailStore = await Store.findOne({
        where: {
          id
        }
      });
      detailStore.partnerName=partnerName;
      detailStore.storeName=storeName;
      detailStore.province=province;
      detailStore.district=district;
      detailStore.ward=ward;
      detailStore.address=address;
      detailStore.tos=tos;
      await detailStore.save();

      res.status(200).send(detailStore);
  } catch (error) {
      res.status(500).send(error);
  }
};

const deleteStore = async (req, res) => {
  const {id} = req.params;
  try {
      await Store.destroy({
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
    createStore,
    getAllStore,
    updateStore,
    deleteStore
};
