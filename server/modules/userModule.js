const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean },

  role: {
    type: String,
    enume: ["admin", "customer"],
    default: "customer",
  },
});
module.exports = mongoose.model("user", userSchema);
