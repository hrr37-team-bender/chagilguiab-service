import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <Route path='/products/:id' component={Home} />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));