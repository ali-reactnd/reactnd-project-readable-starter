import { fetchWrapper, HEADER, BASE_URL } from '../fetchWrapper';
import { FETCH_CATEGORIES, FETCH_POSTS, FETCH_COMMENTS } from '../actionTypes';

export function fetchCategories () {
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/categories`, 'GET', HEADER)
            .then(result =>  dispatch({ type: FETCH_CATEGORIES, categories: result.categories  }))
    }
}

export function fetchPosts () {
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/posts`, 'GET', HEADER)
            .then(result =>  dispatch({ type: FETCH_POSTS, posts: result  }))
    }
}

export function fetchComments (postId) {
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/posts/${postId}/comments`, 'GET', HEADER)
        .then(result =>  dispatch({ type: FETCH_COMMENTS, comments: result  }))
    }
}