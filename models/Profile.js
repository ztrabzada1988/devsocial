const mongoose = require("mongoose"); // library to interact with mongodb
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    company: {
        type: String,
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    skills: {
        type: [String], // array of strings
        required: true
    },
    bio: {
        type: String
    },
    githubusername: {
        type: String
    },
    
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);