const express = require("express");
const multer = require("multer");
const {
  addPost,
  getPost,
  deleteProduct,
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

router.post("/addproducts", authMilddleware, upload.single("image01"), addPost);
router.get("/", getPost);
router.delete("/:id", deleteProduct);
router.put("/:id", authMilddleware, upadatePost);
router.put(
  "/image/:id",
  authMilddleware,

  upadateImage
);

module.exports = router;
