const url = require('url');
const notFoundHandler = require('./notFoundHandler');

function setHeaderAndStatus(res) {
	res.setHeader('Content-Type', 'application/json');
	res.writeHead(200);
}

function get(req, res) {
	setHeaderAndStatus(res);
	res.end(JSON.stringify({done: true}));
}

function post(req, res) {
	setHeaderAndStatus(res);
	res.end(JSON.stringify({message: 'Hello there!'}));
}

function put(req, res) {
	setHeaderAndStatus(res);
	res.end(JSON.stringify({message: 'Perform a put request'}));
}

function destroy(req, res) {
	setHeaderAndStatus(res);
	res.end(JSON.stringify({message: 'Perform a delete request'}));
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
			return notFoundHandler;
	}
}

module.exports = helloHandler;