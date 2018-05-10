import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import DefaultView from './Views/DefaultView';

class App extends Component {


  render() {

      const { categories, posts, comments } = this.props;

      return (
          <div >
            <h2>Welcome to Readable</h2>

            <Switch>
                <Route exact path='/' render={(props)=> ( <DefaultView {...props} categories={categories} posts={posts}/> )}  />
            </Switch>

          </div>
      );
  }
}

const mapStateToProps = (state = {}) => {
  return {...state};
};

export default withRouter(connect(mapStateToProps, null)(App));