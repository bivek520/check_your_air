import React, { Component } from 'react';

function evalAQI(aqi) {
	if (aqi >= 0 && aqi <= 50) return { condition: 'Good', color: 'Green' };
	// 51 to 100	Moderate	Yellow
	// 101 to 150	Unhealthy for Sensitive Groups	Orange
	// 151 to 200	Unhealthy	Red
	// 201 to 300	Very Unhealthy	Purple
	// 301 to 500	Hazardous	Maroon

	return 'hello';
}
const Result = (props) => {
	const { value } = props;
	console.log(value);
	if (value) {
		const { city, state, country } = value;
		const { aqius } = value.current.pollution;
		const quality = evalAQI(aqius);
		return (
			<div className='card text-center w-75'>
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
