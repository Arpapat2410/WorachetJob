import React, { Component } from 'react'

export default class StateInClass extends Component {
  constructor (props){
    super(props);
    this.state = {
        id : `1`,
        name : "Arpapat Yipram",
        counter:0
    }
  }
  clikPlus = () =>{
    this.setState({
      counter : this.state.counter + 1
    })
  }
  clikMinus = () =>{
    this.setState({
      counter : this.state.counter - 1 
    })
  }

  render(){ 
    return(
      <div>
        <h2>State in class Component</h2>
        <h3>name : {this.state.name}</h3>
        <h3>Counter</h3>
        {this.state.counter}<br/>
        <button onClick={this.clikPlus}>+</button>
        <button onClick={this.clikMinus}>-</button>
      </div>
    )
  }
  
}
