import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as authActions from '../../redux_components/actions/authActions/authActionCreator';
import { frontendURL, memberDashboardURL } from '../../config/constants';

import { SignInLoadingComponent, ErrMessageComponent } from './dataFetchStatus';

import '../../scss/base_styles.scss';
import '../../scss/article_styles.scss';

import { Button, InputGroup, FormControl } from 'react-bootstrap';

class SigninFormComponent extends Component{
	constructor(){
		super();
		this.state = {
			signInEmail:'',
			signInPassword:'', 
			clickedHeaderBtn: false,
			inputErrorDisplay: false,
		}
		this.onTextboxChangeUserName = this.onTextboxChangeUserName.bind(this);
		this.onTextboxChangeLogInPassword = this.onTextboxChangeLogInPassword.bind(this);	}

	onTextboxChangeUserName(event){
		this.setState({	signInEmail:event.target.value	})}

	onTextboxChangeLogInPassword(event){
    this.setState({	signInPassword:event.target.value })}
    
	componentDidUpdate(){
		if(this.props.signinState.isAuthenticated){
			window.sessionStorage.setItem('token', this.props.signinState.token)
			window.location.href = `${frontendURL}${memberDashboardURL}`
		}
	}		

	render(){
		let statusDisplayComponent, loadingDisplayComponent;
		
		(this.props.signinState.isFetching) ? (loadingDisplayComponent = <SignInLoadingComponent />) : (loadingDisplayComponent = <React.Fragment />);
		(this.props.signinState.isErr) ? (statusDisplayComponent = <ErrMessageComponent msg={this.props.signinState.err} />) : (statusDisplayComponent = <React.Fragment />);

		var { signInEmail, signInPassword } = this.state
		const userCred = { signInEmail, signInPassword }
		
		return(
			<React.Fragment>
				<InputGroup className='mb-3'>
					<InputGroup.Prepend>
						<InputGroup.Text>Email:</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl value={signInEmail} onChange={this.onTextboxChangeUserName}></FormControl>
				</InputGroup>

				<InputGroup className='mb-3'>
					<InputGroup.Prepend>
						<InputGroup.Text>Password:</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl type='password' value={signInPassword} onChange={this.onTextboxChangeLogInPassword}></FormControl>
				</InputGroup>

				<div className='signin-holder flex-row'>
						{ statusDisplayComponent }
					<div className='loading-display flex-row'>
						{ loadingDisplayComponent }
						<Button className='signin-submit-btn' onClick={() => this.props.onSignIn(userCred)}>Sign In</Button>
					</div></div></React.Fragment>	)}}

const mapStateToProps = (state) => {
	return {
		signinState: state.signinState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		// not understood bindActionCreator
		// onSignIn: (userCred) => (bindActionCreators(authActions.requestSignin(userCred), dispatch))
		onSignIn: userCred => dispatch(authActions.initiateSignin(userCred))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninFormComponent);