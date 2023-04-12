import React, { Component } from 'react';

class Container extends Component {
  render() {
    return (
      <div className="container">
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Container;