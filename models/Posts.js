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
  },

  firstpost: [
    {
      title: {
        type: String,
        required: true
      },
      post: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ]
});
