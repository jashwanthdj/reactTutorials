import React, { Component } from 'react'
import style from './stylesheet.module.css'
class RefsDemo extends Component {
    constructor(props) {
      super(props)
    this.inputRef = React.createRef()
    this.cbRef = null
    this.setRef = element => this.cbRef = element
      this.state = {
         
      }
    }
    componentDidMount () {
        this.inputRef.current.focus()
        if(this.cbRef) {
            this.cbRef.focus()
        }
    }
    eventHandler = () => {
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div className={style.purecomponent}>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.setRef}/>
        <button onClick={this.eventHandler}>click</button>
      </div>
    )
  }
}

export default RefsDemo
