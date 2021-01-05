import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class LocationForm extends Form {
	state = {
		data: { location: '' },
		errors: {},
	};

	schema = {
		location: Joi.string().required().label('Location'),
	};
	doSubmit = () => {
		// Call the server
		console.log('Submitted');
	};
	render() {
		return (
			<div>
				<h1>Check Your Air quality</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('location', 'Location')}
					{this.renderButton('Check')}
				</form>
			</div>
		);
	}
}

export default LocationForm;
