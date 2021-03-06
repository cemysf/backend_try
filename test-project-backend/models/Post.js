const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Posts", PostSchema);