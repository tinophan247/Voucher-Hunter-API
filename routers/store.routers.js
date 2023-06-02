const express = require('express');
const { checkExist } = require('../middlewares/validations/checkExist');
const storeRouter =  express.Router();
const {Store} = require("../models");
const { createStore, getAllStore, updateStore, deleteStore } = require('../controllers/store.controllers');


storeRouter.post('/', createStore);
storeRouter.get('/', getAllStore);
storeRouter.put('/:id',checkExist(Store), updateStore);
storeRouter.delete('/:id',checkExist(Store), deleteStore);


module.exports = {
    storeRouter
}