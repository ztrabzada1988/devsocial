const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => { // on the browser it will be api/users/test not /test
    res.json({ msg: "Users Works"});
});

module.exports = router;
