import SETTINGS from '../SETTINGS';
import http from '../shared/http';


const URL = SETTINGS.API_ROOT + 'products/';


export default {
	getAll,
	add
};



function getAll() {
	return http.get(URL)
		.catch(err => console.log('ERR', err) );
}



function add(params) {
	return http.post(URL, params)
		.catch(err => console.log('ERR', err) );
}