import React, { useEffect, useState } from 'react'
import {  } from "./Todos.css";
import TodoCard from './TodoCard';


const Todos = () => {

    const [todoData,setTodoData]=useState([])

 useEffect(() => {
  
    fetch('http://localhost:3000/todos')
    .then(response => response.json())
    .then(res => setTodoData(res))
 }, [])


//  decide how to data in pagination 
 const itemperpage=5;
 const [curretpage,setcurrentpage]=useState(1);
 let start= (curretpage - 1)*1*itemperpage
 let end = start+itemperpage;
 const displaytodo=todoData.slice(start,end);


 const prevpage=()=>{
 if(start > 0){
  setcurrentpage(prev=>prev-1)
 }
 }
 const onepage=()=>{
  setcurrentpage(prev=>prev+1)
 }



 const nextpage=()=>{

   if(end<todoData.length){
  setcurrentpage(prev=>prev+1)
    }

 }




   const  handlepagination=(data)=>{

    end=end+5
    console.log(end);
    let newdata=todoData.slice(start,end)
    return newdata

}
 

  return (
    <div className='all_todo_box'>
      <h1>{todoData.length}</h1>
        {
         displaytodo.map( (item)=>   <TodoCard key={item.id} item={item} /> )
        }
        <div className='pagination'>
            <button onClick={()=>prevpage()} >PREVIEW</button> 
            <button onClick={()=>onepage()} >1</button>
            <button>2 ...</button>
            <button onClick={()=>nextpage()} >NEXT</button>
        </div>
    </div>
  )
}

export default Todos