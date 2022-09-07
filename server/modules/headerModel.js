const mongoose = require("mongoose");
const headrSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});
module.exports = mongoose.model("headr", headrSchema);
