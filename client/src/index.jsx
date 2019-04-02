import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stereo_data: [],
      deepfryd_id: "76058-105",
    }

    this.setState = this.setState.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  componentDidMount () {
    console.log(typeof this.state.deepfryd_id);
    $.get(`/api/stereos/${this.state.deepfryd_id}`, (results) => {
      this.setState({stereo_data: results}, () => {
        console.log(this.state);
      });
    });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  updateQuantity (quantity) {
    $.post('/api/stereos', {quantity: quantity}, (results) => {
      console.log(results);
    });
  }

  render () {
    return (
      <div>
        <h3>Bose SoundTouch 20 Series III Wireless Music System - Black</h3>
        <p>Frys#: 8574639 Model: 738063-1100</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));