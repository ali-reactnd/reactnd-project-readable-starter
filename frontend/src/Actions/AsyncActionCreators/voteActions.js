import {fetchWrapper, HEADER, BASE_URL} from '../fetchWrapper';
import {VOTE_POST, VOTE_COMMENT} from '../actionTypes';

export function votePost(id, option){
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/posts/${id}`, 'POST', HEADER, JSON.stringify({option: option}))
        .then(result => dispatch({ type: VOTE_POST, id, option }))
    }
}

export function voteComment(id, option){
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/comments/${id}`, 'POST', HEADER, JSON.stringify({option: option}))
        .then(result => dispatch({ type: VOTE_COMMENT, id, option }))
    }
}