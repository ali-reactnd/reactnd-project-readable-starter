import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import ControlMenu from './ControlMenu';

const Content = (props) => {
    let {body, author, timestamp, voteScore, commentCount} = props.content;

    return(
        <div>
            <p>{body}</p>
            <p> 
            {`Written by: ${author}`} <br/> 
            Posted on: {<Moment format=" YYYY/MM/DD h:mm a">{timestamp}</Moment>} <br/>
            {`Vote score: ${voteScore}`}<br/> 
            {commentCount!==undefined? `Number of comments: ${commentCount}`: null}
            </p>
            <ControlMenu />
        </div>
    )
}

Content.propTypes = {
    content: PropTypes.object.isRequired
};


export default Content;