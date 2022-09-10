const jwt = require("jsonwebtoken");
const User = require("../modules/userModule");
exports.isAdminMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.token;

    if (!token) return res.status(401).json({ msg: "you are not authorized." });
    const verifyToken = await jwt.verify(token, process.env.JWT_SECRET);
    req.userId = verifyToken.sub;

    next();
    console.log(verifyToken);
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: error });
  }
};
