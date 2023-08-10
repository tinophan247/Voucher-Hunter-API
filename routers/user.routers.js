const express = require('express');
const { createStudents, getAllStudents } = require('../controllers/students.controllers');
const studentRouter =  express.Router();

studentRouter.post("/", createStudents);
studentRouter.get("/", getAllStudents);

module.exports = {
    studentRouter
}