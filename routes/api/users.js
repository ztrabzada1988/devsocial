const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');

// Load user model
const User = require('../../models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => { // on the browser it will be api/users/test not /test
    res.json({ msg: "Users Works"});
});

// @route   GET api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if(user) {
                return res.status(400).json({ email: 'Email already exists' });
            } else {
                const avatar = gravatar.url(req.body.email, { // see garavatr docs for below
                    s: '200', // Size
                    r: 'pg', // Rating
                    d: 'mm' // Default
                })

                const newUser = new User({ // below will be coming in from our frontend app (react form)
                    name: req.body.name,
                    email: req.body.email,
                    avatar,
                    password: req.body.password
                })
            }
        })
});

module.exports = router;
