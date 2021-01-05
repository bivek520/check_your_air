import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LocationForm from './component/locationForm';

import './App.css';
function App() {
	return (
		<React.Fragment>
			<Switch>
				<Route path='/check_your_air' component={LocationForm} />
				<Redirect from='/' exact to='/check_your_air' />
			</Switch>
		</React.Fragment>
	);
}

export default App;
