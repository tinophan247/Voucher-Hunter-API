const { Customer, Voucher } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const {fullname, username, email, phone, address, ward, district, province, birthday, password  } = req.body;
  try {
    const salt = bcrypt.genSaltSync(16);
    const hashPassword = bcrypt.hashSync(password, salt);

    const newCustomer = await Customer.create({fullname, username, email, avatar : 'https://cdn-icons-png.flaticon.com/512/3607/3607444.png', phone, address, ward, district, province, birthday ,role : 'Customer', password : hashPassword, voucherList: 1});
    res.status(201).send(newCustomer);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllCustomers = async (req, res) => {
  try {
      const ListUser = await Customer.findAll({
        include: [{
          model : Voucher,
          as: "voucher"
        }],
      });
      res.status(200).send(ListUser);
  } catch (error) {
      res.status(500).send(error);
  }
};

const updateCustomers = async (req, res) => {
  const {id} = req.params;
  const { fullname, username, email, phone , province, district, ward, address, birthday, role, voucherList } = req.body;
  try {
      const detailCustomer = await Customer.findOne({
        where: {
          id
        }
      });
      detailCustomer.fullname = fullname;
      detailCustomer.username = username;
      detailCustomer.email = email;
      detailCustomer.phone = phone;
      detailCustomer.province = province;
      detailCustomer.district = district;
      detailCustomer.ward = ward;
      detailCustomer.address = address;
      detailCustomer.birthday = birthday;
      detailCustomer.role = role;
      detailCustomer.voucherList = voucherList;
      await detailCustomer.save();

      res.status(200).send(detailCustomer);
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
        { username: customer.username, role: customer.role, avatar: customer.avatar, id: customer.id},
        "voucherHunter",
        { expiresIn: 60 * 60 }
      );
      const fullName = customer.fullname;
      const role = customer.role;
      const avatar = customer.avatar;
      const id = customer.id;
      res.status(200).send({ message: "Đăng nhập thành công", token, fullName, role ,avatar,id });
    } else {
      res.status(500).send({ message: "Tài khoản hoặc mật khẩu không đúng" });
    }
  } else {
    res.status(500).send({ message: "Tên đăng nhập không tồn tại" });
  }
};

const deleteCustomer = async (req, res) => {
  const {id} = req.params;
  try {
      await Customer.destroy({
        where: {
          id
        }
      });
      res.status(200).send('Xóa thành công')
  } catch (error) {
      res.status(500).send(error);
  }
};

module.exports = {
    register,
    login,
    getAllCustomers,
    updateCustomers,
    deleteCustomer
}
