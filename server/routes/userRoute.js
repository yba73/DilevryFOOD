const express = require("express");
const {
  register,
  login,
  getUserInfo,
} = require("../controllers/userControllers");
const router = express.Router();
const { body } = require("express-validator");
const { authMilddleware } = require("../middlewares/authMiddlewar");

router.post("/login", login);
router.post(
  "/register",
  body("email", "please enter a valid email.").isEmail(),
  body("password", "password must be at least 8 characters").isLength(8),
  register
);
router.get("/", authMilddleware, getUserInfo);
module.exports = router;
