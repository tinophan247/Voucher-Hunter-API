const {userList} = require("../models");

const getAllStudents = async (req, res) => {
    try {
        const ListStudent = await userList.findAll();
        res.status(200).send(ListStudent);
    } catch (error) {
        res.status(500).send(error);
    }
};

const createStudents = async (req, res) => {
    const { name } = req.body;
    try {
      const newStudent = await userList.create({ name });
      res.status(201).send(newStudent);
    } catch (error) {
      res.status(500).send(error);
    }
  };

module.exports = {
    getAllStudents,
    createStudents
}