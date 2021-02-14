import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import * as wordActions from '../../redux_components/actions/wordActions/wordActionCreator';

import WordByLetterListComponent from "../Components/wordByLetterListComponent";

import { SignInLoadingComponent } from '../Components/dataFetchStatus';

function ViewWordsByLetter(props){
  let dispatch = useDispatch()
  const { match: { params } } = props
  const [triggerComponent, setTriggerComponent] = useState(false)
  let viewWordInDetailComponent, recievedWords;
  recievedWords = useSelector(state => state.fetchWordByLetterState)
  
  useEffect(() => { dispatch(wordActions.initiateFetchWordByLetter(params.letter)) }, [])
  
  useEffect(() => { setTriggerComponent(true) }, [triggerComponent])

  if(triggerComponent){
    if(!recievedWords.isFetching && recievedWords.isFetched){
      viewWordInDetailComponent = (
        <React.Fragment>
          <WordByLetterListComponent recievedWordsProps={recievedWords.wordsArray} />
          </React.Fragment> )
    }
    else viewWordInDetailComponent = ( <SignInLoadingComponent /> )
  }
  else viewWordInDetailComponent = ( <SignInLoadingComponent /> )

  return(
    <React.Fragment>
      <Container fluid>
        <Row className='viewwordbyletter__top-section'>
          <Col><h1 className='section-heading'>{params.letter}</h1><hr /></Col>
        </Row>
        <Row className='viewwordbyletter__bottom-section'>
        <Col><div className='form-article-container flex-row'>
          { viewWordInDetailComponent }
        </div></Col></Row>
      </Container></React.Fragment>)}

export default ViewWordsByLetter;



