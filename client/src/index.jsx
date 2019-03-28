import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: true
    }
  }

  render () {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));