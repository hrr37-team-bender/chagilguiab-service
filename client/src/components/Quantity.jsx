import React from 'react';

const Quantity = (props) => (
  <div className="quantity">
    <button onClick={props.minus}>-</button>
    <span className="quant-div">{` ${props.quantity} `}</span>
    <button onClick={props.plus}>+</button>
  </div>
);

export default Quantity;