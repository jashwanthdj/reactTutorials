import React from 'react'

function ChildComponent(props) {
  return ( 
    <div onClick={() => props.greetHandler('hello my lord')}>
      yo this is child component
    </div>
  )
}

export default ChildComponent
