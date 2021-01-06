import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LocationForm from './component/locationForm';

import './App.css';
function App() {
	return (
		<Switch>
			<Route path='/check_your_air' component={LocationForm} />
			{/* <Redirect from='/' to='/check_your_air' />  */}
		</Switch>
	);
}

export default App;
