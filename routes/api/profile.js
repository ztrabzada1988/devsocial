const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => { // on the browser it will be api/users/profile not /profile
    res.json({ msg: "Profile Works"});
});

module.exports = router;