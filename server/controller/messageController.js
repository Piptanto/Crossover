// this file contains 'all the logic/functions for Message Schema

const Message = require('../models/MessageSchema')


// to get all users
getMessages = async (req, res) => {
    
    const messageData = await Message.find();
    console.log('List of Messages :', messageData)
    res.send(messageData)

}


// to create User
createMessages = async (req, res) => {
    
    let NewMessage = new Message(req.body)

    console.log(' req.body ', req.body)

    //  1) Find the user which we get from body
    // 2) Than extract object ID of that user
    // 3) Assign the user: to that objectID

    await NewMessage.save((err, doc) => {
        if (err) { /* res.send(err) */ console.log(err) }
        else {
            console.log("New Message created", doc);
            res.send(doc)
            // res.send({success: true})
        }
    })
 }


// to get messages of specific User

// user :: 61e076796a18ac312b073b50
getMessagesbyID = async (req, res) => {
     
    console.log('req.params', req.params)   
    console.log('req.query',req.query)

    const messageData = await Message.find({user:req.params.user});
    console.log('Messages by User ID :', messageData)
    
    if (messageData) { res.send(messageData) }
    else res.send({success:false})


 }

module.exports = {
    getMessages,
    createMessages,
    getMessagesbyID
}



// createUSer = async (req, res) => { 
//     console.log('----------------------------------')
//     var token1 = new Tokens({ token: 'John' });
//      token1.save(token1).then(item => 
//         console.log('token1:  ', item))   
        
//     var user1 = new Users(
//         {
//             userEmail: 'johna@gmail.com',
//             token: token1._id
//         }
//     );
//      user1.save(user1).then(item => 
//         console.log('user1:  ', item))

// }
     