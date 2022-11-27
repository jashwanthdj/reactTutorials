import React, { Component } from "react";

class welcome extends Component {
    render() {
        return (
            <h1>welcome {this.props.name} {this.props.children}</h1>
        )
    }
}

export default welcome