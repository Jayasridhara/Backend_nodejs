// import express module

const express=require('express');
const router=require('./routes/router');
const todoRouter = require('./routes/todoRoutes');
const bodyParser = require('body-parser');

// create express application
const app=express();
// start the server on port 3001

app.use(bodyParser.json())
app.use('/todos',todoRouter)


module.exports=app;