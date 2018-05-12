import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Content from '../Components/Content';
import ContentsList from '../Components/ContentsList';
import NotFound from '../Components/NotFound';
import HomeButton from '../Components/HomeButton';


const PostDetailView = (props) => {

    const postId = props.match.params.post_id;
    let post = props.posts.find(p=>p.id===postId);
    let comments = props.comments.filter(c=>c.parentId===post.id);
    
    // TODO: Show 404 Error when the post is deleted! 
    return(
        post.deleted? <NotFound /> :
        <div>
            <HomeButton />
            <h3>{post.title}</h3>
            <Content content={post} type="post" />
            <ContentsList contents={comments} type="comment"/>
            <div><h4>Click <Link to={`/create/${post.id}/comment`} >here</Link> to add a new comment.</h4></div>
        </div>
    )
}

PostDetailView.propTypes = {
    posts: PropTypes.array.isRequired,
    comments : PropTypes.array.isRequired
};

export default PostDetailView;