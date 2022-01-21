import {applyMiddleware, combineReducers, createStore} from 'redux'
import todos from '../reducers/todos'
import thunk from 'redux-thunk';
export const rootReducer = combineReducers(
        { todos }
    );
export default store = createStore(rootReducer,applyMiddleware(thunk));
