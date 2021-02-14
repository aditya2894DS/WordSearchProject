import authActionTypes from '../../actions/authActions/authActionTypes';

const initialState = {
  isFetching: false,
  isSuccess: false,
  isErr: false,
  token: '',
  err: ''
} 

function signoutReducer(state = initialState, action){
  switch(action.type){
    case authActionTypes.SIGNOUT_INITIATE:
      return {
        ...state,
        isFetching: true,
        token: action.payload  }
    case authActionTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isErr: false,
        token: '',
        isSuccess: true }
    case authActionTypes.SIGNOUT_FAILED:
      return {
        ...state, 
        isFetching: false,
        isErr: true,
        err: action.payload }  
    default: return state }
  }

export default signoutReducer;