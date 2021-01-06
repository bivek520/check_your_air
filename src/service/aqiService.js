import http from './httpService';
import { apiUrl, apiKey } from '../config.json';

const apiEndPoint = apiUrl + 'nearest_city?key=' + apiKey;
//api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key={{YOUR_API_KEY}}

export function getNearestCity() {
	return http.get(apiEndPoint);
}
// `${apiEndpoint}/${id}`;
export function getCity(cityObj) {
	const { name: city, state } = cityObj;
	console.log(city, state);
	return http.get(apiUrl + `city?city=${city}&state=${state}&country=Nepal&key=` + apiKey);
}

export function getRanking() {
	return http.get(apiUrl + 'city_ranking?key=' + apiKey);
}
