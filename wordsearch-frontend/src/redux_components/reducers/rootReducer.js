import { combineReducers } from 'redux'

import signinReducer from './authReducers/signinReducer'
import signoutReducer from './authReducers/signoutReducer'
import signupReducer from './authReducers/signupReducer';
import getCurrentUserReducer from './authReducers/getCurrentUserReducer';
import addwordReducer from './wordReducers/addWordReducer';
import fetchWordReducer from './wordReducers/fetchWordReducer';
import fetchWordByLetterReducer from './wordReducers/fetchWordByLetterReducer';

const rootReducer = combineReducers({
  signupState: signupReducer,
  signinState: signinReducer,
  signoutState: signoutReducer,
  getCurrentUserState: getCurrentUserReducer,
  addwordState: addwordReducer,
  fetchWordState: fetchWordReducer,
  fetchWordByLetterState: fetchWordByLetterReducer,
})

export default rootReducer;