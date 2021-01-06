import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { getCity, getRanking } from '../service/aqiService';
import Result from './result';
class LocationForm extends Form {
	state = {
		data: { location: '' },
		locations: [
			{ _id: '1', name: 'Bhaktapur', state: 'Central Region' },
			{ _id: '2', name: 'Bharatpur', state: 'Central Region' },
			{ _id: '3', name: 'Dhulikhel', state: 'Central Region' },
			{ _id: '4', name: 'Kathmandu', state: 'Central Region' },
			{ _id: '5', name: 'Kirtipur', state: 'Central Region' },
			{ _id: '6', name: 'Patan', state: 'Central Region' },
			{ _id: '7', name: 'Dhankuta', state: 'Eastern Region' },
			{ _id: '8', name: 'Nepalgunj', state: 'Mid Western' },
			{ _id: '9', name: 'Tulsipur', state: 'Mid Western' },
			{ _id: '10', name: 'Pokhara', state: 'Western Region' },
		],

		errors: {},
	};

	schema = {
		location: Joi.string().label('Location'),
	};

	doSubmit = async () => {
		// Call the server
		const { locations, data } = this.state;
		const loc = locations.filter((m) => m._id === data.location);
		console.log(loc[0], 'doSubmitt');
		const result = await getCity(loc[0]);
		this.setState({ result: result.data.data });
		// console.log('Submitted', this.state.data.location, this.state.aqius, result.data.data.log);
	};
	render() {
		const { result, locations } = this.state;
		console.log(getRanking());
		return (
			<div className='container'>
				<h1 className='head'>Check Your Air Quality</h1>
				<h1 className='head_2'>------------------X-------------------</h1>

				<div className='row'>
					<div className='col'>
						<form onSubmit={this.handleSubmit}>
							{/* {this.renderInput('location', 'Location')} */}
							{this.renderSelect('location', 'Location', locations)}
							{this.renderButton('Check')}
						</form>
						<Result value={result} />
					</div>
				</div>
			</div>
		);
	}
}

export default LocationForm;
