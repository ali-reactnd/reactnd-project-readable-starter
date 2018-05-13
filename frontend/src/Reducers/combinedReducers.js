import { combineReducers} from 'redux';
import { posts } from './postReducers';
import { comments } from './commentReducers';
import { categories, defaultCategory } from './categoryReducers';

export default combineReducers({
    defaultCategory,
    categories,
    posts,
    comments
});