import authActionTypes from '../../actions/authActions/authActionTypes';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  isErr: false,
  user: null,
  token: '',
  err: ''
} 

function signinReducer(state = initialState, action){
  switch(action.type){
    case authActionTypes.SIGNIN_INITIATE:
      return {
        ...state,
        isFetching: true,
        user: action.payload  }
    case authActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isErr: false,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token }
    case authActionTypes.SIGNIN_FAILED:
      return {
        ...state, 
        isFetching: false,
        isErr: true,
        err: action.payload }  
    default: return state }
  }

export default signinReducer;