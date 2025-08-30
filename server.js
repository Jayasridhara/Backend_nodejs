// import express module

const express=require('express');
// create express application
const app=express();
// start the server on port 3001

app.get('/',(req,res)=>{
      res.send('Hello Express')
});

app.listen(3001,'localhost',()=>{
  console.log(`Server listen is running at http://localhost:3001`)
})