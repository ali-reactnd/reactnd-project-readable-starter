import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter  } from 'react-router-dom';
import { sortByTimeStamp, sortByVoteScore } from "../Actions/SyncActionCreators/syncActions";

const SortMenu = (props) => {
    return (
        <div>
            <h4>Sort by: 
                <button onClick={props.sortByVoteScore}>vote score</button>
                <button onClick={props.sortByTimeStamp}>time stamp</button>
            </h4>
            <hr />
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( {sortByTimeStamp, sortByVoteScore}, dispatch);
}

export default withRouter( connect(null, mapDispatchToProps)(SortMenu) );
