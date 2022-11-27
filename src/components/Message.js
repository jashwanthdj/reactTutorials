import React, { Component } from "react";

class Message extends Component {

    constructor () {
        super()
        this.state = {
            message: 'welcome boys'
        } 
    }
    messageChanged () {
        this.setState({
            message: 'yo man text is changes'
        })
    }
    render() {
        return (
            <h1 onClick={() => this.messageChanged() }>{this.state.message}</h1>
        ) 
    }
}

export default Message