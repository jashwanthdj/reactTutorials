import React, { Component } from 'react'
import { Consumer } from './userContext'
import context from './userContext'
class ComponentC extends Component {
    static val =this.context
  render() {
    return (
      <div>
        ComponentC {this.val}
        <Consumer>
            {
                (value) => {
                    return <h1>{value}</h1>
                }
            }
        </Consumer>
      </div>
    )
  }
}

export default ComponentC
