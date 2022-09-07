const express = require("express");
const multer = require("multer");
const {
  addPost,
  getPost,
  deletePost,
  upadatePost,
  upadateImage,
} = require("../controllers/productContollers");
const router = express.Router();

const { authMilddleware } = require("../middlewares/authMiddlewar");

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.post("/addProduct", authMilddleware, upload.single("image01"), addPost);
router.get("/", getPost);
router.delete("/:id", authMilddleware, deletePost);
router.put("/:id", authMilddleware, upadatePost);
router.put(
  "/image/:id",
  authMilddleware,

  upadateImage
);

module.exports = router;
