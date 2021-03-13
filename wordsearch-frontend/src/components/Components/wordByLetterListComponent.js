import React, { useState } from 'react';

function WordInDetailComponent(props){
  let { recievedWordsProps } = props
  if(recievedWordsProps !== null){
    return(
      <React.Fragment>
        <div className='word-preview-section flex-column'>
          <div className='word-partofspeech flex-row'>
            <p className='word-preview-txt'>{recievedWordsProps.enteredWord}</p>
            <p className='noun-type-txt'>{recievedWordsProps.partOfSpeechSubCategory} {recievedWordsProps.partOfSpeech}</p>
            <p className='connotation-txt'>{recievedWordsProps.connotation}</p></div>
          <div className="etymology-section flex-column">
            <p className='originlanguage-txt'><b>Language of origin:</b>{recievedWordsProps.languageOfOrigin}</p>
            <p className='rootword-txt'><b>Root word:</b>{recievedWordsProps.root}</p></div>
          <div className='meaning-section'>
            <p className='meaning-heading-txt'><b>Meaning :-</b></p>
            <p className="meaning-desc-txt">{recievedWordsProps.definition}</p></div>
          <div className='usage-section'>
            <p className='usage-heading-txt'><b>Usage :-</b></p>
            <p className="usage-txt">{recievedWordsProps.example}</p></div></div></React.Fragment>)}
  else return <React.Fragment />}

function WordByLetterListComponent(props){
  let { recievedWordsProps } = props
  const [ clickedWord, setClickedWord ] = useState(null)
  console.log('recieved '+ JSON.stringify(recievedWordsProps))
  return(
    <React.Fragment>
      <div className='viewwordindetail-section-container flex-row'>
        <div className='wordlist-section flex-column'>
          <div className='wordlist-header flex-row'>
            <h2 className='section-heading'>Word list</h2>
            <p>({ recievedWordsProps.length })</p></div>
          <hr />
          <div className='wordlist-container'>
            <ul>
            { recievedWordsProps.map(word => {
              return <li onMouseEnter={() => setClickedWord(word)}
                        onMouseLeave={() => setClickedWord(null)}>{word.enteredWord}</li> })}</ul></div>
        </div>
        <WordInDetailComponent recievedWordsProps={clickedWord}/>
      </div></React.Fragment>)}

export default WordByLetterListComponent;          

