const url = require('url');

function handler(req, res) {
	let routeUrl = url.parse(req.url, true).pathname.replace(/^\/+|\/+#/g,'');
	let method = req.method.toLowerCase();
	res.setHeader('Content-Type', 'application/json');
	res.writeHead(404);
	res.end(JSON.stringify({url: routeUrl, method}));
}

module.exports = handler;