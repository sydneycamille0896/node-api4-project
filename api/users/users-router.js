const express = require('express');
const router = express.Router();
const Users = require('./users-model');
const {validateUserData, validateLogin } = require('../middleware/middleware');

// GET all users
router.get('/', (req,res) => {
    res.json(Users.getAll());
});

// POST new user
router.post('/', validateUserData, (req,res)=>{
    const newUser = Users.createUser(req.body);
    res.status(201).json(newUser);
});

// POST for login
router.post('/login', validateLogin, (req,res) => {
    res.json({message: `Welcome ${req.user.username}!`})
});

module.exports = router;