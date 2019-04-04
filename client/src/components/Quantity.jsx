import React from 'react';

const Quantity = (props) => (
  <div>
    <button onClick={props.minus}>-</button>
    0
    <button onClick={props.plus}>+</button>
    This will be the Quantity console.
  </div>
);

export default Quantity;