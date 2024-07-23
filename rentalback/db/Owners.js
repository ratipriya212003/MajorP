const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
  ownerName: {
    type: String,
    required: true,
  },
  ownerMobile: {
    type: Number,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("owners", OwnerSchema);
