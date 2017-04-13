import { combineReducers } from 'redux';
import {  routerReducer } from 'react-router-redux';

import user from './userReducer';
import rides from './ridesReducer';

export default combineReducers({
  user,
  rides,
});