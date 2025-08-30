//create router object
const express=require("express");
const { index } = require("./controller/controller");

const router=express.Router();

router.get('/',index);

module.exports=router;