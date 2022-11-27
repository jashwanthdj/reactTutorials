import React from 'react'
import './StyleSheet.css'
import style from './stylesheet.module.css'
function StyleSheet() {
    let classS = 'main-div'
    let inlinee = {
        color: 'blue'
    }
  return (
    <div>
    <div className={`${classS} second-class`}>
      stying Css
    </div>
    <div style={inlinee}>Inline</div>
    <div className={style.success}>module css</div>
    </div>
  )
}

export default StyleSheet
