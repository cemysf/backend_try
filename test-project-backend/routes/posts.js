const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find().limit(10);
        res.json(posts);
    } catch (err) {
        res.json({message: err})
    }
    console.log("returned posts..")
});


router.post("/", async (req,res) => {
    const post = new Post({
        text: req.body.text,
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
    console.log("saved a new post..")
});

module.exports = router;