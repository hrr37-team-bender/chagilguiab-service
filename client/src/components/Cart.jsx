import React from 'react';
import Quantity from './Quantity.jsx';

class Cart extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      quantity:0,
      currentPrice: this.props.currentPrice,
      previousPrice: this.props.previousPrice
    }

    this.setState = this.setState.bind(this);
  }

  render () {
    console.log(this.state);
    return (
      <div>
        <h4>Price: ${this.props.currentPrice}</h4>
        <h6>Was: ${this.props.previousPrice}</h6>
        <Quantity />
      </div>
    )
  }
}

export default Cart;