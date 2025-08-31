const express=require('express');
const { getTodos, getTodoByID, createTodo } = require('../controller/todoController');
const todoRouter=express.Router();

todoRouter.get('/',getTodos)
todoRouter.get('/:id', getTodoByID);
todoRouter.post('/',createTodo);
module.exports=todoRouter;