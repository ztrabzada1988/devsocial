const express = require("express");
const router = express.Router();

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public

router.get("/test", (req, res) => {
  // on the browser it will be api/posts/test not /tests
  res.json({ msg: "Posts Works" });
});

module.exports = router;
