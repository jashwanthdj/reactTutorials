import React, { Component } from 'react'
import axios from 'axios'
class ApiCall extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         list: []
      }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {this.setState({list: response.data})})
        .catch(error => console.log(error))
    }
    
  render() {
    return (
      <div>
        {this.state.list.map(item => <h1 key={item.id}>{item.title}</h1>)}
      </div>
    )
  }
}

export default ApiCall
