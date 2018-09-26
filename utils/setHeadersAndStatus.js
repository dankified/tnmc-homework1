/**
* Sets status code and headers on the response
* @param {Object} res The http response
* @param {number} status The status code to be assigned to the response
* @param {Object[]} headers Headers to be set on the response {type: string, value: string}
*/

function setHeadersAndStatus(res, status, ...headers) {
	headers.forEach(header => res.setHeader(header.type, header.value));
	res.writeHead(status);
}

module.exports = setHeadersAndStatus;