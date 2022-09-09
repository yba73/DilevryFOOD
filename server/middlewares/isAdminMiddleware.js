const jwt = require("jsonwebtoken");
const User = require("../modules/userModule");

exports.isAdminMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) return res.status(401).json({ msg: "you are not authorized" });
    const verifyToken = await jwt.verify(token, process.env.JWT_SECRET);
    req.userId = verifyToken.sub;
    // console.log("token", verifyToken);
    if (verifyToken.sub !== "6318bdbcffdac602f82be99d")
      return res.status(401).json({ msg: "you are not an admin" });

    next();

    // console.log("verifyToken", verifyToken.role);
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: error });
  }
};
