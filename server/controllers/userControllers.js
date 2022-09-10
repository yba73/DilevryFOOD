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
    const { username, email, password, isAdmin, role } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser)
      return res.status(400).json({ msg: "User already registread." });

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    const newUser = await User.create({
      isAdmin,

      role,
      username,
      email,
      password: hash,
    });
    const token = jwt.sign(
      { sub: newUser._id, role: newUser.role, isAdmin: newUser.isAdmin },
      process.env.JWT_SECRET
    );
    res.json({ success: true, token });
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
    const token = jwt.sign({ sub: existUser._id }, process.env.JWT_SECRET);
    res.json({ success: true, token });
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
