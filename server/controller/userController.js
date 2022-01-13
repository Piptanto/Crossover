// this file contains 'all the logic/functions

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

    // let NewUser = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password,
    //     role: req.body.role
        
    // }) 

    // Above code can be written as below
    
    // const { username, password } = req.body   

    let NewUser = new User(req.body)    

    console.log(' req.body received from Register Page: ', req.body)    
    

    await User.findOne({ username: req.body.username },(err,doc) => {
            if (doc) {
                console.log("data exist",doc);
                res.send(`"User already exists in db :" ${doc}`);
                
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
            console.log('Error',err)
        }        
        
    }).clone()   

}


module.exports = {
    getUsers,
    createUsers
}