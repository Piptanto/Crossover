
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const messageController = require('../controller/messageController')// importing controller file which is having CRUD and other functions of db

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// // Import Cookie Parser
// var cookieParser = require('cookie-parser');

// MIDDLEWARES
// router.use(cookieParser());

// Importing Middle ware to use in token authorization
// var auth = require('../middleware/authorization')


// ----------------------------------------routes for User controller-----------------------------------------------------------------------------------

// Get :: to get all the users from users collection
router.get('/get', userController.getUsers);


// Post :: to create user in users collection
router.post('/createuser', userController.createUsers);

// Get :: to get a user from users collection  /get/user/:id	
router.get('/get/user/:id', userController.getOneUser);





// ----------------------------------------routes for messages controller-----------------------------------------------------------------------------------

// Get :: to get all the messages from messages collection
router.get('/getmessages',messageController.getMessages)

// Post:: to create message document
router.post('/createmessages', messageController.createMessages)

// Get :: to get messages of specific user from messages collection
router.get('/getmessagesbyid/user/:user', messageController.getMessagesbyID)


// Route path: /user/:userId(\d+)
// Request URL: http://localhost:3000/user/42
// req.params: {"userId": "42"}



//exporting router file to be used in server.js
module.exports = router;