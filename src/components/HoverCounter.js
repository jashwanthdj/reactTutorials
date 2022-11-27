import React, { Component } from 'react'
import updatedComponent from './WithCounter'
class HoverCounter extends Component {
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
    // const { count } = this.state
    const { name, count, increment } = this.props
    return (
      <div>
        <button onMouseOver={increment}>{name} hovered {count} times</button>
      </div> 
    )
  }
}

export default updatedComponent(HoverCounter)
