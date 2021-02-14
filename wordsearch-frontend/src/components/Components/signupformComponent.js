import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as authActions from '../../redux_components/actions/authActions/authActionCreator';

import '../../scss/base_styles.scss';
import '../../scss/article_styles.scss';

import { SignInLoadingComponent, ErrMessageComponent } from './dataFetchStatus';

import { Button, InputGroup, FormControl } from 'react-bootstrap';

class SignupFormComponent extends Component{
	constructor(){
		super();
		this.state = {
			viewSignUpModal:true,
			signUpError:'',			
			signUpUsername:'',
			signUpEmail:'',
			signUpPassword:'',			
			signUpPasswordConfirm:'' }

		this.onTextboxChangeUserName = this.onTextboxChangeUserName.bind(this);
		this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
		this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);		
		this.onTextboxChangeSignUpPasswordConfirm = this.onTextboxChangeSignUpPasswordConfirm.bind(this);
	}

	onTextboxChangeUserName(e){
		this.setState({ signUpUsername:e.target.value })}

	onTextboxChangeSignUpEmail(e){
		this.setState({ signUpEmail:e.target.value })}

	onTextboxChangeSignUpPassword(e){
		this.setState({ signUpPassword:e.target.value	})}

	onTextboxChangeSignUpPasswordConfirm(e){
		this.setState({ signUpPasswordConfirm:e.target.value } )}
	
	componentDidUpdate(){
		if(this.props.signupState.isSuccess && !this.props.signupState.isFetching){ this.hideModal() }
	}		

	render(){
		let statusDisplayComponent, loadingDisplayComponent;
		(this.props.signupState.isFetching) ? (loadingDisplayComponent = <SignInLoadingComponent />) : (loadingDisplayComponent = <React.Fragment/>);
		(this.props.signupState.isErr) ? (statusDisplayComponent = <ErrMessageComponent msg={this.props.signupState.err} />) : (statusDisplayComponent = <React.Fragment />);

		var {
			signUpUsername,
			signUpEmail,
			signUpPassword,
			signUpPasswordConfirm } = this.state

		const userDetail = { signUpUsername, signUpEmail, signUpPassword, signUpPasswordConfirm }	
		return(
			<React.Fragment>
				<h3 className='signupform-heading'>Sign up</h3>
				<hr/>
					<InputGroup className='mb-3'>
						<InputGroup.Prepend>
							<InputGroup.Text>Username:</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl onChange={this.onTextboxChangeUserName} value={signUpUsername}></FormControl>
					</InputGroup>

					<InputGroup className='mb-3'>
						<InputGroup.Prepend>
							<InputGroup.Text>Email:</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl onChange={this.onTextboxChangeSignUpEmail} value={signUpEmail}></FormControl>
					</InputGroup>

					<InputGroup>
						<InputGroup.Prepend className='mb-3'>
							<InputGroup.Text>Password:</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type='password' onChange={this.onTextboxChangeSignUpPassword} value={signUpPassword}></FormControl>
					</InputGroup>

					<InputGroup>
						<InputGroup.Prepend className='mb-3'>
							<InputGroup.Text>Confirm password:</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl type='password' onChange={this.onTextboxChangeSignUpPasswordConfirm} value={signUpPasswordConfirm}></FormControl>
					</InputGroup>
				
					<div className='signup-holder flex-row'>
						{ statusDisplayComponent }
						<div className='loading-display flex-row'>
						{ loadingDisplayComponent }
						<Button className="signup-submit-btn" onClick={() => this.props.onSignUp(userDetail)}>Submit</Button>
						</div></div></React.Fragment>)}}

const mapStateToProps = (state) => {
	return {
		signupState: state.signupState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSignUp: userDetail => dispatch(authActions.initiateSignup(userDetail))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormComponent);
