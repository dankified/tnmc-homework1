// Dependencies
const http = require('http');
const url = require('url');
const fs = require('fs');
//const routeHandler = require('./routeHandler');

// Create http server
const server = http.createServer(function(req, res) {
	let route = url.parse(req.url, true).pathname.replace(/^\/+|\/+#/g,'');
	console.log('route', route);
	res.setHeader('Content-Type', 'application/json');
	res.writeHead(200);
	res.end(JSON.stringify({'done': true}));
	//(url.parse)
});

// Open port 3000 for server to listen
server.listen(3000, () => console.log(`Server listening on port 3000`));

/* TODO
* 1-Create routeHandler module
* 2-RouteHandler should have a switch statement that will return the handler for that particular route
* 3-By default it will return a route not found handler
* 4-Write the hello route manager module.
* 5-Write a switch statement that based on the method will execute different route handlers.
*/