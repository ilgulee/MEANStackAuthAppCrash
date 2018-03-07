const express = require('express');
const router=express.Router();

//Register  we don't need to do /users/register : reduce typing code.
router.get('/register', (req, res,next) => {
    res.send('register');
});

//Authenticate
router.post('/authenticate', (req, res,next) => {
    res.send('authenticate');
});

//Profile
router.get('/profile', (req, res,next) => {
    res.send('profile');
});

//Validate
router.get('/validate', (req, res,next) => {
    res.send('validate');
});
module.exports=router;