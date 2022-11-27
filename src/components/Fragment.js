import React, { Component } from 'react'
import style from './stylesheet.module.css'
class Fragment extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>this is react fragments</h1>
        <h1 className={style.formHandling}>this is react  describtion</h1>
      </React.Fragment>
    )
  }
}

export default Fragment
