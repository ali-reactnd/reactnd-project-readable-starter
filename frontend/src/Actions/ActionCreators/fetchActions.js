import {fetchWrapper, HEADER, BASE_URL} from '../fetchWrapper';

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

export function fetchComments (post_id) {
    return function (dispatch) {
        return fetchWrapper(`${BASE_URL}/posts/${post_id}/comments`, 'GET', HEADER)
        .then(result =>  dispatch({ type: FETCH_COMMENTS, comments: result  }))
    }
}