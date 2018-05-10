import { FETCH_POSTS, ADD_POST, UPDATE_POST, DELETE_POST, VOTE_POST, SORT_POST } from '../Actions/actionTypes';
import { ADD_COMMENT, DELETE_COMMENT } from '../Actions/actionTypes';

// The combineReducers method will send a slice of state (i.e. state.posts) to this reducer
export function posts(state = {}, action) {
    switch (action.type) {

        case FETCH_POSTS:
            return action.posts;

        case ADD_POST:
            return [...state, action.post];

        case DELETE_POST:
            return state.map( post=> {
                if (post.id===action.id)
                    return {...post, "deleted": true};
                else
                    return post;
            });

        case UPDATE_POST:
            return state.map(post => {
                if (post.id === action.post.id)
                    return action.post;
                else
                    return post;
            });

        case VOTE_POST:
            return state.map( post=> {
                if (post.id===action.id)
                    return {...post, "voteScore": action.option==="upVote"? post.voteScore+1 : post.voteScore-1};
                else
                    return post;
            });
        
        case SORT_POST:
            const key = action.sortby;
            return [...state].sort( (p1, p2) => (p1[key] < p2[key]) );

        case ADD_COMMENT:
            return state.map( post=> {
                if (post.id===action.comment.parentId)
                    return {...post, commentCount: post.commentCount+1};
                else
                    return post;
            });

        case DELETE_COMMENT:
            return state.map( post=> {
                if (post.id===action.comment.parentId)
                    return {...post, commentCount: post.commentCount-1};
                else
                    return post;
            });

        default:
            return state;
    }
}