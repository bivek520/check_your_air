import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LocationForm from './component/locationForm';

import './App.css';
function App() {
	return (
		<React.Fragment>
			<div className='container'>
				<Route path='/check_your_air' component={LocationForm} />
				{/* <Redirect from='/' to='/check_your_air' /> */}
			</div>
		</React.Fragment>
	);
}

export default App;
