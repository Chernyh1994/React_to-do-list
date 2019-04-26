import React, {Component} from 'react'
import Blockivent from './Blockivent'
import './main_ivent.css'

class Main_ivent extends Component {
  constructor(){
    super()
    this.state = {
        color:''
    }
}

color_edit_red=()=>{
  this.setState({
    color:'red'
})
}

color_edit_green=()=>{
  this.setState({
    color:'green'
})
}

color_edit_blue=()=>{
  this.setState({
    color:'blue'
})
}

  render() {
    const style = {backgroundColor: this.state.color}
     return ( 
      <div className="main_ivent">
        <div className="heder_ivent">
          <h1 className="pragraf_ivent">Ivent</h1>
        </div>
        <div className="select_ivent">
          <div className="block_select" style={ style }></div>
            <Blockivent color_edit_red={this.color_edit_red} color_edit_green={this.color_edit_green} color_edit_blue={this.color_edit_blue}/>
          
        </div>
      </div>
    )
  }
}

export default Main_ivent