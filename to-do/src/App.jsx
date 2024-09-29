import { useState, useEffect} from 'react'

import './App.css'




function App() {



  return (
    <>
      <h1>To-Do List</h1>
      <div className='list-container'>
        <h3>What's the plan for today?</h3>

        <div className='add-task'>
          <input type="text" placeholder='Task Info'/>
          <button>Add Task</button>
        </div>

        <ul>
          <li className='list-task'>
            <p>Walk the dog</p>
            <div>
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </li>
        </ul>
      </div>

    </>

  )
}

export default App
