import React from 'react';




export default function ButtonPad(props) {
  const buttonClasses = `${props.type} pad-button`;
  const containerClass = `${props.type} container`
  return(
    <div className={containerClass}>
    {props.typeArray.map(x=>
        <button
        onClick={props.buttonFunction}
        key={x}
        value={x}
        className={buttonClasses}
        >{x}
        </button>)}
  </div>
)
}
