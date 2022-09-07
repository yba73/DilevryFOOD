const jwt = require("jsonwebtoken");
const User = require("../modules/userModule");
exports.authMilddleware = async (req, res, next) => {
  try {
    const token = req.headers.token;

    if (!token) return res.status(401).json({ msg: "you are not authorized." });
    const verifyToken = await jwt.verify(token, process.env.JWT_SECRT);
    req.userId = verifyToken.sub;

    next();
    console.log(req.user);
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: error });
  }
};
