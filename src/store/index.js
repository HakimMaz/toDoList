import {combineReducers, createStore} from 'redux'
import todos from '../reducers/todos'

export const rootReducer = combineReducers(
        { todos }
    );
export default store = createStore(rootReducer);
