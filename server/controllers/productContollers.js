const Post = require("../modules/productsModel");

const cloudinary = require("../utils/cloudinary");
// @description add new post
// @params POST /api/v1/posts/addpost
// @access PRIVATE

exports.addPost = async (req, res) => {
  try {
    const { title, desc, price, category } = req.body;

    const result = await cloudinary.uploader.upload(req.file.path, {
      upload_preset: "foods",
    });
    const newPost = await Post.create({
      title,
      price,
      category,
      desc,
      image01: result.secure_url,
      //   image02: result.secure_url,
      //   image03: result.secure_url,
      owner: req.userId,
    });
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};

// @description GET post List
// @params GET /api/v1/posts
// @access PUBLIC
exports.getPost = async (req, res) => {
  try {
    const postList = await Post.find().populate("owner", "-password");
    res.json(postList);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};

// @description Delete post by id
// @params DELETE /api/v1/posts/:id
// @access PRIVATE-owner
exports.deletePost = async (req, res) => {
  try {
    const postTask = await Post.findById(req.params.id);
    if (postTask.owner.toString() !== req.userId)
      return res.status(401).json({ msg: "you are not authorized" });
    await Post.findByIdAndDelete(req.params.id);
    res.json({ sucsses: true });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};

// @description Update post by id
// @params PUT /api/v1/posts/:id
// @access PRIVATE-owner

exports.upadatePost = async (req, res) => {
  try {
    const postTask = await Post.findById(req.params.id);
    if (postTask.owner.toString() !== req.userId)
      return res.status(401).json({ msg: "you are not authorized" });
    await Post.findByIdAndUpdate(req.params.id, { ...req.body });
    res.json({ sucsses: true });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};

// @description Update post by id
// @params PUT /api/v1/posts/image/:id
// @access PRIVATE-owner

exports.upadateImage = async (req, res) => {
  try {
    const postTask = await Post.findById(req.params.id);
    if (postTask.owner.toString() !== req.userId)
      return res.status(401).json({ msg: "you are not authorized" });

    const result = await cloudinary.uploader.upload(req.file.path, {
      upload_preset: "foods",
    });
    await Post.findByIdAndUpdate(
      req.params.id,
      { image01: result.secure_url }
      //   { image02: result.secure_url },
      //   { image03: result.secure_url }
    );
    res.json({ sucsses: true });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};
