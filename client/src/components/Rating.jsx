import React from 'react';

class Rating extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="rating">
        STARS {this.props.rating}
      </div>
    )
  }

}

export default Rating;