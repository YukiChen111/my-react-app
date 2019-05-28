import {combineReducers} from 'redux';
import squareReducer from './square-reducer';
import request from './request'

const rootReducer=combineReducers(
    {color: squareReducer, request,},
)

export default rootReducer;