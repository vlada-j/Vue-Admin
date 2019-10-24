// ===============================================================================================
// fetch wrapper
// ===============================================================================================
function http(url, data, options) {
	options = Object.assign({}, defaultOptions, options);
	options.method = options.method.toLowerCase();

	if (options.method === 'get' || options.method === 'delete') {
		url += '?' + paramsToQuery(data);
	}

	if (options.method === 'post' || options.method === 'put') {
		if ( options.headers && options.headers['Content-Type'] === 'application/json' ) {
			options.body = JSON.stringify(data);
		} else {
			options.body = data;
		}
	}

	interceptorsBefore.forEach(before => options = before(options) );
	console.log('Sending Fatch', options);
	return fetch(url, options)
	//	.then(res => res.json())
		.then(res => {
			interceptorsAfter.forEach(after => res = after(res) );
			return res;
		});
}



// ===============================================================================================
// default options
// ===============================================================================================
const defaultOptions = {
	method: 'post',
	cache: "no-cache",
	mode: 'no-cors', // no-cors, cors, *same-origin
//	credentials: 'same-origin', // include, *same-origin, omit
	headers: { "Content-Type": "application/json" }
// 	headers: new Headers(
// 		{"Content-Type": "application/json",
// 			"Accept":"application/json"}
// 	)
};


// Formation parameters to query
function paramsToQuery(data) {
	data = data || {};
	return Object
		.keys(data)
		.map( key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) )
		.join('&');
}


//--------------------------------------------------------------------------------------------------


function setShortcut(method) {
	return function(url, data, options) {
		options = options || {};
		options.method = method;
		return http(url, data, options);
	};
}


let interceptorsBefore = [];
let interceptorsAfter = [];


//--------------------------------------------------------------------------------------------------


http.get = setShortcut('GET');

http.post = setShortcut('POST');

http.put = setShortcut('PUT');

http.delete = setShortcut('DELETE');

http.interceptorAdd = function(ic) {
	(ic.before instanceof Function) && interceptorsBefore.push(ic.before);
	(ic.after instanceof Function) && interceptorsAfter.push(ic.after);
};

http.interceptorRemove = function(ic) {
	let ib = interceptorsBefore.indexOf(ic.before);
	let ia = interceptorsAfter.indexOf(ic.after);
	(ib > 0) && interceptorsBefore.slice(ib, 1);
	(ia > 0) && interceptorsAfter.slice(ia, 1);
};


//--------------------------------------------------------------------------------------------------


// Make plugin for Vue
let { ...methods } = http;

http.plugin = {
	install: function(Vue) {
		Vue.prototype.$http = new Vue({
			methods: methods
		});
	}
};


export default http;