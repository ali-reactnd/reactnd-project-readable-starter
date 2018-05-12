import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { classToPlain } from "class-transformer";
import { ContentFactory } from '../Model/Model';
import ContentForm from '../Components/ContentForm'

const CreateView = () => {

    return (

        <Switch>
        
            <Route exact path='/create/post' render={(props) => {
                let post = classToPlain(ContentFactory.makeNewPost(' ', ' ', ' ', ' '))
                return (
                    <ContentForm {...props} content={post} actionType="add" contentType="post"/>
                );
            }}  />

            <Route exact path='/create/:category/post' render={(props) => {
                let category = props.match.params.category;
                let post = classToPlain(ContentFactory.makeNewPost(' ', ' ', ' ', category))
                return (
                    <ContentForm {...props} content={post} actionType="add" contentType="post"/>
                );
            }}  />

            <Route exact path='/create/:post_id/comment' render={(props) => {
                let parentId = props.match.params.post_id;
                let comment = classToPlain(ContentFactory.makeNewComment(parentId, " ", " "))
                return (
                    <ContentForm {...props} content={comment} actionType="add" contentType="comment"/>
                );
            }}  />

        </Switch>
    );

}

export default CreateView;