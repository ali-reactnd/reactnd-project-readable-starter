import { FETCH_CATEGORIES } from '../Actions/actionTypes';

export function categories(state = {}, action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
}