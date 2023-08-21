const express = require('express');
const { userList } = require("../models");
const { createStudents, getAllStudents, updateStudents, deleteStudents } = require('../controllers/students.controllers');
const { checkExist } = require('../middlewares/validations/checkExist');
const studentRouter =  express.Router();

studentRouter.post("/", createStudents);
studentRouter.get("/", getAllStudents);
studentRouter.put('/:id',checkExist(userList), updateStudents);
studentRouter.delete('/:id',checkExist(userList), deleteStudents);

module.exports = {
    studentRouter
}