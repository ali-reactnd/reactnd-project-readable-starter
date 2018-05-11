import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Components/Content';
import ContentsList from '../Components/ContentsList';

const PostDetailView = (props) => {

    let {posts, comments} = props;
    const postId = props.match.params.post_id;
    let post = posts.find(p=>p.id===postId);
    comments = comments.filter(c=>c.parentId===post.id);
    
    return(
        <div>
            <h3>{post.title}</h3>
            <Content content={post} />
            <ContentsList contents={comments} />
        </div>
    )
}

PostDetailView.propTypes = {
    posts: PropTypes.array.isRequired,
    comments : PropTypes.array.isRequired
};

export default PostDetailView;