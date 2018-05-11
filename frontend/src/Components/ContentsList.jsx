import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Content from './Content';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter  } from 'react-router-dom';
import { fetchComments } from "../Actions/AsyncActionCreators/fetchActions";

const ContentsList = (props) => {
    
    let contents = props.contents.filter(e => e.deleted===false);
    let fetch = props.fetchComments;

    return (
        <ul>
            {contents.map( (content, index) => {
                let { id, category, title } = content;
                return (
                    <li key={index}>
                        {!!title ? <h3><Link to={`/${category}/${id}`} onClick={(e)=>fetch(id)}>{title}</Link></h3> : null}
                        <Content content={content} type={props.type}/>
                    </li>
                )

            })} 
        </ul>
    );

}


ContentsList.propTypes = {
    contents: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators( {fetchComments}, dispatch);
}

export default withRouter( connect(null, mapDispatchToProps)(ContentsList) );
