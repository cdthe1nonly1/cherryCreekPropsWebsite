const { Schema, model } = require("mongoose");

const propsSchema = new Schema({
  Piece_Title: {
    type: String,
    required: true,
    trim: true,
  },
  Theme: {
    type: String,
    required: true,
    trim: true,
  },
  Image: {
    type: String,
    required: true,
    trim: true,
  },
  Location: {
    type: Number,
    trim: true,
  },
  Quantity: {
    type: String,
    required: true,
    trim: true,
  },
  Requested_Start_Date: {
    type: String,
    required: true,
    trim: true,
  },
  Requeted_End_Date: {
    type: String,
    required: true,
    trim: true,
  },
});

const Helper = model("Props", propsSchema);

module.exports = Props;
