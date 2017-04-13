import { combineReducers } from 'redux';
import {  routerReducer } from 'react-router-redux';

import user from './userReducer';
import rides from './ridesReducer';

const appReducer = combineReducers ({
  user,
  rides,
});

const rootReducer = (state, action) => {
  if(action.type === 'USER_SIGNED_OUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;