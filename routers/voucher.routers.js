const express = require('express');
const voucherRouter =  express.Router();
const {Voucher} = require("../models");
const { checkExist } = require('../middlewares/validations/checkExist');
const { createVoucher, getAllVoucher, updateVoucher, deleteVoucher } = require('../controllers/vouchers.controllers');


voucherRouter.post('/', createVoucher);
voucherRouter.get('/', getAllVoucher);
voucherRouter.put('/:id',checkExist(Voucher), updateVoucher);
voucherRouter.delete('/:id',checkExist(Voucher), deleteVoucher);


module.exports = {
    voucherRouter
}