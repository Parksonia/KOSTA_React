import {combineReducers} from 'redux';
import { addsubReducer } from './reducer/addsub'
import { countingReducer } from './reducer/counting';

export const rootReducer = combineReducers({
    value:addsubReducer,
    count: countingReducer
})