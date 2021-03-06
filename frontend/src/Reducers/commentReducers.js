import { FETCH_COMMENTS, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, VOTE_COMMENT } from '../Actions/actionTypes';
import { DELETE_POST } from '../Actions/actionTypes';

export function comments(state = {}, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return action.comments;

        case ADD_COMMENT:
            return [...state, action.comment];

        case DELETE_COMMENT:
            return state.map( comment=> {
                if (comment.id===action.commentId)
                    return {...comment, "deleted": true};
                else
                    return comment;
            });

        case UPDATE_COMMENT:
            return state.map(comment => {
                if (comment.id===action.comment.id)
                    return action.comment;
                else
                    return comment;
            });

        case VOTE_COMMENT:
            return state.map( comment=> {
                if (comment.id===action.commentId)
                    return {...comment, "voteScore": action.option==="upVote"? comment.voteScore+1 : comment.voteScore-1};
                else
                    return comment;
            });

        case DELETE_POST:
            return state.map( comment=> {
                if (comment.parentId===action.postId)
                    return {...comment, "parentDeleted": true};
                else
                    return comment;
        });

        default:
            return state;
    }
}