import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter  } from 'react-router-dom';
import { sortByTimeStamp, sortByVoteScore } from "../Actions/SyncActionCreators/syncActions";
import { Menu } from 'semantic-ui-react';

const SortMenu = (props) => {
    return (
        <Menu text>
            <Menu.Item header>Sort By</Menu.Item>
            <Menu.Item name='vote score' onClick={props.sortByVoteScore} />
            <Menu.Item name='time stamp' onClick={props.sortByTimeStamp} />
        </Menu>
    );
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( {sortByTimeStamp, sortByVoteScore}, dispatch);
}

export default withRouter( connect(null, mapDispatchToProps)(SortMenu) );