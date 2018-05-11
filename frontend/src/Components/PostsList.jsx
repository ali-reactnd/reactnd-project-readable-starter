import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostsList = (props) => {
    
    let { posts } = props;
    posts = posts.filter(post => post.deleted===false);

    return (
        <ul>
            {posts.map( (post, index) => <li key={index}> 
                <Link to={`/${post.category}/${post.id}`} > {post.title} </Link>
            </li>)}
        </ul>
    );

}


PostsList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PostsList;