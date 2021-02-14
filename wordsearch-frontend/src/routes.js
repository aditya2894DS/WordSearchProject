import React from 'react';
import { Route } from 'react-router-dom';

import PublicDashboard from './components/Pages/publicDashboard';
import MemberDashboard from './components/Pages/memberDashboard';
import ViewWordsByLetter from './components/Pages/viewWordsByLetter';


function Routes(){
	return(	
		<React.Fragment>
			<Route path='/' component={PublicDashboard} exact />
			<Route path='/memberdashboard/' component={MemberDashboard} exact />
			<Route path='/memberdashboard/viewwordsbyletter/:letter' component={ViewWordsByLetter} exact />
		</React.Fragment>
	)
}

export default Routes;