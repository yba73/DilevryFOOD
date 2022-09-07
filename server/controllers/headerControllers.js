const Header = require("../modules/headerModel");

// @description add new post
// @params POST /api/v1/posts/addpost
// @access PRIVATE
exports.addPost = async (req, res) => {
  try {
    const { title } = req.body;

    const imagePath = `http://localhost:5000/${req.file.path}`;
    const newPost = await Header.create({
      title,

      image: imagePath,
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
    const postList = await Header.find().populate("owner", "-password");
    res.json(postList);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};

// @description Update post by id
// @params PUT /api/v1/posts/:id
// @access PRIVATE-owner

exports.upadatePost = async (req, res) => {
  try {
    const postTask = await Header.findById(req.params.id);
    if (postTask.owner.toString() !== req.userId)
      return res.status(401).json({ msg: "you are not authorized" });
    await Header.findByIdAndUpdate(req.params.id, { ...req.body });
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
    const postTask = await Header.findById(req.params.id);
    if (postTask.owner.toString() !== req.userId)
      return res.status(401).json({ msg: "you are not authorized" });

    const imagePath = `http://localhost:5000/${req.file.path}`;
    await Header.findByIdAndUpdate(req.params.id, { image: imagePath });
    res.json({ sucsses: true });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong." });
  }
};
