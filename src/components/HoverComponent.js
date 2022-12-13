import React, { Component } from 'react'

class HoverCounter2 extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: 0
    //   }
    // }
    // increment = () => {
    //     this.setState((prevState) => {
    //         return { count: prevState.count + 1 }
    //     })
    // }
    
  render() {
    const { increment , count } = this.props
    return (
      <div>
        <p onMouseOver={increment}>{count} score</p>
      </div>
    )
  }
}

export default HoverCounter2