import React from 'react';
import PropTypes from 'prop-types';
import CategoryBar from '../Components/CategoryBar';
import SortMenu from '../Components/SortMenu';
import PostsList from '../Components/PostsList';

const DefaultView = (props) => {

    const {categories, posts} = props;

    return (
        <div>
            <CategoryBar categories={categories} />
            <SortMenu />
            <PostsList posts={posts} />
            <div><h4>Click <a href="">here</a> to add a new post.</h4></div>
        </div>
    );

}

DefaultView.propTypes = {
    categories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired
};

export default DefaultView;