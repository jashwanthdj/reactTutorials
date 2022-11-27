import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'yo parent'
      }
      this.callMethod = this.callMethod.bind(this)
    }
    callMethod (yo) {
        console.log(this.state.parentName, yo)
    }
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.callMethod}/>
      </div>
    )
  }
}

export default ParentComponent
