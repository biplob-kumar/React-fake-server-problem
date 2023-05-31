import React from 'react'

const TodoCard = ({item}) => {
  
  return (
    <div className='todoCard'>
       
<h2>   {item.todo} </h2>
<button>Complete</button>
<button>Delete</button>

        </div>
  )
}

export default TodoCard