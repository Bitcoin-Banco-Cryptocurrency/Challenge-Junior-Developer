/**
 * @file This is the entrypoint for the application
 * @author Thiago Romano 
 */


var { initDatasource } = require('./src/datasource')
var { server } = require('./src/server')

try { initDatasource() }
catch (e) {
	console.error(e.toString())
	console.error('Error when initiating datasource, exiting...')
	process.exit(1)
}

server.listen(process.env.PORT || 8080)
console.log(`Server running at http://127.0.0.1:${process.env.PORT || 8080}/`)
