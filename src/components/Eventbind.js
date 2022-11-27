import React, { Component } from "react";

class Eventbind extends Component {

    constructor () {
        super()
        this.state = {
            message: 'welcome boys'
        }
        this.messageChanged = this.messageChanged.bind(this)
    }
    messageChanged () {
        console.log(this.state.message)
        this.setState({
            message: 'yo man text is changes'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.messageChanged}>event binding</button>
            </div>
        ) 
    }
}

export default Eventbind