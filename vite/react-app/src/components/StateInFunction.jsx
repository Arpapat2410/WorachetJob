import React ,{ useState } from 'react'

const StateInFunction = ( props) => {
    const [state , setState ] = useState({
        id : props.id || "1",
        name : props.name || "Arpapat",
        counter : 0
    });
    const clikPlus = () =>{
        setState({
            ...state,
          counter : state.counter + 1
        })
      };
    const clikMinus = () =>{
        setState({
            ...state,
          counter : state.counter - 1 
        })
      }

 

    return(
        <div>
            <h2>State in class Function</h2>
            <h3>name : {state.name}</h3>
            <h4></h4>
            <h3>Counter</h3>
            {state.counter}<br/>
            <button onClick={clikPlus}>+</button>
            <button onClick={clikMinus}>-</button>
        </div>
  )

}
export default StateInFunction