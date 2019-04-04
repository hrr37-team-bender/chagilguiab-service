import React from 'react';

const Quantity = (props) => (
  <div>
    <div>Quantity</div>
    <button onClick={props.minus}>-</button>
    {` ${props.quantity} `}
    <button onClick={props.plus}>+</button>
  </div>
);

export default Quantity;