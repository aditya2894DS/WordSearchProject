import wordActionTypes from '../../actions/wordActions/wordActionTypes';

const initialState = {
  isFetching: false,
  isFetched: false,
  isErr: false,
  wordsArray: [],
  err: ''
} 

function fetchWordByLetterReducer(state = initialState, action){
  switch(action.type){
    case wordActionTypes.FETCHWORDSBYLETTER_INITIATE:
      return {
        ...state,
        isFetching: true  }
    case wordActionTypes.FETCHWORDSBYLETTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isErr: false,
        isFetched: true,
        wordsArray: action.payload }
    case wordActionTypes.FETCHWORDSBYLETTER_FAILED:
      return {
        ...state, 
        isFetching: false,
        isErr: true,
        err: action.payload }  
    default: return state }
  }

export default fetchWordByLetterReducer;