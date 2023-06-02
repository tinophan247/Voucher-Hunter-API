const express = require('express');
const { getAllTypeOfStore, createTypeOfStore, updateTypeOfStore, deleteTypeOfStore } = require('../controllers/typeOfStore.controllers');
const { checkExist } = require('../middlewares/validations/checkExist');
const typeOfStoreRouter =  express.Router();
const {ToS} = require("../models");


typeOfStoreRouter.post('/', createTypeOfStore);
typeOfStoreRouter.get('/', getAllTypeOfStore);
typeOfStoreRouter.put('/:id',checkExist(ToS), updateTypeOfStore);
typeOfStoreRouter.delete('/:id',checkExist(ToS), deleteTypeOfStore);


module.exports = {
    typeOfStoreRouter
}