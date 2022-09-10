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

router.post(
  "/admin/products/addproducts",
  authMilddleware,
  upload.single("image01"),
  addPost
);
router.get("/foods/", getPost);
router.delete("/admin/products/:id", authMilddleware, deletePost);
router.put("/admin/products/:id", authMilddleware, upadatePost);
router.put(
  "/admin/products/image/:id",
  authMilddleware,

  upadateImage
);

module.exports = router;
