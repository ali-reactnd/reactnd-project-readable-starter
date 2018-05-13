import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import {fetchCategories, fetchPosts} from "./Actions/AsyncActionCreators/fetchActions";
import DefaultView from './Views/DefaultView';
import CategoryView from './Views/CategoryView';
import PostDetailView from './Views/PostDetailView';
import CreateView from './Views/CreateView';
import EditView from './Views/EditView';
import PageHeader from "./Components/PageHeader";
import { Header } from 'semantic-ui-react';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCategories());
    dispatch(fetchPosts());
  }

  render() {

      const { categories, posts, comments } = this.props;

      return (
          <div >
              <PageHeader title="Readable" />

              <Switch>
                  <Route exact path='/' render={ props=> 
                    <DefaultView {...props} categories={categories} posts={posts}/> }  
                  />
                  <Route path='/create' render={(props)=> <CreateView  />} />
                  <Route path='/edit' render={(props)=> <EditView  />} />
                  <Route exact path='/:category' render={ props =>
                    <CategoryView {...props} categories={categories} posts={posts} />}
                  />
                  <Route exact path='/:category/:post_id' render={(props)=>
                    <PostDetailView {...props} posts={posts} comments={comments}/>}
                  />

              </Switch>

              <Header as='h6' textAlign='center'>Copyright: Ali M @ 2018</Header>
          </div>
      );
  }
}

const mapStateToProps = (state = {}) => {
  return {...state};
};

export default withRouter(connect(mapStateToProps, null)(App));