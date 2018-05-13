import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../Components/NotFound';
import ContentForm from '../Components/ContentForm'

const EditView = (props) => {
    const {posts, comments} = props;

    return (
        <Switch>
            <Route exact path='/edit/:post_id' render={(props) => {
                let postId = props.match.params.post_id;
                let post = posts.filter(p=> p.deleted===false).find( p=> p.id===postId );
                return !!post? (
                    <ContentForm {...props} content={post} actionType="edit" contentType="post"/>
                ) : <NotFound />;
            }}  />

            <Route exact path='/edit/:post_id/:comment_id' render={(props) => {
                let commentId = props.match.params.comment_id
                let comment = comments.filter(c=> c.deleted===false && c.parentDeleted===false).find( c=> c.id===commentId);
                return !!comment? (
                    <ContentForm {...props} content={comment} actionType="edit" contentType="comment"/>
                ) :  <NotFound />;
            }}  />
        </Switch>
    );
}

const mapStateToProps = (state = {}) => {
    return {...state};
};
  
export default withRouter(connect(mapStateToProps, null)(EditView));