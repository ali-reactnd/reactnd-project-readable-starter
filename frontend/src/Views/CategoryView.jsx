import React from 'react';
import PropTypes from 'prop-types';
import SortMenu from '../Components/SortMenu';
import PostsList from '../Components/PostsList';

const CategoryView = (props) => {

    let { posts } = props;
    const category = props.match.params.category;
    posts = posts.filter(post => post.category===category);

    return (
        <div>
            <SortMenu />
            <PostsList posts={posts} />
            <div><h4>Click <a href="">here</a> to add a new post.</h4></div>
        </div>
    );

}

CategoryView.propTypes = {
    posts: PropTypes.array.isRequired
};

export default CategoryView;