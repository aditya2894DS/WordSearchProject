import wordActionTypes from '../../actions/wordActions/wordActionTypes';

const initialState = {
  isFetching: false,
  isFetched: false,
  isErr: false,
  wordsArray: null,
  err: ''
} 

function fetchWordReducer(state = initialState, action){
  switch(action.type){
    case wordActionTypes.FETCHWORDS_INITIATE:
      return {
        ...state,
        isFetching: true  }
    case wordActionTypes.FETCHWORDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isErr: false,
        isFetched: true,
        wordsArray: action.payload }
    case wordActionTypes.FETCHWORDS_FAILED:
      return {
        ...state, 
        isFetching: false,
        isErr: true,
        err: action.payload }  
    default: return state }
  }

export default fetchWordReducer;