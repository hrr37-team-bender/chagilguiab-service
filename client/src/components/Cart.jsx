import React from 'react';

class Cart extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: null
    }

    this.setState = this.setState.bind(this);
  }

  render () {
    return (
      <div>
        This will be the cart.
      </div>
    )
  }
}

export default Cart;