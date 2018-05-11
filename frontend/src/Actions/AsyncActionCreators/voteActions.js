import {fetchWrapper, HEADER, BASE_URL} from '../fetchWrapper';
import {VOTE_POST, VOTE_COMMENT} from '../actionTypes';

export function votePost(postId, option){
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/posts/${postId}`, 'POST', HEADER, JSON.stringify({option: option}))
        .then(result => dispatch({ type: VOTE_POST, postId, option }))
    }
}

export function voteComment(commentId, option){
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/comments/${commentId}`, 'POST', HEADER, JSON.stringify({option: option}))
        .then(result => dispatch({ type: VOTE_COMMENT, commentId, option }))
    }
}