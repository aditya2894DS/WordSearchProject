import React, { Component } from 'react';
import { connect } from 'react-redux';

import ViewAllWordsComponent from '../Components/viewAllWordsComponent'
import EnterNewWord from '../Components/enterNewWordComponent'
import MemberHeader from '../Components/memberHeader';

import * as authActions from '../../redux_components/actions/authActions/authActionCreator';

import '../../scss/base_styles.scss';
import '../../scss/header_styles.scss';

import { Col, Row, Container } from 'react-bootstrap';

class MemberDashboard extends Component{
	constructor(){
		super();
		this.state = { viewDatabase: true	}
		this.getBottomComponent = this.getBottomComponent.bind(this)
	}
	
	componentDidMount(){
		let token = sessionStorage.getItem('token')
		this.props.getCurrentUser(token)
	}
	
	getBottomComponent(data){	this.setState({ viewDatabase: data }) }
	
	render(){
		let username, bottomComponent;
		let { getCurrentUserState } = this.props;
		(getCurrentUserState.user !== null) ? username = getCurrentUserState.user.username : username = null;
		(this.state.viewDatabase) ? bottomComponent = <ViewAllWordsComponent /> : bottomComponent = <EnterNewWord />

		return( 
			<React.Fragment>
				<Container fluid>
					<Row className='memberdashboardpage__top-section'>
						<Col><MemberHeader currentUser={username} bottomComponent={this.getBottomComponent} /></Col>
					</Row>
					<Row className='memberdashboardpage__bottom-section'>
						<Col>{ bottomComponent }</Col>
					</Row>						
				</Container>
			</React.Fragment> )}}

const mapStateToProps = (state) => {
	return{
		getCurrentUserState: state.getCurrentUserState
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		getCurrentUser: token => dispatch(authActions.initiateGetCurrentUser(token))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberDashboard)