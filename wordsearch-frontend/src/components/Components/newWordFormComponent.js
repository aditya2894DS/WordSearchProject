import React, { Component } from 'react';

import { originLanguages, partsOfSpeech, connotation, subTypes } from '../../config/constants';

class NewWordFormComponent extends Component{
	constructor(){
		super();

		this.state = {
			value:"There is no definition provided",
			enteredPartOfSpeech: "" }

		this.showSubCategoryInput = this.showSubCategoryInput.bind(this);  }

	 showSubCategoryInput(event){
		let { value } = event.target
		switch(value){
			case "Noun": this.setState({ enteredPartOfSpeech: 'Noun' })
			break;
			case "Pronoun": this.setState({ enteredPartOfSpeech: 'Pronoun' })
			break;
			case "Verb": this.setState({ enteredPartOfSpeech: 'Verb' })
			break;
			case "Adjective": this.setState({ enteredPartOfSpeech: 'Adjective' })
			break;
			case "Adverb": this.setState({ enteredPartOfSpeech: 'Adverb' })
			break;
			case "Preposition": this.setState({ enteredPartOfSpeech: 'Preposition' })
			break;
			case "Conjuction": this.setState({ enteredPartOfSpeech: 'Conjuction' })
			break;
			default :	this.setState({ enteredPartOfSpeech: '' } )}}

	render(){
		let {
			changeNewWord, 
			changeOriginLang, 
			changeRootWord, 
			changeCategory, 
			changeSubCategory, 
			changeConnotation, 
			changeDefinition,
			changeExample,
			clearFormProps,
			showValue_Word,
			showValue_OriginLang,
			showValue_RootWord,
			showValue_PartOfSpeech,
			showValue_SubCategory,
			showValue_Connotation,
			showValue_Definition,
		  showValue_Example } = this.props
		
		if(clearFormProps === true){ this.clearOnSave() }

		return(
			<React.Fragment>
				<div className='new-word-form flex-column'>
					<div className='form-top-section flex-row' id='form-top-section-id'>
						<div className='word-column flex-column'>
							<span className='subheading-text'>Word: </span>
							<input className='enter-word-form'
								onInput={changeNewWord}
								onChange={changeNewWord} 
								value={showValue_Word}/></div>
						<div className='etymology-column flex-column'>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Language of origin: </span>
								<input className='enter-word-form' 
									onInput={changeOriginLang}  
									value={showValue_OriginLang}
									list='originlang' />
								<datalist id='originlang'>
									{originLanguages.map(language => (
										<option key={`${language}`} 
											value={`${language}`} /> ))}</datalist></div>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Root word: </span>
								<input className='enter-word-form' 
									onInput={changeRootWord}  
									value={showValue_RootWord}/></div></div>
						<div className='grammar-column flex-column'>
							<div className='inputfield flex-column'> 
								<span className='subheading-text'>Part of speech: </span>
								<input className='enter-word-form'  
									onInput={changeCategory}  
									onChange={this.showSubCategoryInput}
									value={showValue_PartOfSpeech}
									list='partofspeech'/>
								<datalist id='partofspeech'>
									{partsOfSpeech.map(part => (
										<option key={`${part}`} 
											value={`${part}`} /> ))}</datalist></div>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Subcategory: </span>
								<input className='enter-word-form' 
									onInput={changeSubCategory}  
									value={showValue_SubCategory}
									list={`${this.state.enteredPartOfSpeech}`}/>
								<datalist id='Noun'>
									{subTypes.Nouns.map(type => (
										<option key={`${type}`} 
											value={`${type}`}></option>))}</datalist>	
								<datalist id='Adjective'>
									{subTypes.Adjective.map(type => (
										<option key={`${type}`}
										 	value={`${type}`}></option>))}</datalist>	
								<datalist id='Adverb'>
									{subTypes.Adverb.map(type => (
										<option key={`${type}`} 
											value={`${type}`}></option>))}</datalist>
								<datalist id='Verb'>
									{subTypes.Verb.map(type => (
										<option key={`${type}`} 
											value={`${type}`}></option>))}</datalist></div>
							<div className='inputfield flex-column'>
								<span className='subheading-text'>Connotation: </span>
								<input className='enter-word-form' 
									onInput={changeConnotation}  
									value={showValue_Connotation}
									list='connotation' />
								<datalist id='connotation'>
									{connotation.map(type => (
										<option key={`${type}`} 
											value={`${type}`} /> ))}</datalist></div></div></div>
					<div className='form-bottom-section'>
						<p className='subheading-text'>Meaning: </p>
						<textarea className='meaning-textarea' 
							onInput={changeDefinition} 
							value={showValue_Definition}/>
						<p className='subheading-text'>Example sentences: </p>
						<textarea className='example-sentence-textarea'
							onInput={changeExample}
							value={showValue_Example } /></div></div></React.Fragment>)}}

export default NewWordFormComponent;