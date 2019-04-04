import React from 'react';

class  Quantity extends React.Component{
  constructor(props) {
    super(props)

    this.state ={
      val: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({clicked: 1});
  }

  render () {

    return (
      <div onClick={this.handleClick}>
        This will be the Quantity console.
      </div>
    );
  }
}

export default Quantity;