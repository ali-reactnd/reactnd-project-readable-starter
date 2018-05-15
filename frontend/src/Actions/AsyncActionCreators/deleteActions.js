import { fetchWrapper, HEADER, BASE_URL } from '../fetchWrapper';
import { DELETE_POST, DELETE_COMMENT } from '../actionTypes';

export function deletePost(postId) {
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/posts/${postId}`, 'DELETE', HEADER)
        .then(result => dispatch({type: DELETE_POST, postId}))
    }
}

export function deleteComment(commentId, parentId) {
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/comments/${commentId}`, 'DELETE', HEADER)
        .then(result => dispatch({type: DELETE_COMMENT, commentId, parentId}))
    }
}