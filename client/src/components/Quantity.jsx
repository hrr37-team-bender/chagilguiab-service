import React from 'react';

const Quantity = (props) => (
  <div className="quantity">
    <button className="quant-btn" onClick={props.minus}>-</button>
    <div className="quant-div">{` ${props.quantity} `}</div>
    <button className="quant-btn" onClick={props.plus}>+</button>
  </div>
);

export default Quantity;