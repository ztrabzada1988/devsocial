const express = require('express');
const router = express.Router();

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public

router.get('/test', (req, res) => { // on the browser it will be api/users/test not /test
    res.json({ msg: "Users Works"});
});

module.exports = router;
