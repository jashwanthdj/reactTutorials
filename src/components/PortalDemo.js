import React from 'react'
import ReactDOM from 'react-dom'
import './StyleSheet.css'
function PortalDemo() {
  return ReactDOM.createPortal(
    <div className='third-class'>
      Portal Demo
    </div>,
    document.getElementById('portal-div')
  )
}

export default PortalDemo
