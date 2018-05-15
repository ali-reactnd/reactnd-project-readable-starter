import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const ContentHeader = (props) => {
    const {title, category, id} = props;

    if (!title)
        return null;

    return (
        <Header as='h3'>
            <Link to={`/${category}/${id}`} >
                {title}
            </Link>
        </Header>
    )
}

ContentHeader.protoType = {
    props: PropTypes.shape({
        title: PropTypes.string,
        category: PropTypes.string,
        id: PropTypes.string
    }).isRequired
}

export default ContentHeader;