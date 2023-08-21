const { userList } = require("../models");

const getAllStudents = async (req, res) => {
  try {
    const ListStudent = await userList.findAll();
    res.status(200).send(ListStudent);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createStudents = async (req, res) => {
  const { username, dob, phone, email, feedback } = req.body;
  try {
    const newStudent = await userList.create({ username, dob, phone, email, feedback });
    res.status(201).send(newStudent);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateStudents = async (req, res) => {
  const { id } = req.params;
  const { username, dob, phone, email, feedback } = req.body;
  try {
    const detailStudent = await userList.findOne({
      where: {
        id
      }
    });
    detailStudent.username = username;
    detailStudent.dob = dob;
    detailStudent.phone = phone;
    detailStudent.email = email;
    detailStudent.feedback = feedback;
    await detailStudent.save();

    res.status(200).send(detailStudent);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteStudents = async (req, res) => {
  const { id } = req.params;
  try {
    await userList.destroy({
      where: {
        id
      }
    });
    res.status(200).send('Delete Success')
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllStudents,
  createStudents,
  updateStudents,
  deleteStudents
}