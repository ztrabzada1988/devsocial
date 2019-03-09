const mongoose = require("mongoose"); // library to interact with mongodb
const Schema = mongoose.Schema;

// Create Schema
const PostsSchema = new Schema({
  post: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});
