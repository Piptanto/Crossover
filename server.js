const express = require('express');
const bodyParser = require('body-parser');
const app = express()
// const cors = require("cors");


// Import DB
const connectDB = require('./server/config/db')
connectDB()


// Import Routes
const routes = require('./server/route/Routes')

// Import Cookie Parser
// var cookieParser = require('cookie-parser')

//Middelwares

// app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials:true,
// }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cookieParser())

app.use("/",routes) // accessing Routes.js

// Listening Port

const port = 8000
app.listen(port, () => console.log('Server is UP: ' + port))