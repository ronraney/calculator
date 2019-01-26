import React from 'react';

let buttonsArray = [1,2,3,4,5,6,7,8,9,0]


export default function NumberPad(props) {
  return(
    <div>
    {buttonsArray.map(x=>
        <button
        onClick={props.numberClick}
        key={x}
        value={x}
        className="numberButton"
        >{x}
        </button>)}
  </div>
)
}
