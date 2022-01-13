// this file contains conntion to DB

const mongoose = require("mongoose");

const connectDB = async () => {

    try {

        await mongoose.connect("mongodb+srv://piptanto:Blabla 2021_12@cluster0.dirzf.mongodb.net/mini_twitter?retryWrites=true&w=majority")
        
        
    // db name should be in lower case
        console.log('MONGO DB connected....')
    } catch (err) {

        console.error(err.message)

        // If failure then exit server
        process.exit(1)
    }
}


module.exports = connectDB;