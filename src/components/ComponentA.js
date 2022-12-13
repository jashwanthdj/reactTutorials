import React, { Component } from 'react'
import ComponentB from './ComponentB.js'
class ComponentA extends Component {
  render() {
    return (
      <div>
        <ComponentB></ComponentB>
      </div>
    )
  }
}

export default ComponentA
