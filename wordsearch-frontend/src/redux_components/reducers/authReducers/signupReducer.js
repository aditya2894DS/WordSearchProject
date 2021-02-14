import authActionTypes from '../../actions/authActions/authActionTypes';

const initialState = {
  isFetching: false,
  isSuccess: false,
  isErr: false,
  err: '',
  user: null
} 

function signupReducer(state = initialState, action){
  switch(action.type){
    case authActionTypes.SIGNUP_INITIATE:
      return {
        ...state,
        isFetching: true,
        user: action.payload  }
    case authActionTypes.SIGNUP_SUCCESS:
      window.location.reload()
      return {
        ...state,
        isFetching: false,
        isErr: false,
        isSuccess: true }
    case authActionTypes.SIGNUP_FAILED:
      return {
        ...state, 
        isFetching: false,
        isErr: true,
        err: action.payload }  
    default: return state }
  }

export default signupReducer;