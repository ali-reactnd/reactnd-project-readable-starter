import React from 'react';
import PropTypes from 'prop-types';
import { Container, Segment } from 'semantic-ui-react';
import ContentHeader from './ContentHeader';
import ContentMetaData from './ContentMetaData';
import ControlMenu from './ControlMenu';

const Content = (props) => {

    const {id, title, body, author, timestamp, voteScore, commentCount, category} = props.content;

    return(
        <Container text>
            <Segment padded="very" raised>
    
                <ContentHeader title={title} category={category} id={id} />
                <p>{body}</p>
                <ContentMetaData author={author} timestamp={timestamp} voteScore={voteScore} commentCount={commentCount} />
                <ControlMenu id={props.content.id} parentId={props.content.parentId} contentType={props.contentType}/>

            </Segment>
        </Container>
    )
}

Content.propTypes = {
    content: PropTypes.shape({
        id: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        title: PropTypes.string,
        body: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string,
        voteScore: PropTypes.number.isRequired,
        commentCount: PropTypes.number,
        deleted: PropTypes.bool.isRequired
    }).isRequired,
    contentType: PropTypes.string.isRequired
};

export default Content;
