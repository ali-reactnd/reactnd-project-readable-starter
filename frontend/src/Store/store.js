import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { initialState } from '../initialState';
import combinedReducers from '../Reducers/combinedReducers';

const store = createStore(
    combinedReducers,
    initialState,
    applyMiddleware(thunk));

store.subscribe(() => {console.log('store', store.getState())});

export default store;