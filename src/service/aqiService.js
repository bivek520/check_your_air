import http from './httpService';
import { apiUrl, apiKey } from '../config.json';

const apiEndPoint = apiUrl + 'nearest_city?key=' + apiKey;

export function getCity() {
	return http.get(apiEndPoint);
}
