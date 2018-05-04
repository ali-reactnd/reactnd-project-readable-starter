import { combineReducers} from 'redux';
import { posts } from './postReducers';
import { comments } from './commentReducers';
import { categories } from './categoryReducers';

export default combineReducers({
    categories,
    posts,
    comments
});