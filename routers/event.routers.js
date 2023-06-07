const express = require('express');
const { checkExist } = require('../middlewares/validations/checkExist');
const { createEvent, getAllEvent, updateEvent, deleteEvent } = require('../controllers/event.controllers');
const eventRouter =  express.Router();
const { Event } = require("../models");

eventRouter.post('/', createEvent);
eventRouter.get('/', getAllEvent);
eventRouter.put('/:id',checkExist(Event), updateEvent);
eventRouter.delete('/:id',checkExist(Event), deleteEvent);

module.exports = {
    eventRouter
}