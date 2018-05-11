import React from 'react';
import PropTypes from 'prop-types';


const CommentsList = (props) => {
    
    let { comments } = props;
    comments = comments.filter(comment => comment.deleted===false);

    return (
        <ul>
            {comments.map( (comment, index) => <li key={index} >{comment.body} </li>)}
        </ul>
    );

}


CommentsList.propTypes = {
    comments: PropTypes.array.isRequired
};

export default CommentsList;