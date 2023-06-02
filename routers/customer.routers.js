const express = require('express');
const customerRouter =  express.Router();
const { register, login } = require('../controllers/customers.controllers');

customerRouter.post('/register', register);
customerRouter.post("/login", login);


module.exports = {
    customerRouter
}