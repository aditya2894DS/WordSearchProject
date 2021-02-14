import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as wordActions from '../../redux_components/actions/wordActions/wordActionCreator';

export default function LetterSectionHeading(props){
	let dispatch = useDispatch()	
	let [triggerByLetterState, setTriggerByLetterState] = useState(false)
	useEffect(() => { 
		if(triggerByLetterState){	props.getLetterData(triggerByLetterState)	}
	}, [triggerByLetterState])

	const setTriggerByLetterComponent = () => { setTriggerByLetterState(true) }

	return <h2 onClick={() => { 
		dispatch(wordActions.initiateFetchWordByLetter(props.letter)) 
		setTriggerByLetterComponent()}}>{props.letter}</h2>
}	

