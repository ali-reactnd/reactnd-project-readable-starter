import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Components/Post';

const PostDetailView = (props) => {

    let {posts, comments} = props;
    const postId = props.match.params.post_id;
    let post = posts.find(p=>p.id===postId);
    comments = comments.filter(c=>c.parentId===post.id);
    
    return(
        <Post post={post} comments={comments}/>
    )
}

PostDetailView.propTypes = {
    posts: PropTypes.array.isRequired,
    comments : PropTypes.array.isRequired
};

export default PostDetailView;