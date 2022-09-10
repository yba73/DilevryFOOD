const express = require("express");
const multer = require("multer");
const {
  register,
  login,
  getUserInfo,
} = require("../controllers/userControllers");
const router = express.Router();
const { body } = require("express-validator");
const { authMilddleware } = require("../middlewares/authMiddlewar");
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.post("/login", login);
router.post(
  "/register",
  body("email", "please enter a valid email.").isEmail(),
  body("password", "password must be at least 8 characters").isLength(8),
  upload.single("image"),
  register
);
router.get("/", authMilddleware, getUserInfo);
module.exports = router;
