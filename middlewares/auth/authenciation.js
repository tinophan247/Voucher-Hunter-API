const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, "tinophan247");
    if (decode) {
      req.user = decode;
      return next();
    }else {
        res.status(401).send("Bạn phải đăng nhập để thực hiện công việc này");
    }
  } catch (error) {
    res.status(401).send("Bạn phải đăng nhập để thực hiện công việc này");
  }
};

module.exports = {
  authenticate,
};
