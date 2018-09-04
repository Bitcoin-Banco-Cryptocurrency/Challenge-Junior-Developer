/**
 * @file This is the server for the application
 * @author Thiago Romano 
 */


var http = require('http')
var { controller } = require('./controller')

module.exports.server = http.createServer(function (request, response) {
	console.log('request ', request.url)
	controller(request.url, response)
})