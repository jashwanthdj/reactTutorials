import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLogin: true
    }
  }
  
  render() {
    // if(this.state.isLogin){
    //   return (
    //     <div>
    //         welcome jashwanth reddy
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //         welcome viaks reddy
    //     </div>
    //   )
    // }
    // let message
    // if(this.state.isLogin) {
    //   message =  <div>welcome jashwanth reddy </div>
    // } else {
    //   message = <div>welcome vikas reddy </div>
    // }
    // return message
    return this.state.isLogin ? <div>welcome jashwanth reddy </div> : <div>welcome viaks reddy </div>
  }
}

export default UserGreeting
