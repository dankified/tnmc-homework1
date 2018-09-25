const queryParser = require('../utils/queryParser');

function setHeaderAndStatus(res) {
	res.setHeader('Content-Type', 'application/json');
	res.writeHead(200);
}

function get(req, res) {
	setHeaderAndStatus(res);
	res.end(JSON.stringify({message: 'get'}));
}

function post(req, res) {
	let queryObj = queryParser(req.url);
	let message = 'Hello there ';
	message += queryObj.name ? queryObj.name+'!' : 'user!'; 
	setHeaderAndStatus(res);
	res.end(JSON.stringify({message}));
}

function put(req, res) {
	setHeaderAndStatus(res);
	res.end(JSON.stringify({message: 'put'}));
}

function destroy(req, res) {
	setHeaderAndStatus(res);
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