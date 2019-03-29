import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stereos: []
    }

    this.setState = this.setState.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  componentDidMount () {
    $.get('/api/stereos', (results) => {
      this.setState({stereos: results}, () => {
        console.log(this.state);
      });
    });
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
        <img src="http://images.nymag.com/news/intelligencer/intelposts120326_starstruck_560.jpg" width = "280" height = "115" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));