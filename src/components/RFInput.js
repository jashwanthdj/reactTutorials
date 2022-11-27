import React from 'react'

const RFInput = React.forwardRef((props, ref) => {
    return (
      <div>
        <input ref={ref}/>
      </div>
    )
  } )

export default RFInput
