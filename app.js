// import express module

const express=require('express');
const router=require('./routes/router')
// create express application
const app=express();
// start the server on port 3001

app.use('/',router)
module.exports=app;