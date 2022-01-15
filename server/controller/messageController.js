// this file contains 'all the logic/functions for Message Schema

const Message = require('../models/MessageSchema')


// to get all messages
getMessages = async (req, res) => {
    
    const messageData = await Message.find();
    console.log('List of Messages :', messageData)
    res.send(messageData)

}


// to create a Message for specific user id e.g.61e079ba31a4bb0e6a2d2c74

createMessages = async (req, res) => {

    
    const messageDoc = {
        message: req.body.message,
        user:req.params.user
    }

    console.log('messageDoc ', messageDoc)
    console.log(' req.body ', req.body)
    console.log('req.params', req.params)  
    
    let NewMessage = new Message(messageDoc) 
    


    try {

        await NewMessage.save((err, doc) => {
            if (err) {
                /* res.send(err) */ console.log(err)
                res.send({ success: 'false', message: 'Not able to create nee Message' })
            }
        else {
            console.log("New Message created", doc);
            res.send(doc)
            // res.send({success: true})
        }
         })
    }
    catch (err) {
         res.send({success:'false',message:'Not able to create Message'})
    }

   
 }


// to get messages of specific User

// user :: 61e076796a18ac312b073b50
getMessagesbyID = async (req, res) => {
     
    console.log('req.params', req.params)   
    console.log('req.query',req.query)

    

    try {

        const messageData = await Message.find({user:req.params.user});
        console.log('Messages by User ID :', messageData)
        if (messageData) { res.send(messageData) }
        else res.send({id:1,success:false,Message:'User Not Found'})
        
     }
    catch (err) {
        res.send({id:1,success:false,Message:'User Not Found'})

    }
}
 

// to delete a message by Id  e.g. //_id 61e2ce5aedd9663ae1303c3d
deleteOneMessage = async (req, res) => {

    console.log('req.params for deletion', req.params) 

    try {
           await Message.findByIdAndDelete( req.params.id , function (err, docs) {
                if (err) {
                    console.log(err)
                    // res.send(err)
                     res.send({id:1,success:false,Message:'Message ID Wrong'})
                }
                else {
                    console.log("Removed Message : ", docs);
                    res.send({success:'True',Message:'Message Deleted'})
                }

        } ).clone()
     }
    catch (err) {
        //   res.send({id:1,success:false,Message:'User Not Found'})
        console.log('err in catch',err)
       
     }
  
    
}

// // Update :: to update a message in messages collection  /update/message/:id
// updateOneMessage = async (req, res) => { 

//     console.log('req.params', req.params) 
//     console.log('Data from Client: ', req.body)  

//     try {
//          await Message.findByIdAndUpdate(
//             { _id: req.params.id }   // 1st argument giving id of the object needs to be updated
//             ,{
//                 visited:"true"
//             },      // 2nd argument what needs to be updated
//             { new: true }
//         )
//         .then(item => {
//             res.send(item);
//             console.log('Params id: ', req.params)
//             console.log('Updated Doc: ' , item)
                  
//          // console.log('req.body.name: ',req.body.name)   
//         })
//     }
//     catch (err) {
        
//     }
// }

 //to get a message with a specific message id
 getMessagebyMessageID = async (req, res) => {
     
    console.log('req.params', req.params)   
    console.log('req.query',req.query)

    try {

    const messageByIdData = await Message.find({_id:req.params.message});
    console.log('Messages by Message ID :', messageByIdData)
    if (messageByIdData) { res.send(messageByIdData) }
    else res.send({success:false})

    } catch(error) {
    
console.log(error.message);
res.status(404).send("failed");
        
 }
 }

module.exports = {
    getMessages,
    createMessages,
    getMessagesbyID,
    deleteOneMessage,
    getMessagebyMessageID
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
     