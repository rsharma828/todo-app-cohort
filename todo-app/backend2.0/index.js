const express = require("express");
const {createTodo,updateTools} = require("./types");
const { todo } = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

/*body here will consist of {
    title:
    description
}*/
app.post("/todo", async function(req,res){
    const createPayLoad = req.body;
    const parsePayload = createTodo.safeParse(createPayLoad);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you have sent wrong inputs"
        })
    }

    //put data in mongodb
    await todo.create({
        title:createPayLoad.title,
        description:createPayLoad.description,
        completed : false

    })

    res.json({
        msg:"Todo created"
    })
})

app.get("/todos",async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos: todos
    })
})

app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsePayload = updateTools.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you have sent a wrong inputs"
        })
    }
    //put it in mongodb
    await todo.update({
        _id:req.body.id
    },{completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})

app.listen(3000,function(){
    console.log("app listening at port 3000");
});
