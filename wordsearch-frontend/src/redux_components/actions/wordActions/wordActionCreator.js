import wordActionTypes from './wordActionTypes'
import { frontendURL, backendURL, emptyFieldError, enternewwordURL, viewworddatabaseURL, viewwordbyletterURL } from '../../../config/constants';
import { checkEmptyFields, capitalizeFirstLetter } from '../form_validation_helper'

/**
 * add word action creators
 */
export function requestAddWord(wordDetail){
  return {
    type: wordActionTypes.ADDWORD_INITIATE,
    payload: wordDetail
  }
}

export function successAddWord(){
  return {
    type: wordActionTypes.ADDWORD_SUCCESS,
  }
}

export function failAddWord(err){
  return {
    type: wordActionTypes.ADDWORD_FAILED,
    payload: err
  }
}

export function requestFetchWord(){
  return {
    type: wordActionTypes.FETCHWORDS_INITIATE,
  }
}

export function successFetchWord(data){
  return {
    type: wordActionTypes.FETCHWORDS_SUCCESS,
    payload: data
  }
}

export function failFetchWord(err){
  return {
    type: wordActionTypes.FETCHWORDS_FAILED,
    payload: err
  }
}

export function requestFetchWordByLetter(){
  return {
    type: wordActionTypes.FETCHWORDSBYLETTER_INITIATE,
  }
}

export function successFetchWordByLetter(data){
  return {
    type: wordActionTypes.FETCHWORDSBYLETTER_SUCCESS,
    payload: data
  }
}

export function failFetchWordByLetter(err){
  return {
    type: wordActionTypes.FETCHWORDSBYLETTER_FAILED,
    payload: err
  }
}


//TODO: create an explicit function to set auth headers
/**
 * auth functions
 * @param {} userDetail
 */

// creating auth headers
let currentUser = window.sessionStorage.getItem('token')
let authHeaders = new Headers()
authHeaders.append('Authorization', currentUser)
authHeaders.append('Access-Control-Allow-Origin', `${frontendURL}`)
authHeaders.append('Content-Type', 'application/json')

// addword  function
export function initiateAddWord(wordDetail){
  let noEmptyField = checkEmptyFields(wordDetail)

  if(noEmptyField){
    return dispatch => {
      dispatch(requestAddWord(wordDetail))
      return(
        fetch(`${backendURL}${enternewwordURL}`, {
          method: 'POST',
          headers: authHeaders,
          body: JSON.stringify({
            enteredWord: capitalizeFirstLetter(wordDetail.newWord),
            languageOfOrigin: wordDetail.originLang,
            root: wordDetail.rootWord,
            partOfSpeech: wordDetail.partOfSpeech,
            partOfSpeechSubCategory: wordDetail.subCategory,
            connotation: wordDetail.wordConnotation,
            definition: wordDetail.definition,
            example: wordDetail.example })   
          })
        .then(res => res.json())
        .then(json =>
          (json.success) ?
            dispatch(successAddWord()) :
            dispatch(failAddWord(json.err_msg))
          )
      )
    }
  }
  else return dispatch => dispatch(failAddWord(`${emptyFieldError}`)) 
} 

// fetchwords function
export function initiateFetchWord(){
  return dispatch => {
    dispatch(requestFetchWord())
    return(
      fetch(`${backendURL}${viewworddatabaseURL}`, 
        {	method: 'GET',
          headers: authHeaders })
        .then(res => res.json())
        .then(json => 
          (json.success) ? 
            (dispatch(successFetchWord(json))) :
            (dispatch(failFetchWord(json.err_msg)))
          )
        .catch(err => console.log(err))
    )
  }
} 

// fetch words by letter function
export function initiateFetchWordByLetter(char){
  return dispatch => {
    dispatch(requestFetchWordByLetter(char))
    return(
      fetch(`${backendURL}${viewwordbyletterURL}`, {
        method: 'POST',
        headers: authHeaders ,
        body: JSON.stringify({ letter: char })  
      })
      .then(res => res.json())
      .then(json =>
        (json.success) ? 
          (dispatch(successFetchWordByLetter(json.obj))) :
          (dispatch(failFetchWordByLetter(json.err_msg)))
        ) 
    )  
  }
}