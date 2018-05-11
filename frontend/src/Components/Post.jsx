import React from 'react';
import PropTypes from 'prop-types';
import ControlMenu from './ControlMenu';
import CommentsList from './CommentsList';

const Post = (props) => {
    let {post, comments} = props;

    return(
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p> {`Written by: ${post.author} on ${post.timestamp}`} </p>
            <p> {`Vote score: ${post.voteScore}`} </p>
            <ControlMenu />
            <h4>Comments:</h4>
            <CommentsList comments={comments}/>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
    comments : PropTypes.array.isRequired
};

export default Post;    