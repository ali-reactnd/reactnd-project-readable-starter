import React from 'react';
import PropTypes from 'prop-types';


const PostsList = (props) => {
    
    const { posts } = props;

    return (
        <ul>
            {posts.map( (post, index) => <li key={index}> <a href={`{post.category}/{post.postId}`}>{post.title}</a> </li>)}
        </ul>
    );

}


PostsList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PostsList;