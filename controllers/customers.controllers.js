const { Customer } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const {fullname, username, email, phone, address, ward, district, province, birthday, password  } = req.body;
  try {
    const salt = bcrypt.genSaltSync(16);
    const hashPassword = bcrypt.hashSync(password, salt);

    const newCustomer = await Customer.create({fullname, username, email, avatar : 'https://cdn-icons-png.flaticon.com/512/3607/3607444.png', phone, address, ward, district, province, birthday,role : 'Customer', password : hashPassword});
    res.status(201).send(newCustomer);
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const customer = await Customer.findOne({
    where: {
      username,
    },
  });
  if (customer) {
    const isAuth = bcrypt.compareSync(password, customer.password);
    if (isAuth) {
      const token = jwt.sign(
        { username: customer.username, role: customer.role, avatar: customer.avatar},
        "voucherHunter",
        { expiresIn: 60 * 60 }
      );
      const fullName = customer.fullname;
      const role = customer.role;
      const avatar = customer.avatar;
      res.status(200).send({ message: "Đăng nhập thành công", token, fullName, role ,avatar });
    } else {
      res.status(500).send({ message: "Tài khoản hoặc mật khẩu không đúng" });
    }
  } else {
    res.status(500).send({ message: "Tên đăng nhập không tồn tại" });
  }
};

module.exports = {
    register,
    login
}
