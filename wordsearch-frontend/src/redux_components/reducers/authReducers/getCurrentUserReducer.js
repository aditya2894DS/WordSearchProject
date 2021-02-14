import authActionTypes from '../../actions/authActions/authActionTypes';

const initialState = {
  isFetching: false,
  isSuccess: false,
  isErr: false,
  user: null,
  err: ''
} 

function getCurrentUserReducer(state = initialState, action){
  switch(action.type){
    case authActionTypes.GETCURRENTUSER_INITIATE:
      return {
        ...state,
        isFetching: true }
    case authActionTypes.GETCURRENTUSER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isErr: false,
        isSuccess: true,
        user: action.payload }
    case authActionTypes.GETCURRENTUSER_FAILED:
      return {
        ...state, 
        isFetching: false,
        isErr: true,
        err: action.payload }  
    default: return state }
  }

export default getCurrentUserReducer;