import React, { Component } from 'react'

class ChildRef extends Component {
    constructor(props) {
      super(props)
       this.ChildRef = React.createRef()
      this.state = {
         
      }
    }
    childCall = () => {
        this.ChildRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.ChildRef}/>
      </div>
    )
  }
}

export default ChildRef
