import React from 'react';
import PropTypes from 'prop-types';
import SortMenu from '../Components/SortMenu';
import ContentsList from '../Components/ContentsList';

const CategoryView = (props) => {

    let { posts } = props;
    const category = props.match.params.category;
    posts = posts.filter(post => post.category===category);

    return (
        <div>
            <SortMenu />
            <ContentsList contents={posts} />
            <div><h4>Click <a href="">here</a> to add a new post.</h4></div>
        </div>
    );

}

CategoryView.propTypes = {
    posts: PropTypes.array.isRequired
};

export default CategoryView;