import React, { Component } from 'react'

class ClassClick extends Component {
    clicked () {
        console.log('clicked class')
    }
  render() {
    return (
        <div>
        <button onClick={this.clicked}>button class</button>
      </div>
    )
  }
}

export default ClassClick
