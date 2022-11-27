import React, { Component } from 'react'
import style from './stylesheet.module.css'
class LifeCycle extends Component {
    constructor(props) {
      super(props)
    console.log('constructor')
      this.state = { 
        name: 'jashwanth'
      }
    }
    static getDerivedStateFromProps (state, props) {
        console.log('getDerivedStateFromProps')
        return null
    }
    componentDidMount () {
        console.log('componentDidMount')
    }
    shouldComponentUpdate () {
        console.log('shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
    }
    componentDidUpdate (prevProps, prevState, snapshot) {
        console.log('componentDidUpdate ')
    }
    static getDerivedStateFroError (err) {
        console.log(err)
    }
    changeState = () => {
        this.setState({
            name: 'reddy'
        })
    }
  render() {
    console.log('render')
    return (
      <div onClick={this.changeState} className={style.lifeCycle}>
        LifeCYCLE
      </div>
    )
  }
}

export default LifeCycle
