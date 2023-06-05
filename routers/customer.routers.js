const express = require('express');
const customerRouter =  express.Router();
const { register, login, getAllCustomers, updateCustomers, deleteCustomer } = require('../controllers/customers.controllers');
const { checkExist } = require('../middlewares/validations/checkExist');
const { Customer } = require("../models");

customerRouter.post('/register', register);
customerRouter.post("/login", login);
customerRouter.get("/", getAllCustomers);
customerRouter.put("/:id", checkExist(Customer), updateCustomers);
customerRouter.delete("/:id", checkExist(Customer), deleteCustomer);

module.exports = {
    customerRouter
}