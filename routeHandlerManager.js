const helloHandler = require('./routeHandlers/helloHandler');
const notFoundHandler = require('./routeHandlers/notFoundHandler');

/**
 * Takes a route as an argument and returns one of the defined routeHandlers.
 * It will return the notFoundHandler if the route does not match one of our defined handlers
 * @param {string} route 
 */
module.exports = function routeHandler(route) {
	switch (route) {
		case 'hello':
			return helloHandler;
		default:
			return notFoundHandler;
	}
}