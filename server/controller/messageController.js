const Message = require('../models/MessageSchema')





// to get all users
getMessages = async (req, res) => {
    console.log('Get list');
    const usersData = await User.find();
    console.log('List of User :', usersData)
    res.send(usersData)

}

module.exports = {
    getMessages,
    createMessages
}