import React, { Component } from 'react'
import ChildRef from './ChildRef'
import './StyleSheet.css'

class ParentRef extends Component {
    constructor(props) {
      super(props)
      this.ParentRef = React.createRef()
      this.state = {
         
      }
    }
    eventCall = () => {
        this.ParentRef.current.childCall()
    }
  render() {
    return (
      <div className='third-class'>
        <ChildRef ref={this.ParentRef}></ChildRef>
        <button onClick={this.eventCall}>ClickParent</button>
      </div>
    )
  }
}

export default ParentRef
