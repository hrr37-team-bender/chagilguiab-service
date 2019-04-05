import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Cart from './components/Cart.jsx';
import Quantity from './components/Quantity.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quantity: 0,
      stereo_data: {},
      currentPrice: null,
      previousPrice: null,
      deepfryd_id: "37205-711",
    }

    this.setState = this.setState.bind(this);
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }

  componentDidMount () {
    $.get(`/api/stereos/${this.state.deepfryd_id}`, (results) => {
      this.setState({stereo_data: results, currentPrice: results.current_price, previousPrice: results.previous_price});
    });
  }

  plus () {
    let newValue = this.state.quantity;
    newValue++;
    this.setState({quantity: newValue});
  }

  minus () {
    if (this.state.quantity > 0) {
      let newValue = this.state.quantity;
      newValue--;
      this.setState({quantity: newValue});
    }
  }

  render () {
    const deepfryd_id = this.state.deepfryd_id;
    let productName;

    if (deepfryd_id === '37205-711') {
      productName = <h3>Bose  &reg; SoundTouch&reg; Series III Wireless Music System - Black </h3>;
    } else {
      productName = <h3>{this.state.stereo_data.product_name}</h3>;
    }

    return (
      <div>
        {productName}
        <div>STARS WILL GO HERE</div>
        <p>Frys#: {this.state.deepfryd_id} Model: {this.state.stereo_data.model_number}</p>
        <h4>Price: ${this.state.currentPrice}</h4>
        <h6>Was: ${this.state.previousPrice}</h6>
        <Cart
          currentPrice={this.state.currentPrice}
          previousPrice={this.state.previousPrice}
        />
        <Quantity
        plus={this.plus}
        minus={this.minus}
        quantity={this.state.quantity}
         />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));