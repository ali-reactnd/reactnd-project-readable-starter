import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const CategoryBar = (props) => {
    return (
        <Menu text >
            <Menu.Item header>Category:</Menu.Item>
            <Menu.Item name="all" onClick={()=> { props.history.push('./')}} />
            {props.categories.map( (category, index) => (
                <Menu.Item key={index} name={category.name} onClick={()=> { props.history.push(category.path)}} />
            ))}
        </Menu>
    );
}

CategoryBar.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
    })).isRequired
};

export default withRouter(CategoryBar);