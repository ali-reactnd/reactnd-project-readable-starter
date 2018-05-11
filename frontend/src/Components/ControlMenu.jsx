import React, { Component }from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter  } from 'react-router-dom';
import { votePost, voteComment } from "../Actions/AsyncActionCreators/voteActions";
import { deletePost, deleteComment } from "../Actions/AsyncActionCreators/deleteActions";



class ControlMenu extends Component {

    upVote = () => {
        this.props.type==="post" ?
            this.props.votePost(this.props.id, "upVote") :
            this.props.voteComment(this.props.id, "upVote");
    };

    downVote = () => {
        this.props.type==="post" ?
            this.props.votePost(this.props.id, "downVote") :
            this.props.voteComment(this.props.id, "downVote");
    };

    delete = () => {
        this.props.type==="post" ?
            this.props.deletePost(this.props.id, "downVote") :
            this.props.deleteComment(this.props.id, this.props.parentId);
    }

    render() {
        return (
            <h4>
                <button onClick={this.upVote}>Up Vote</button>
                <button onClick={this.downVote}>Down Vote</button>
                <button >Edit</button>
                <button onClick={this.delete}>Delete</button>
            </h4>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( {votePost, voteComment, deletePost, deleteComment}, dispatch);
}

export default withRouter( connect(null, mapDispatchToProps)(ControlMenu) );
