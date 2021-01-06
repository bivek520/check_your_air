import React from 'react';

function evalAQI(aqi) {
	if (aqi >= 0 && aqi <= 50) return { condition: 'Good', color: 'Green' };
	else if (aqi >= 51 && aqi <= 100) return { condition: 'Moderate', color: 'Yellow' };
	else if (aqi >= 101 && aqi <= 150) return { condition: 'Unhealthy for Sensitive Groups', color: 'Orange' };
	else if (aqi >= 151 && aqi <= 200) return { condition: 'Unhealthy', color: 'Red' };
	else if (aqi >= 201 && aqi <= 300) return { condition: 'Very Unhealthy', color: 'Purple' };
	else if (aqi >= 301 && aqi <= 500) return { condition: 'Hazardous', color: 'Maroon' };

	return null;
}
const Result = (props) => {
	const { value } = props;
	console.log(value);
	if (value) {
		const { city, state, country } = value;
		const { aqius } = value.current.pollution;
		const quality = evalAQI(aqius);
		return (
			<div className='card text-center w-60'>
				<div className='card-header'>
					{city}, {state}, {country}
				</div>
				<div className='card-body'>
					<h5 className='card-title'>AQI: {aqius} US AQI</h5>
					<p className='card-text'>Air Quality: {quality.condition}</p>
				</div>
			</div>
		);
	}
	return null;
};

export default Result;
