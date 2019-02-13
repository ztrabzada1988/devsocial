const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) => { // on the browser it will be api/users/posts not /posts
    res.json({ msg: "Posts Works"});
});

module.exports = router;