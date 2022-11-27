import React, { Component } from 'react'
import style from './stylesheet.module.css'
class FormHandling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName: '',
         car: 'volvo'
      }
    }
    inputFunction = (event) => {
        this.setState({
            userName: event.target.value
         })
    }
    selectCar = (event) => {
        this.setState({
            car: event.target.value
         })
    }
    onSumbit = (event) => {
        console.log(this)
        // alert(`${this.state.car}${this.state.userName}`)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onSumbit} className={style.formHandling}>
        <div>FORM HANDLING</div>
        <input type="text" value={this.state.userName} onChange={this.inputFunction}/>
        <div>{this.state.userName}</div>
        <label for="cars">Choose a car:</label>
        <select name="cars" id="cars" value={this.state.car} onChange={this.selectCar}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option> 
        </select>
        <button type="submit">submit</button>       
        </form>
      </div>
    )
  }
}

export default FormHandling
