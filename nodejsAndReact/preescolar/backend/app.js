//initialize

var createError = require('http-errors');
const rateLimit = require('express-rate-limit');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const xss = require('xss-clean');
var cors = require("cors")
const multer = require("multer");
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const passport = require("passport")




const config = require('./config');
const mongoose = require('mongoose');
const Roles = require("./initialSetUps");
Roles.createRoles();

var app = express();
const limit = rateLimit({
  max: 100,// max requests
  windowMs: 60 * 60 * 1000, // 1 Hour of 'ban' / lockout 
  message: 'Too many requests, you are locked for 1hr' // message to send
});
//Config
app.set("PORT", process.env.port || 3000);


const storage = multer.diskStorage({
  destination: "public/images/",
  filename: (req, file, cb) => {
    cb(null,new Date().getTime() +"-"+file.originalname);
}

});
//MIDDLEWARE
app.use(logger('dev'));// morgan
app.use(express.json({ limit: '1mb' }));// limit to dos attack
app.use(express.urlencoded({extended: true ,limit: '1mb'}))
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api/reason", multer({storage}).single("image")); //file upload
app.use(xss());
app.use(helmet());
app.use(cors());//comunication between server
app.use(passport.initialize());
app.use( '*', limit);
app.options("*", cors());

//routes
const userRouter = require("./routes/users") 
app.use("/api/user", userRouter);
//routes
// app.get('*', (req, res) => {
  
//     res.sendFile(path.join(__dirname,'/public/index.html'));
//     return;
// })




//server



const url = config.mongoUrl;

const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,useCreateIndex: true});
connect.then((db)=>{console.log("Correctly Connect");},(err)=>{console.log(err, "connect error")});

app.listen(app.get("port"),()=>{
  console.log("Server on port "+ app.get("PORT"));

});

module.exports = app