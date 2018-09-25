// Dependencies
const http = require('http');
const url = require('url');
const routeHandlerManager = require('./routeHandlerManager');
const notFoundHandler = require('./routeHandlers/notFoundHandler');

// Create http server
const server = http.createServer(function(req, res) {
	let routeUrl = url.parse(req.url, true).pathname.replace(/^\/+|\/+#/g,'');
	let method = req.method.toLowerCase();
	let handler = routeHandlerManager(routeUrl)(method) || notFoundHandler();
	handler(req, res);
});

// Open port 3000 for server to listen
server.listen(3000, () => console.log(`Server listening on port 3000`));