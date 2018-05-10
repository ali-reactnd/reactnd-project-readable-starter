import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryBar from './Components/CategoryBar';

class App extends Component {
  render() {
    return (
      <div>
        <CategoryBar categories = {this.props.categories} />
        <pre> {JSON.stringify(this.props, null, 2)} </pre>
      </div>
    );
  }
}

const mapStateToProps = (state = {}) => {
  return {...state};
};

export default connect(mapStateToProps, null)(App);