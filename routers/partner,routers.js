const express = require('express');
const { checkExist } = require('../middlewares/validations/checkExist');
const partnerRouter =  express.Router();
const {Partner} = require("../models");
const { createPartner, getAllPartner, updatePartner, deletePartner } = require('../controllers/partner.controllers');


partnerRouter.post('/', createPartner);
partnerRouter.get('/', getAllPartner);
partnerRouter.put('/:id',checkExist(Partner), updatePartner);
partnerRouter.delete('/:id',checkExist(Partner), deletePartner);


module.exports = {
    partnerRouter
}