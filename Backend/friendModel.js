const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "A friend must have a name"],
    minLength: [3, "A name cannot be less than 2 characters"],
    maxLength: [10, "A name cannot be more than 10 characters"],
  },
  image: String,
  gender: {
    type: String,
    required: [true, "A friend must have a gender"],
    enum: {
      values: ["Male", "Female", "Third gender"],
      message: "A gender can be: Male , Female , Third gender",
    },
  },
  balance: Number,
});

// MIDDLEWARE

friendSchema.pre("create", function () {
  this.id = crypto.randomUUID();
});

const Friend = mongoose.model("Friend", friendSchema);

module.exports = Friend;
