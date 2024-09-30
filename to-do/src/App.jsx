import { useState, useEffect} from 'react'

import './App.css'
import { CardList } from './components/CardList'



function App() {

  return (
    <>
      <h1>To-Do List</h1>
      <div className='container'>
        <h3>What's the plan for today?</h3>

        <div className='add-task'>
          <input type="text" placeholder='Task Info'/>
          <button>Add Task</button>
        </div>

        <div className='list'>
          <ul>
            <CardList task={"Prueba"}></CardList>
            
          </ul>
        </div>
      </div>

    </>

  )
}

export default App
