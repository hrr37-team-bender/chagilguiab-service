import React from 'react';

const Checkout = (props) => (
  <div>
    <div className="checkout-top-panel">
      <p>
      <span className="items-added">{props.quantity} items added to your cart</span> <br />
      <span className="item-subtotal">Cart Subtotal: ${props.price}</span>
      </p>
      <button className="cart-btn">Remove From Cart</button>
      <button className="cart-btn">Continue Shopping</button>
      <button className="checkout-btn">Checkout</button>
      <span className="exit-x">X</span>
    </div>
  </div>
)

export default Checkout;