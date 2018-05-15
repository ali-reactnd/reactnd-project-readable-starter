import React, { Component } from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addPost, addComment } from '../Actions/AsyncActionCreators/addActions';
import { updatePost, updateComment } from '../Actions/AsyncActionCreators/updateActions';
import { Container, Segment, Button, Form } from 'semantic-ui-react';

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
        console.log({name, value});
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
                console.log("Invalid action type!");
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
                console.log("Invalid action type!");
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
                console.log("Invalid content type!");
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
            <div className="required field">
                <label>Title:</label>
                <input name="title" type="text" defaultValue={title} onChange={this.handleChange}  width="100%;"/>
            </div>
          );
    }

    createInputForBody(body){
        let msg = this.props.contentType;
        return (
            <div className="required field">
                <label>{`Write your ${msg}:`}</label> 
                <textarea name="body" defaultValue={body} onChange={this.handleChange} />
            </div>
          );
    }

    createInputForCategory(category){
        if (category===undefined)
            return null;
        
        let categories = this.props.categories;
        
        return (
            <div className="required field">
                <label>Select Category:</label> 
                <select name="category" defaultValue={category} onChange={this.handleChange}>
                { categories? categories.map( (c, i) => {
                        return <option key={i} value={c.name}>{c.name}</option>
                    }
                ) : null }
                </select>
            </div>
        );
    }
    
    createInputForAuthor(author){
        return (
            <div className="required field">
                <label>Author:</label>
                <input name="author" type="text" defaultValue={author} onChange={this.handleChange} />
            </div>
          );
    }

    render() {
        const { title, body, author, category } = this.state.content;

        return (
            <Container text>
                <Segment padded="very" raised>
                    <Form>
                        {this.createInputForTitle(title)}
                        {this.createInputForBody(body)}
                        {this.createInputForCategory(category)}
                        {this.createInputForAuthor(author)} 
                        <div className="field">
                            <Button onClick={this.handleSubmit}>Save</Button>
                            <Button onClick={this.closeForm}>Cancel</Button>
                        </div>
                    </Form>
                </Segment>
            </Container>
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