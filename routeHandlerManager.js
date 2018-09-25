const helloHandler = require('./routeHandlers/helloHandler');
const notFoundHandler = require('./routeHandlers/notFoundHandler');

module.exports = function routeHandler(route) {
	switch (route) {
		case 'hello':
			return helloHandler;
		default:
			return null;
	}
}