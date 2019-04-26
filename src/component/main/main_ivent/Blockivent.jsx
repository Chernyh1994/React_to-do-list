import React, {Component} from 'react'
import './main_ivent.css'

class Blockivent extends Component {


  render() {
    return ( 
      <div className="buttons_select">
        <div className="buttons_block"><button className="button red" onClick={this.props.color_edit_red}>Red</button></div>
        <div className="buttons_block"><button className="button green" onClick={this.props.color_edit_green}>Green</button></div>
        <div className="buttons_block"><button className="button blue" onClick={this.props.color_edit_blue}>Blue</button></div>
      </div>
    )
  }
}

export default Blockivent