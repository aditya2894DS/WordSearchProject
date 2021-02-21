import React, { Component } from 'react';

import SigninFormComponent from '../Components/signinformComponent'

import wsLogo from '../../media/logo.png';
import '../../scss/base_styles.scss';
import '../../scss/header_styles.scss';

import { Col, Row } from 'react-bootstrap';

class Header extends Component{
	constructor(){
		super();
		this.state = {
			viewLoginModal:false,
			viewSignupModal:false,
			headerUnclickable: false	}	
	}

	render(){
		return(
			<React.Fragment>
				<Row className='landingpage-header'>
					<Col xs={9}>
						<div className='site-logo_holder'>
							<img src={wsLogo} alt='logo' />
						</div>
					</Col>
					<Col xs={3}><SigninFormComponent /></Col>
				</Row></React.Fragment>)}} 

export default Header;