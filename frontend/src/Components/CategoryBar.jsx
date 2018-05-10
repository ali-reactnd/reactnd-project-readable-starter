import React from 'react';
import PropTypes from 'prop-types';

const CategoryBar = (props) => {

    return (
        <h3>Categories: 
            {props.categories.map( (category, index) => (
                <a key={index} href={category.path}>|{category.name}|</a> 
            ))}
        </h3>
    );

}

CategoryBar.propTypes = {
    categories: PropTypes.array.isRequired
};

export default CategoryBar;