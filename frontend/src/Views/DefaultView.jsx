import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CategoryBar from '../Components/CategoryBar';
import SortMenu from '../Components/SortMenu';
import ContentsList from '../Components/ContentsList';

const DefaultView = (props) => {

    const {categories, posts} = props;

    return (
        <div>
            <CategoryBar categories={categories} />
            <SortMenu />
            <ContentsList contents={posts} type="post"/>
            <div><h4>Click <Link to="/create/post" >here</Link> to add a new post.</h4></div>
        </div>
    );

}

DefaultView.propTypes = {
    categories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired
};

export default DefaultView;