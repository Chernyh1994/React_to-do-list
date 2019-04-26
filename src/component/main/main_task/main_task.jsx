import React, {Component} from 'react'
import TodoList from './TodoList'
import './main_task.css'

class Main_task extends Component {
  
  
render() {
  
  return ( 
      <div className="main_task">
        <h1 className="Task">Task Book</h1>
        <TodoList/>
      </div>
    )
  }
}

export default Main_task