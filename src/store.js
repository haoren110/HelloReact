import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as data from './component/TabBar/model';
import thunk from 'redux-thunk';

let store = createStore(
    combineReducers(data)
);
console.log(store.getState())

export default store;