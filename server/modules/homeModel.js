const mongoose = require("mongoose");
const homeSchema = mongoose.Schema({
  // categoryModel
  display: {
    type: String,
  },
  imgUrl: {
    type: String,
  },

  image: {
    type: String,
  },
  // Header
  logo: {
    type: String,
    titleHeader: {
      type: String,
    },
  },
  desc: {
    type: String,
  },

  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});
module.exports = mongoose.model("home", homeSchema);
