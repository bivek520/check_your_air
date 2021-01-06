import http from './httpService';
import { apiUrl, apiKey } from '../config.json';

const apiEndPoint = apiUrl + 'nearest_city?key=' + apiKey;

export function getNearestCity() {
	return http.get(apiEndPoint);
}

export function getCity(cityObj) {
	const { name: city, state } = cityObj;
	return http.get(apiUrl + `city?city=${city}&state=${state}&country=Nepal&key=` + apiKey);
}

export function getRanking() {
	return http.get(apiUrl + 'city_ranking?key=' + apiKey);
}
