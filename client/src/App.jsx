import  React from 'react'
import './App.css'
import Todos from './Components/TOdos/Todos'
import AddTodo from './Components/Addtodos/AddTodo'

function App() {


  return (
    <div className="App">
   <AddTodo/>
   <Todos/>

    </div>
  )
}

export default App
