import {fetchWrapper, HEADER, BASE_URL} from '../fetchWrapper';
import {UPDATE_POST, UPDATE_COMMENT} from '../actionTypes';

export function updatePost(post) {
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/posts/${post.id}`, 'PUT', HEADER, JSON.stringify(post))
        .then(result => dispatch({ type:  UPDATE_POST, post }))
    }
}

export function updateComment(comment) {
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/comments/${comment.id}`, 'PUT', HEADER, JSON.stringify(comment))
        .then(result => dispatch({ type:  UPDATE_COMMENT, comment }))
    }
}

