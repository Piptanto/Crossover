// this file contains 'all the logic/functions for User Schema

// Import Model/Schema
const User = require('../models/UserSchema')

const Message = require('../models/MessageSchema')


// to get all users
getUsers = async (req, res) => {
    console.log('Get list');
    const usersData = await User.find();
    console.log('List of User :', usersData)
    res.send(usersData)

}

// to create User
createUsers = async (req, res) => {  

    let NewUser = new User(req.body)    

    console.log(' req.body received from Register Page: ', req.body)    
    
    try {
        await User.findOne({ username: req.body.username },(err,doc) => {
            if (doc) {
                console.log("data exist",doc);
               // res.send(`"User already exists in db :" ${doc}`);
                res.send("User already exists")
                // res.status(400).send({success: false})
                //res.redirect('/')
            }
            else {
                NewUser.save((err,doc) => {
                    if (err) { /* res.send(err) */ console.log(err)}
                    else {
                        console.log("New User created, msg from server",doc);
                        res.send(doc)
                        // res.send({success: true})
                    }
                });
        }
        if (err) {
            res.send({success:'false',message:'Not able to create User'})
        }        
        
    }).clone()  
     }
    catch(err){}

     

}

// to get a user by Id  e.g. //_id 61e076796a18ac312b073b50
getOneUser = async (req, res) => {

    console.log('req.params', req.params)   
    // console.log('req.query',req.query)
    try {
        
        const userData = await User.find({ _id: req.params.id });
        console.log('User by User ID : ', userData)
    
        if (userData) { res.send(userData) }
        else res.send({ success: false })
    }  
    catch (err) {
        res.send({id:1,success:false,Message:'User Not Found'})
    }

 }
 
 // to delete a user by Id  e.g. //_id 61e2f1a9edd9663ae1303c47
deleteOneUser = async (req, res) => {

    console.log('req.params', req.params) 
    try {
           await User.findByIdAndDelete( req.params.id , function (err, docs) {
                if (err) {
                    console.log('err from delete',err)
                    // res.send(err)
                     res.send({id:1,success:false,Message:'User Not Found'})
                }
                else {
                    console.log("Removed doc : ", docs);
                    res.send({success:true,Message:'User Deleted'})
                }
        } ).clone()
     }
    catch (err) {
        console.log('err from delete catch',err)
          res.send({id:1,success:false,Message:'User Not Found'})
    }
}



module.exports = {
    getUsers,
    createUsers,
    getOneUser,
    deleteOneUser
}