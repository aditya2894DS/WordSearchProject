import authActionTypes from './authActionTypes'
import { checkEmptyFields, matchPassword } from '../form_validation_helper'
import { frontendURL, backendURL, signinURL,signoutURL, signupURL, emptyFieldError, passwordsDonotMatchError, getCurrentUserURL } from '../../../config/constants';

/**
 * signup action creators
 */
export function requestSignup(userDetail){
  return {
    type: authActionTypes.SIGNUP_INITIATE,
    payload: userDetail
  }
}

export function successSignup(){
  return {
    type: authActionTypes.SIGNUP_SUCCESS,
  }
}

export function failSignup(err){
  return {
    type: authActionTypes.SIGNUP_FAILED,
    payload: err
  }
}

/**
 * signin action creators
 */
export function requestSignin(userCred){
  return {
    type: authActionTypes.SIGNIN_INITIATE,
    payload: userCred
  }
}

export function authenticateSignin(data){
  return {
    type: authActionTypes.SIGNIN_SUCCESS,
    payload: data
  }
}

export function failSignin(err){
  return {
    type: authActionTypes.SIGNIN_FAILED,
    payload: err
  }
}

/**
 * signout action creators
 */
export function requestSignout(token){
  return {
    type: authActionTypes.SIGNOUT_INITIATE,
    payload: token
  }
}

export function successSignout(){
  return {
    type: authActionTypes.SIGNOUT_SUCCESS,
  }
}

export function failSignout(err){
  return {
    type: authActionTypes.SIGNOUT_FAILED,
    payload: err
  }
}

/**
 * get current user action creators
 */
export function requestGetCurrentUser(token){
  return {
    type: authActionTypes.GETCURRENTUSER_INITIATE,
    payload: token
  }
}

export function successGetCurrentUser(user){
  return {
    type: authActionTypes.GETCURRENTUSER_SUCCESS,
    payload: user
  }
}

export function failGetCurrentUser(err){
  return {
    type: authActionTypes.GETCURRENTUSER_FAILED,
    payload: err
  }
}
/**
 * auth functions
 * @param {} userDetail
 */

// signup function
export function initiateSignup(userDetail){
  let noEmptyField = checkEmptyFields(userDetail)
  if(noEmptyField){
    let matchedPassword = matchPassword(userDetail.signUpPassword, userDetail.signUpPasswordConfirm)
    if(matchedPassword){
      return dispatch => {
        dispatch(requestSignup(userDetail))
        return (
          fetch(`${backendURL}${signupURL}`, {
            method: 'POST',
            headers:{ 
              'Access-Control-Allow-Origin': `${frontendURL}`,
              'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              username: userDetail.signUpUsername,
              email: userDetail.signUpEmail,
              password: userDetail.signUpPassword,
              confirmPassword: userDetail.signUpPasswordConfirm }) 
          })
        )
        .then(res => res.json())
        .then(json => 
          (json.success) ?
            dispatch(successSignup()) :
            dispatch(failSignup(json.err_msg))
          )
      }      
    }
    else return dispatch => dispatch(failSignup(`${passwordsDonotMatchError}`))  
  }
  else return dispatch => dispatch(failSignup(`${emptyFieldError}`)) 
} 

// signin function 
export function initiateSignin(userCred){
  let noEmptyField = checkEmptyFields(userCred)
  if(noEmptyField){
    return dispatch => { 
      dispatch(requestSignin(userCred)) 
      return (    
        fetch(`${backendURL}${signinURL}`, {
          method: 'POST',
          headers:{ 
            'Access-Control-Allow-Origin': `${frontendURL}`,
            'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: userCred.signInEmail,
            password: userCred.signInPassword }) 
        })
      )
      .then(res => res.json())
      .then(json => 
        (json.success) ?
          dispatch(authenticateSignin(json)) :
          dispatch(failSignin(json.message)) )
      .catch(err => console.log(err))  
      }}
    else return dispatch => {
      dispatch(failSignin(`${emptyFieldError}`)) }
}

// signout function
export function initiateSignout(token){
  let authHeaders = new Headers()
  authHeaders.append('Authorization', token)
  authHeaders.append('Access-Control-Allow-Origin', `${frontendURL}`)
  authHeaders.append('Content-Type', 'application/json')

  return dispatch => {
    dispatch(requestSignout(token))
    return (
      fetch(`${backendURL}${signoutURL}`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({ token: token }) 
      })
    )
    .then(res => res.json())
    .then(json => 
      (json.success) ?
        dispatch(successSignout()) :
        dispatch(failSignout()))
  }
}

// get current user function
export function initiateGetCurrentUser(token){
  let authHeaders = new Headers()
  authHeaders.append('Authorization', token)
  authHeaders.append('Access-Control-Allow-Origin', `${frontendURL}`)
  authHeaders.append('Content-Type', 'application/json')

  return dispatch => {
    dispatch(requestGetCurrentUser(token))
    return (
      fetch(`${backendURL}${getCurrentUserURL}`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({ token: token }) 
      })
    )
    .then(res => res.json())
    .then(json => 
      (json.success) ?
        dispatch(successGetCurrentUser(json.user)) :
        dispatch(failGetCurrentUser(json.err_msg)))
  }
}