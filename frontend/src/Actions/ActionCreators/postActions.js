/*  action types */
import {fetchWrapper, HEADER, BASE_URL} from './fetchWrapper'

export function addPost(post) {
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/posts/`, 'POST', HEADER, JSON.stringify(post))
        .then(result =>  dispatch({ type:  ADD_POST, post }))
    }
}

export function updateVotePost(id, option){
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/posts/${id}`, 'POST', HEADER, JSON.stringify({option: option}))
        .then(result => dispatch({ type: UPDATE_VOTE_POST, id, option }))
    }
}

export function addComment(comment) {
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/comments/`, 'POST', HEADER, JSON.stringify(comment))
        .then(result => dispatch({ type:  ADD_COMMENT, comment }))
    }
}

export function updateVoteComment(id, option){
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/comments/${id}`, 'POST', HEADER, JSON.stringify({option: option}))
        .then(result => dispatch({ type: UPDATE_VOTE_COMMENT, id, option }))
    }
}