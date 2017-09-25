import { combineReducers } from "redux";
import restaurant from "./restaurant";
import auth from "./auth";
import { routerReducer } from 'react-router-redux'


export default combineReducers({ restaurant, auth, routing: routerReducer });
