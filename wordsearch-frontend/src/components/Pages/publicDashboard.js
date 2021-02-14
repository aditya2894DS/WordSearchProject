import React, { Component } from 'react';

import Header from '../Components/header';
import SignupFormComponent from '../Components/signupformComponent';

import { landingpageInfoText } from '../../config/constants';

import '../../scss/base_styles.scss';
import '../../scss/article_styles.scss';
import '../../scss/pages_styles/landingpage.scss';

import { Container, Row , Col } from 'react-bootstrap';

function LandingPageInfo(){
  return(
    <React.Fragment>
      <div className='infotext-container flex-column'>
        <h3 className='infotext-heading'>Welcome to <b>Word search - </b><span>Your online vocabulary journal</span></h3><hr />
        <p className='infotext-txt1'>{landingpageInfoText}</p>
        <p className='infotext-txt2'>Word Search allows user to:</p>
        <ul>
          <li>Save a word in the database</li>
          <li>View all the words in the database</li></ul>   
      </div></React.Fragment> )}

class PublicDashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row className='landingpage__top-section'>
            <Col><Header /></Col>
          </Row>
          <Row className='landingpage__bottom-section'>
            <Col xs={9}><LandingPageInfo /></Col>
            <Col xs={3}><SignupFormComponent /></Col>
          </Row></Container></React.Fragment>)}}

export default PublicDashboard;