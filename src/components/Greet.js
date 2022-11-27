 import React from "react"

 function Greet(props) {
    return (
        <div>my name is {props.id} {props.children}</div>
    )
 }

 export default Greet