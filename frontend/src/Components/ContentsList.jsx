import React from 'react';
import PropTypes from 'prop-types';
import Content from './Content';

const isContentVisible = (content) => {
    const {deleted, parentDeleted} = content;
    if(deleted)
        return false;
    if (parentDeleted!==undefined && parentDeleted)
        return false;
    return true;
}

const ContentsList = (props) => {
    
    let contents = props.contents.filter(content => {return isContentVisible(content)});

    return (
        <div>
            {contents.map( (content, index) => (
                <div key={index}>
                    <Content content={content} contentType={props.contentType}/>
                </div>
            ))} 
        </div>
    );
}


ContentsList.propTypes = {
    contents: PropTypes.array.isRequired,
    contentType: PropTypes.string.isRequired
};


export default ContentsList;
