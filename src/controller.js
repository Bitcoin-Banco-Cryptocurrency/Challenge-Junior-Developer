/**
 * @file Is the controller for the routes, this file alse decodes the url query string
 * @author Thiago Romano 
 */


var { searchBid, searchAsk } = require('./datasource')
var { getQueryStringParams } = require('./utils')

/**
 * Reponds the request
 * @param {string} url The URL string 
 * @param {ResponseObject} response 
 */
module.exports.controller = async function (url, response) {
	try {
		var params = getQueryStringParams(url)

		var res

		// Search bids endpoint
		if (/^\/bids/.test(url)) {

			res = await searchBid(params.bid, params.sort)

			response.writeHead(200, { 'Content-Type': 'application/json' })
			response.end(JSON.stringify(res))
		}
		// Search asks endpoint
		if (/^\/asks/.test(url)) {

			res = await searchAsk(params.ask, params.sort)

			response.writeHead(200, { 'Content-Type': 'application/json' })
			response.end(JSON.stringify(res))
		}
		else {
			response.writeHead(404, { 'Content-Type': 'application/json' })
			response.end(JSON.stringify('Page not found'))
		}
	}
	catch (e) /* istanbul ignore next */ {
		console.error(`Request ${url} has returned the following error`, e)
		response.writeHead(500, { 'Content-Type': 'application/json' })
		response.end(JSON.stringify('Erro'))
	}
}
