
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController') // importing controller file which is having CRUD and other functions of db

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// // Import Cookie Parser
// var cookieParser = require('cookie-parser');

// MIDDLEWARES
// router.use(cookieParser());

// Importing Middle ware to use in token authorization
// var auth = require('../middleware/authorization')


// Get :: to get all the users from db
router.get('/get', userController.getUsers);


// Post :: to create user in User db
router.post('/createuser', userController.createUsers);


//exporting router file to be used in server.js
module.exports = router;