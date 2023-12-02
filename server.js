require('dotenv').config();
const cors = require('cors');
const express = require('express');
const server = express();
const userRouter = require('./api/users/users-router');
const data = require('./api/data');

// middleware to parse json bodies
server.use(express.json());
server.use('/api/users',userRouter);


// get all users
server.get('/',(req,res) => {
    res.json({message: `hello world from users!`});
});

// creates a user in the request body and responds with newly created user

// checks username and password in the request body and responds with message

module.exports = server;