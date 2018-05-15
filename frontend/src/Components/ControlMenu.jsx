import React, { Component }from 'react';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { votePost, voteComment } from "../Actions/AsyncActionCreators/voteActions";
import { deletePost, deleteComment } from "../Actions/AsyncActionCreators/deleteActions";
import { Button, Icon } from 'semantic-ui-react';

class ControlMenu extends Component {

    upVote = () => {
        this.props.contentType==="post" ?
            this.props.votePost(this.props.id, "upVote") :
            this.props.voteComment(this.props.id, "upVote");
    };

    downVote = () => {
        this.props.contentType==="post" ?
            this.props.votePost(this.props.id, "downVote") :
            this.props.voteComment(this.props.id, "downVote");
    };

    delete = () => {
        this.props.contentType==="post" ?
            this.props.deletePost(this.props.id, "downVote") :
            this.props.deleteComment(this.props.id, this.props.parentId);
    }

    edit = () => {
        return this.props.contentType==="post" ?
            <Link to={`/edit/${this.props.id}`}>
                <Button content="Edit" icon='edit' labelPosition='left' />
            </Link>
            :
            <Link to={`/edit/${this.props.parentId}/${this.props.id}`}>
                <Button content="Edit" icon='edit' labelPosition='left' />
            </Link>
    }

    render() {
        return (
            <div>
                <Button.Group>
                    <Button icon onClick={this.upVote}>
                        <Icon name='thumbs up outline' />
                    </Button>
                    <Button.Or text='V' />
                    <Button icon onClick={this.downVote}>
                        <Icon name='thumbs down outline' />
                    </Button>
                </Button.Group>
                {" "}
                {this.edit()}
                <Button content="Delete" icon='trash' labelPosition='left' onClick={this.delete} />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( {votePost, voteComment, deletePost, deleteComment}, dispatch);
}

export default withRouter( connect(null, mapDispatchToProps)(ControlMenu) );