import React, {Component} from 'react'
import './main_task.css'

class TodoForm extends Component {
constructor(props){
    super(props)
    this.state = {
        text:this.props.task,
        done:false,
        edit:false,
        taskinput:''
    }
}

    
doneItem=(event)=>{
    this.setState({
        done:event.target.checked
    })    
}

editItem=()=>{
    this.setState({
        edit:!this.state.edit,
        taskinput:this.state.text
    })
}

push=event=>{
    this.setState({taskinput: event.target.value})
    
  }
    
save=()=>{
    this.setState({
        text:this.state.taskinput,
        edit:!this.state.edit
    })
}


render() {
    const {deleteItem, index} = this.props;
    const {done, text, taskinput, edit} = this.state;
  return (
    <div className="TodoList_items">
     
        {edit ?  
            <div>
                <input type="text" value={taskinput} onChange={this.push} /> 
                <button className="button-edit" onClick={this.save}>save</button> 
            </div>
            :
            <div>
                <input className={'checkbox'} type="checkbox" onChange={this.doneItem}/>
                <span className={done ? 'done':''}>{text}</span> 
                <button className="button-delete" onClick={()=>deleteItem(index)}>x</button>
                <button className="button-edit" onClick={this.editItem}>edit</button>
            </div>}
         
    </div>
    )
    
   }
}

export default TodoForm