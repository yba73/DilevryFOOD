const express = require("express");
const multer = require("multer");
const {
  addPost,
  getPost,
  upadatePost,
  upadateImage,
} = require("../controllers/headerControllers");
const router = express.Router();

const { authMilddleware } = require("../middlewares/authMiddlewar");

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

router.post("/addHeader", authMilddleware, upload.single("image"), addPost);
router.get("/", getPost);

router.put("/:id", authMilddleware, upadatePost);
router.put("/image/:id", authMilddleware, upload.single("image"), upadateImage);

module.exports = router;
