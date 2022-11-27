import React, { Component } from 'react'

class ErrorHandling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isError: false
      }
    }
   static getDerivedStateFromError(error) {
        return {
            isError: true
        }
    }
    componentDidCatch(error, info) {
        console.log(error)
    }
    
  render() {
    if(this.state.isError) {
        return ("sometiing was no good")
    } else {
        return this.props.children
    }
  }
}

export default ErrorHandling
