import {fetchWrapper, HEADER, BASE_URL} from '../fetchWrapper';

export function deletePost(id) {
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/posts/${id}`, 'DELETE', HEADER)
        .then(result => dispatch({type: DELETE_POST, id}))
    }
}

export function deleteComment(comment) {
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/comments/${comment.id}`, 'DELETE', HEADER)
        .then(result => dispatch({type: DELETE_COMMENT, comment}))
    }
}