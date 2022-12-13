import React, { Component } from 'react'

class RenderedProps extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div>
        <p> rendered props {this.props.render(true)}</p>
      </div>
    )
  }
}

export default RenderedProps
