import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { List, Label } from 'semantic-ui-react';

const AuthorData = ({author}) => (
    <List.Item>
        <Label horizontal>Written by:</Label>
        {author}
    </List.Item>
)

const TimeStampData = ({timestamp}) => (
    <List.Item>
        <Label horizontal>Posted on:</Label>
        <Moment format=" YYYY/MM/DD h:mm a">{timestamp}</Moment>
    </List.Item>
)

const VoteScoreData =({voteScore}) => (
    <List.Item>
        <Label horizontal>Vote score</Label>
        {voteScore}
    </List.Item>
)

const CommentCountItem = ({commentCount}) => {
    if (commentCount===undefined)
        return null;
    return (
        <List.Item>
            <Label horizontal>Number of comments:</Label>
            {commentCount}
        </List.Item>
    )
}

const ContentMetaData = (props) => {
    const {author, timestamp, voteScore, commentCount} = props;
    return (
        <List divided selection>
            <AuthorData author={author} />
            <TimeStampData timestamp={timestamp} />
            <VoteScoreData voteScore={voteScore} />
            <CommentCountItem commentCount={commentCount} />
        </List>
    )
}

ContentMetaData.protoType = {
    props: PropTypes.shape({
        author: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        voteScore: PropTypes.number.isRequired,
        commentCount: PropTypes.number
    }).isRequired
}

export default ContentMetaData;