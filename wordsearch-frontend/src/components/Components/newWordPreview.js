import React, { Component } from 'react';

class WordPreview extends Component{

	render(){
		return(
			<React.Fragment>
				<div className='word-preview-section flex-column'>
					<div className='word-partofspeech flex-row'>
						<h2 className='word-preview-txt'>{this.props.newWord}</h2>
						<p className='noun-type-txt'>{this.props.subCategory} {this.props.partOfSpeech}</p>
						<p className='connotation-txt'>{this.props.wordConnotation}</p></div>
					<div className="etymology-section flex-column">
						<p className='originlanguage-txt'>Language of origin:{this.props.originLang}</p>
						<p className='rootword-txt'>Root word:{this.props.rootWord}</p></div>
					<div className='meaning-section'>
						<p className='meaning-heading-txt'>Meaning:</p>
						<p className="meaning-desc-txt">{this.props.definition}</p></div>
					<div className='usage-section'>
						<p className='usage-heading-txt'>Usage:</p>
						<p className="usage-txt">{this.props.example}</p></div></div></React.Fragment>)}}

export default WordPreview;