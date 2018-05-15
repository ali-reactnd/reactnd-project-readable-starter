import { SORT_POST } from '../actionTypes';

export function sortByTimeStamp() {
    return { type: SORT_POST, sortby: 'timestamp'  }
}

export function sortByVoteScore() {
    return { type: SORT_POST, sortby: 'voteScore'  }
}