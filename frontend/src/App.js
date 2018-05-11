import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import {fetchCategories, fetchPosts, fetchComments} from "./Actions/AsyncActionCreators/fetchActions";
import DefaultView from './Views/DefaultView';
import CategoryView from './Views/CategoryView';
import PostDetailView from './Views/PostDetailView';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCategories());
    dispatch(fetchPosts());
    dispatch(fetchComments());
  }

  render() {

      const { categories, posts, comments } = this.props;

      return (
          <div >
            <h2>Welcome to Readable</h2>

            <Switch>
                <Route exact path='/' render={ props=> 
                  <DefaultView {...props} categories={categories} posts={posts}/> }  
                />
                <Route exact path='/:category' render={ props =>
                  <CategoryView {...props} posts={posts} />}
                />
                <Route exact path='/:category/:post_id' render={(props)=>
                  <PostDetailView {...props} posts={posts} comments={comments}/>}
                />
            </Switch>

          </div>
      );
  }
}

const mapStateToProps = (state = {}) => {
  return {...state};
};

export default withRouter(connect(mapStateToProps, null)(App));