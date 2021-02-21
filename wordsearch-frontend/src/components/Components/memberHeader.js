import React, { Component } from 'react';
import { connect } from 'react-redux';

import { frontendURL } from '../../config/constants';

import UserProfileComponent from './userProfileComponent'
import wsLogo from '../../media/logo.png';

import '../../scss/base_styles.scss';
import '../../scss/header_styles.scss';

import { Col, Row } from 'react-bootstrap';

class MemberHeader extends Component{
	constructor(){
		super();
		this.state = { 
			viewDatabase: true,
			toggleColour: true }
		this.triggerEnterNewWord = this.triggerEnterNewWord.bind(this)
		this.triggerViewDatabase = this.triggerViewDatabase.bind(this)
	}

	componentDidUpdate(){
		if(this.props.signoutState.isSuccess){
			window.sessionStorage.removeItem('token')
			window.location.href = `${frontendURL}`
		}
	}

	triggerEnterNewWord(){
		if(this.state.viewDatabase){
			this.setState({ 
				viewDatabase: false,
				toggleColour: false }, () => { this.props.bottomComponent(this.state.viewDatabase) }) }
		else return null
	}
			
	triggerViewDatabase(){
		if(!this.state.viewDatabase){
			this.setState({ 
				viewDatabase: true,
				toggleColour: true }, () => {	this.props.bottomComponent(this.state.viewDatabase) }) }
		else return null
	}

	render(){
		let { toggleColour } = this.state

 		return(
			<React.Fragment> 
				<Row className='member-header'>
					<Col xs={3}>
						<div className='site-logo_holder'>
							<img src={wsLogo} alt='logo' />
						</div>
					</Col>
					<Col xs={6} className='member-header__tab-container flex-row'>
						<div className={`member-tabcontainer__viewdatabasetab ${!toggleColour ? "" : "active"}`} onClick={this.triggerViewDatabase}>View your database</div>
						<div className={`member-tabcontainer__enterwordtab ${toggleColour ? "" : "active"}`} onClick={this.triggerEnterNewWord}>Add word to database</div>
					</Col>
					<Col xs={3}><UserProfileComponent/></Col></Row></React.Fragment>)}}

const mapStateToProps = (state) => {
 return { signoutState: state.signoutState }}

export default connect(mapStateToProps, null)(MemberHeader);