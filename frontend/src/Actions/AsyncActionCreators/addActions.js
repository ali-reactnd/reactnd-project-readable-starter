import { fetchWrapper, HEADER, BASE_URL } from '../fetchWrapper';
import { ADD_POST, ADD_COMMENT } from '../actionTypes';

export function addPost(post) {
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/posts/`, 'POST', HEADER, JSON.stringify(post))
        .then(result =>  dispatch({ type:  ADD_POST, post }))
    }
}

export function addComment(comment) {
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/comments/`, 'POST', HEADER, JSON.stringify(comment))
        .then(result => dispatch({ type:  ADD_COMMENT, comment }))
    }
}

