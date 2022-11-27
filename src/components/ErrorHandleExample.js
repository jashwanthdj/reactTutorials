import React from 'react'
import './StyleSheet.css'
function ErrorHandleExample({name}) {
    if(name === 'reddy') {
        throw new Error('something gone wrong')
    }
  return ( 
    <div className='third-class'> 
      {name}
    </div>
  )
}

export default ErrorHandleExample
