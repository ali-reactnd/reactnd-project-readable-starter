import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryBar = (props) => {

    return (
        <h3>Categories: 
            {props.categories.map( (category, index) => (
                <Link key={index} to={category.path}>|{category.name}|</Link> 
            ))}
        </h3>
    );

}

CategoryBar.propTypes = {
    categories: PropTypes.array.isRequired
};

export default CategoryBar;