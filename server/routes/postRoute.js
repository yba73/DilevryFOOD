const express = require("express");
const multer = require("multer");
const { Post } = require("../modules/postModule");
const {
  addPost,
  getPost,
  deletePost,
  upadatePost,
  upadateImage,
} = require("../controllers/postContollers");
const { authMilddleware } = require("../middlewares/authMiddlewar");
// const { userLogin } = require("../middlewares/isAdminMiddleware");

// const { isAdminMiddleware, userLogin } = require("../middlewares/isAdminMiddleware");

const router = express.Router();
const User = require("../modules/userModule");
const { isAdminMiddleware } = require("../middlewares/isAdminMiddleware");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "my-images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/addPost",
  //authMilddleware,
  isAdminMiddleware,

  upload.single("image"),
  addPost
);
router.get("/", getPost);
router.delete("/:id", authMilddleware, deletePost);
router.put("/:id", authMilddleware, upadatePost);
router.put("/image/:id", authMilddleware, upload.single("image"), upadateImage);

module.exports = router;
