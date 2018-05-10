import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <pre> {JSON.stringify(this.props, null, 2)} </pre>
      </div>
    );
  }
}

const mapStateToProps = (state = {}) => {
  return {...state};
};

export default connect(mapStateToProps, null)(App);