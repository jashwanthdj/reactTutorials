import React from 'react'

function Functionclick() {
    const clicked = () => { console.log('clicked') }
  return (
    <div>
      <button onClick={clicked}>button function</button>
    </div>
  )
}

export default Functionclick
 