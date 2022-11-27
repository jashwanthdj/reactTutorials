import React, { Component } from 'react'
import PureComt from './PureComt'
import NormalComp from './NormalComp'
import style from './stylesheet.module.css'
import Memo from './Memo'
class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'reddy'
      }
    }
    componentDidMount () {
        setInterval(() => {
            this.setState({
                name: 'jashwanth'
            })
        }, 2000)
    }
  render() {
    console.log('ParentComponent')
    return (
      <div className={style.purecomponent}>
        <p>Parent COmponent</p>
        <PureComt></PureComt>
        <NormalComp></NormalComp>
        <Memo name={this.state.name}></Memo>
      </div>
    )
  }
}

export default ParentComp
