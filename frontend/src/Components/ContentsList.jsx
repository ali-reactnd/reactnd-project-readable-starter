import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Content from './Content';

const ContentsList = (props) => {
    
    let contents = props.contents.filter(e => e.deleted===false);

    return (
        <ul>
            {contents.map( (content, index) => {
                let { id, category, title } = content;
                return (
                    <li key={index}>
                        {!!title ? <h3><Link to={`/${category}/${id}`}>{title}</Link></h3> : null}
                        <Content content={content}/>
                    </li>
                )

            })} 
        </ul>
    );

}


ContentsList.propTypes = {
    contents: PropTypes.array.isRequired
};

export default ContentsList;