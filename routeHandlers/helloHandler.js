const queryParser = require('../utils/queryParser');
const setHeadersAndStatus = require('../utils/setHeadersAndStatus');


function get(req, res) {
	setHeadersAndStatus(res, 200, {type:'Content-type', value:'application/json'});
	res.end(JSON.stringify({message: 'get'}));
}

function post(req, res) {
	let queryObj = queryParser(req.url);
	let message = 'Hello there ';
	message += queryObj.name ? queryObj.name+'!' : 'user!'; 
	setHeadersAndStatus(res, 200, {type:'Content-type', value: 'application/json'});
	res.end(JSON.stringify({message}));
}

function put(req, res) {
	setHeadersAndStatus(res, 200, {type:'Content-type', value: 'application/json'});
	res.end(JSON.stringify({message: 'put'}));
}

function destroy(req, res) {
	setHeadersAndStatus(res, 200, {type:'Content-type', value: 'application/json'});
	res.end(JSON.stringify({message: 'delete'}));
}

function helloHandler(method) {
	switch(method) {
		case 'get':
			return get;
		case 'post':
			return post;
		case 'put':
			return put;
		case 'delete':
			return destroy;
		default:
			return null;
	}
}

module.exports = helloHandler;