const {Voucher} = require("../models");

const makeid = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const createVoucher = async (req, res) => {
    const {name, description, discount, img, condition1, condition2, tos, startDate, endDate } = req.body;
    try {
      const newVoucher = await Voucher.create({ name, description, discount, img,  condition1, condition2, tos, startDate, endDate, code: makeid(12) });
      res.status(201).send(newVoucher);
    } catch (error) {
      res.status(500).send(error);
    }
  };

const getAllVoucher = async (req, res) => {
    try {
        const ListVoucher = await Voucher.findAll();
        res.status(200).send(ListVoucher);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateVoucher = async (req, res) => {
    const {id} = req.params;
    const { name, description, discount, img, code, condition1, condition2, tos, startDate, endDate } = req.body;
    try {
        const detailVoucher = await Voucher.findOne({
          where: {
            id
          }
        });
        detailVoucher.name = name;
        detailVoucher.description = description;
        detailVoucher.discount = discount;
        detailVoucher.img = img;
        detailVoucher.code = code;
        detailVoucher.condition1 = condition1;
        detailVoucher.condition2 = condition2;
        detailVoucher.tos = tos;
        detailVoucher.startDate = startDate;
        detailVoucher.endDate = endDate;
        await detailVoucher.save();
  
        res.status(200).send(detailVoucher);
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  const deleteVoucher = async (req, res) => {
    const {id} = req.params;
    try {
        await Voucher.destroy({
          where: {
            id
          }
        });
        res.status(200).send('Delete Success')
    } catch (error) {
        res.status(500).send(error);
    }
  };

module.exports ={
    createVoucher,
    getAllVoucher,
    updateVoucher,
    deleteVoucher
}