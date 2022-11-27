import React, { Component } from 'react'
import RFInput from './RFInput'
import './StyleSheet.css'
class RFParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.PrentRef = React.createRef()
    }
    onclick = () => {
        this.PrentRef.current.focus()
    }
  render() {
    return (
      <div class='third-class'>
        <RFInput ref={this.PrentRef}/>
        <button onClick={this.onclick}>Click</button>
      </div>
    )
  }
}

export default RFParent
