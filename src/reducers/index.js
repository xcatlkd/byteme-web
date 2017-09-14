import { combineReducers } from "redux";
import restaurant from "./restaurant";
import { routerReducer } from 'react-router-redux'


export default combineReducers({ restaurant, routing: routerReducer });
