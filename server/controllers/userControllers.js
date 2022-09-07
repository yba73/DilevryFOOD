const User = require("../modules/userModule");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
// @description register a new user
// @params POST /api/v1/users/register
// @access PUBLIC
exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password, role, isAdmin } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser)
      return res.status(400).json({ msg: "User already registread." });

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      username,
      email,
      role,
      isAdmin,
      password: hash,
    });
    const roleUser = newUser.role;
    const roleAdmin = newUser.isAdmin;

    const token = jwt.sign({ sub: newUser._id }, process.env.JWT_SECRT);
    res.json({ success: true, token });
    console.log("role", roleUser);
    console.log("role admin", roleAdmin);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong." });
  }
};

// @description login as new user
// @params POST /api/v1/users/login
// @access PUBLIC
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (!existUser)
      return res.status(400).json({ msg: "You should register first." });

    var validate = await bcrypt.compare(password, existUser.password);
    if (!validate) return res.status(400).json({ msg: "Invalid password." });

    const token = jwt.sign({ sub: existUser._id }, process.env.JWT_SECRT);
    res.json({ success: true, token });
    // console.log("user", newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong ." });
  }
};
// @description get user information
// @params GET /api/v1/users/
// @access PRIVATE
exports.getUserInfo = async (req, res) => {
  try {
    const userInfo = await User.findById(req.userId).select("-password -__v");
    res.json(userInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong ." });
  }
};
