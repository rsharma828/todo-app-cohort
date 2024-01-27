import {todos, useState} from "react";
 

export function CreateTodo(props){
    
    //react-query
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");


    return <div>
    <input style={{
        padding:10,
        margin:10
    }} type="text" placeholder="Title" onChange={function(e){
        const value = e.target.value;
        setTitle(e.target.value);
    }}></input>
    <br />
    <input style={{
        padding:10,
        margin:10
    }} type="text" placeholder="description" onChange={function(e){
        const value = e.target.value;
        setDescription(e.target.value);
    }}></input>
    <br />
        <button style={{
        padding:10,
        margin:10
    }}  onClick={()=>{
        //axios
        fetch("http://localhost:3000/todo",{
            method:"post",
            body: JSON.stringify({
                title:title,
                description:description
            }),
            headers:{
                "Content-type":"application/json"
            }
        }).then(async function(res){
            const json = await res.json();
            alert("Todo Added");
        })
    }} >Add a todo</button>
        </div>
}