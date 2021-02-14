import React, { Component } from 'react';

import SigninFormComponent from '../Components/signinformComponent'

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
					<Col xs={9}><h2 className='site-name'>Word search</h2></Col>
					<Col xs={3}><SigninFormComponent /></Col>
				</Row></React.Fragment>)}} 

export default Header;