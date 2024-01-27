/*
Todo{
    title:string,
    description:string,
    completed : boolean
}
*/
const mongoose = require("mongoose");
const { string } = require("zod");

// connection link - mongodb+srv://rksharmaRiseInk:828401Rupesh@cluster0.zph68hj.mongodb.net/todos
mongoose.connect("mongodb+srv://rksharmaRiseInk:828401Rupesh@cluster0.zph68hj.mongodb.net/todos");
const todoSchema  = mongoose.Schema({
    title:String,
    description:String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports ={
    todo
}