/**
* Parses a url to extract the query object
* @param {string} url
*/

function queryParser(url) {
	let queryStartIndex = url.indexOf('?');
	let query = url.substring(queryStartIndex+1);
	let queryArray = query.split('&');
	let queryObj = {};
	queryArray.forEach((el) => {
		el = el.split('=');
		queryObj[el[0]] = el[1];
	});
	return queryObj;
}

module.exports = queryParser;