import React, {Component} from 'react'
import TodoForm from './TodoForm'
import './main_task.css'

class TodoList extends Component {
  constructor(){
    super()
    this.state = {
      tasks:[],
      search:''
    }
    
}

pushText=(event)=>{
  this.setState({search: event.target.value})
  
}


keypress=(event)=>{
  
    if(event.key === 'Enter' ){
        this.setState({
          tasks: [...this.state.tasks,this.state.search],
          search:''
        })
    }
}

deleteItem=(index)=>{ 
  const arr = this.state.tasks;
  arr.splice(index,1);
  this.setState({
    tasks:arr
  })
}
  
render() {
  return ( 
      <div className="TodoList">
        <div className="tasks_list">
            <input className="InputList" placeholder="Введите текст" type="text" 
            value={this.state.search} 
            onChange={this.pushText} 
            onKeyPress={this.keypress}
            />
            <div> 
                { this.state.tasks.map((task, index) => {
                  console.log('task', task, index);
                    return <TodoForm task = {task}  key={index} index={index} deleteItem={this.deleteItem} />
                 })}
            </div>
            
        </div>
      </div>
    )
  }
}

export default TodoList