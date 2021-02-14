import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as authActions from '../../redux_components/actions/authActions/authActionCreator';
import { frontendURL } from '../../config/constants';

import '../../scss/base_styles.scss';
import '../../scss/header_styles.scss';
import '../../scss/pages_styles/memberdashboardpage.scss';

import { Button } from 'react-bootstrap';

class UserProfileComponent extends Component{

  componentDidMount(){
		let token = sessionStorage.getItem('token')
		this.props.getCurrentUser(token)
	}

  componentDidUpdate(){
		if(this.props.signoutState.isSuccess){
			window.sessionStorage.removeItem('token')
			window.location.href = `${frontendURL}`
		}
  }
  
	render(){
    const token = window.sessionStorage.getItem('token')
    let username;
    let { signoutState, getCurrentUserState } = this.props;
    (getCurrentUserState.user !== null) ? username = getCurrentUserState.user.username : username = null;

		return(
			<React.Fragment>
				<div className="userprofile-console flex-column">
					<div className='userprofile-console__profilename-console flex-column'>
						<h4 className='profilename-console__profilename'>Welcome, {username}</h4>
            <Button className='signout-btn site-btn' onClick={() => this.props.onSignout(token)} disabled={signoutState.isFetching}>Sign out</Button>
					</div>
					<div className='userprofile_console__profileimg'>
						{/* insertin image */}
					</div>
				</div>
			</React.Fragment>) }} 

const mapStateToProps = (state) => {
  return { 
    signoutState: state.signoutState,
    getCurrentUserState: state.getCurrentUserState
   }
}
 
const mapDispatchToProps = (dispatch) => {
  return { 
    onSignout: token => dispatch(authActions.initiateSignout(token)),
    getCurrentUser: token => dispatch(authActions.initiateGetCurrentUser(token)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileComponent);
 
