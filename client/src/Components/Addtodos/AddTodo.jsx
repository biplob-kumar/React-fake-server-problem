import React, { useState } from 'react'
import {  } from "./Addtodos.css";

const AddTodo = () => {
    const [data ,setdata]=useState();
  

    const handlesubmit=(e)=>{
        e.preventDefault()
    let obj=   {
        "id": 101,
        "todo": "data",
        "completed": false
      };
console.log(obj);
fetch("http://localhost:3000/todos", {
  method: "POST",
  body: JSON.stringify(obj),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
    };
console.log();
  return (
    <div>
        <form onSubmit={handlesubmit} >
    <input onChange={(e)=>setdata(e.target.value)} type="text" />
     <button type='sunmit'>Add</button>
        </form>
    </div>
  )
}

export default AddTodo;