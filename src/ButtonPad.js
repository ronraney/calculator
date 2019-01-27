import React from 'react';




export default function ButtonPad(props) {
  return(
    <div>
    {props.typeArray.map(x=>
        <button
        onClick={props.buttonFunction}
        key={x}
        value={x}
        className="pad-button"
        >{x}
        </button>)}
  </div>
)
}
