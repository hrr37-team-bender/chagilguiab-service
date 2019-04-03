import React from 'react';
import Quantity from './Quantity.jsx';

const Cart = (props) => (
<div>
  <h4>Price: ${props.currentPrice}</h4>
  <h6>Was: ${props.previousPrice}</h6>
  <Quantity />
</div>
);

export default Cart;