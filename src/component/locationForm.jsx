import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { getCity } from '../service/aqiService';
import Result from './result';
class LocationForm extends Form {
	state = {
		data: { location: '' },
		errors: {},
	};

	schema = {
		location: Joi.string().required().label('Location'),
	};

	doSubmit = async () => {
		// Call the server
		const result = await getCity();
		this.setState({ result: result.data.data });
		console.log('Submitted', this.state.data.location, this.state.aqius, result.data.data.log);
	};
	render() {
		const { result, location } = this.state;
		console.log(result);
		return (
			<div>
				<h1 className='head'>Check Your Air quality</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('location', 'Location')}
					{this.renderButton('Check')}
				</form>
				<Result value={result} />
			</div>
		);
	}
}

export default LocationForm;
