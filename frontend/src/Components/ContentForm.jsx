import React, { Component } from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addPost, addComment } from '../Actions/AsyncActionCreators/addActions';
import { updatePost, updateComment } from '../Actions/AsyncActionCreators/updateActions';


class ContentForm extends Component {

    constructor(props){
        super(props);
        this.state = {...this.props};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState( {...nextProps} );
    }
    
    handleChange(event) {
        const {name, value} = event.target;
        this.setState( {content: Object.assign({}, this.state.content, {[name]:value} )}  );
    }

    handlePost() {

        switch (this.props.actionType){
            case "add":
                this.props.addPost(this.state.content);
                break;
            case "edit":
                this.props.updatePost(this.state.content);
                break;
            default:
        }
    }

    handleComment() {
        switch (this.props.actionType){
            case "add":
                this.props.addComment(this.state.content);
                break;
            case "edit":
                this.props.updateComment(this.state.content);
                break;
            default:
        }
    }

    handleSubmit(event) {
        switch (this.props.contentType){
            case "post":
                this.handlePost();
                break;
            case "comment":
                this.handleComment();
                break;
            default:
        }
        this.closeForm(event);
    }

    closeForm(event) {
        event.preventDefault();
        this.props.history.go(-1);
    }

    createInputForTitle(title){

        if (title===undefined)
            return null;

        return (
            <label>
                <h4>Title:</h4>
                <input name="title" type="text" defaultValue={title} onChange = {this.handleChange}  width="100%;"/>
            </label>
          );
    }

    createInputForBody(body){
        let msg = this.props.contentType;
        return (
            <label>
                <h4>{`Write your ${msg}:`}</h4> 
                <textarea name="body" defaultValue={body} onChange = {this.handleChange} />
            </label>
          );
    }

    createInputForCategory(category){
        if (category===undefined)
            return null;
        
        let categories = this.props.categories;
        
        return (
            <label>
                <h4>Select Category</h4> 
                <select name="category" defaultValue={category} onChange = {this.handleChange}>
                { categories? categories.map(( c, i)=>
                            <option key={i} value={c.name}>{c.name}</option>) : null }
                </select>
            </label>
        );
    }
    
    createInputForAuthor(author){

        return (
            <label>
                <h4>Author:</h4>
                <input name="author" type="text" defaultValue={author} onChange = {this.handleChange} />
            </label>
          );
    }


    render() {

        const { title, body, author, category } = this.state.content;

        return (
            <div>
                <form>
                    {this.createInputForTitle(title)}
                    {this.createInputForBody(body)}
                    {this.createInputForCategory(category)}
                    {this.createInputForAuthor(author)} <br /><br />
                    <div>
                        <button onClick={this.handleSubmit}>Save</button>
                        <button onClick={this.closeForm}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }

}

ContentForm.propTypes = {
    content: PropTypes.shape({
        id: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        title: PropTypes.string,
        body: PropTypes.string,
        author: PropTypes.string,
        category: PropTypes.string,
        voteScore: PropTypes.number,
        deleted: PropTypes.bool.isRequired
    }).isRequired,
    categories: PropTypes.array.isRequired,
    actionType: PropTypes.string.isRequired,
    contentType: PropTypes.string.isRequired
};

function mapStateToProps(state = {}) {
    return { categories: state.categories };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( {updatePost, addPost, updateComment, addComment}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentForm));