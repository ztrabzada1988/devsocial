const express = require("express");
const router = express.Router();

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public

router.get("/test", (req, res) => {
  // on the browser it will be api/profile/test not /test
  res.json({ msg: "Profile Works" });
});

module.exports = router;
