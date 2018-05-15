import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter  } from 'react-router-dom';
import { Grid, Header } from 'semantic-ui-react';
import { fetchComments } from "../Actions/AsyncActionCreators/fetchActions";
import Content from '../Components/Content';
import ContentsList from '../Components/ContentsList';
import NotFound from '../Components/NotFound';
import Navigation from '../Components/Navigation';
import AddNewContentLink from '../Components/AddNewContentLink';

class PostDetailView extends Component {

    constructor(props) {
        super(props);
        const postId = props.match.params.post_id;

        this.state = {
          postId: postId,
        };
    }

    componentDidMount() {
        this.props.fetchComments(this.state.postId);
    }

    render() {
        const { posts, comments } = this.props;
        let post = posts.find(p=>p.id===this.state.postId);
     
        return(
            post.deleted? <NotFound /> :
                <div>
                    <Grid centered>
                        <Navigation />
                    </Grid>
                    <Content content={post} contentType="post" />
                    <Header size='medium' textAlign='center'>Comments</Header>
                    <ContentsList contents={comments} contentType="comment"/>
                    <AddNewContentLink path={`/create/${post.id}/comment`} contentType="comment" />
                </div>
        )
    }
}

PostDetailView.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            timestamp: PropTypes.number.isRequired,
            title: PropTypes.string,
            body: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            category: PropTypes.string,
            voteScore: PropTypes.number.isRequired,
            commentCount: PropTypes.number,
            deleted: PropTypes.bool.isRequired
        })
    ).isRequired,
    comments : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            timestamp: PropTypes.number.isRequired,
            body: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            voteScore: PropTypes.number.isRequired,
            deleted: PropTypes.bool.isRequired,
            parentDeleted: PropTypes.bool.isRequired,
            parentId: PropTypes.string.isRequired
        })
    ).isRequired
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators( {fetchComments}, dispatch);
}

function mapStateToProps(state={}) {
    return {posts: state.posts, comments: state.comments};
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(PostDetailView) );