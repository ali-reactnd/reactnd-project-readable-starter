import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import CategoryBar from './Components/CategoryBar';

class App extends Component {


  render() {

      const { categories, posts, comments } = this.props;

      return (
          <div >
            <h2>Welcome to Readable</h2>

            <Switch>
                <Route exact path='/' render={(props)=> ( <CategoryBar {...props} categories={categories}/> )}  />
            </Switch>

          </div>
      );
  }
}

const mapStateToProps = (state = {}) => {
  return {...state};
};

export default withRouter(connect(mapStateToProps, null)(App));