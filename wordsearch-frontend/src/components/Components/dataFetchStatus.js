import React from 'react';
import { Spinner } from 'react-bootstrap';

function SignInLoadingComponent(){
	return(
		<Spinner animation="border" role="status" variant='primary'>
			<span className="sr-only">Loading...</span>
		</Spinner> )}

function ErrMessageComponent(props){
	return(
		<p className='message-container'>{props.msg}</p> )}

export { SignInLoadingComponent, ErrMessageComponent }    