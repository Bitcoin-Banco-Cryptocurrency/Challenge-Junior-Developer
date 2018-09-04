
var assert = require('assert')
var request = require('request-promise-native')
var { server } = require('../src/server')
var port = process.env.PORT || 8080

describe('Server', function () {

	before(function () {
		server.listen(port)
	})
	after(function () {
		server.close()
	})

	describe('Search Bids', function () {

		var searchUrl = `http://localhost:${port}/bids?`

		it('searches a specific bid', function (done) {
			request(searchUrl + 'bid=2.208832').then((response => {
				assert.deepStrictEqual(JSON.parse(response), [[5000, 2.208832]])
				done()
			})).catch(done)
		})


		it('searches some bids ascending', function (done) {
			request(searchUrl + 'bid=2.208832&bid=0.16966000&sort=asc').then((response => {
				console.log(response)
				assert.deepStrictEqual(JSON.parse(response), [[4000, 0.16966000], [5000, 2.208832]])
				done()
			})).catch(done)
		})
		it('searches some bids descending', function (done) {
			request(searchUrl + 'bid=2.208832&bid=0.009&bid=0.16966000&sort=desc').then((response => {
				assert.deepStrictEqual(JSON.parse(response), [[12088, 0.009],
					[10200, 0.009], [7050, 0.009], [5000, 2.208832], [4000, 0.16966], [3000, 0.009], [1450, 0.009], [68.36, 0.009], [9.29, 0.009]])
				done()
			})).catch(done)
		})
	})


	describe('Search Asks', function () {

		var searchUrl = `http://localhost:${port}/asks?`

		it('searches a specific ask', function (done) {
			request(searchUrl + 'ask=0.02213000').then((response => {
				assert.deepStrictEqual(JSON.parse(response), [[47000, 0.02213000]])
				done()
			})).catch(done)
		})


		it('searches some asks ascending', function (done) {
			request(searchUrl + 'ask=0.24114000&ask=0.00375211&sort=asc').then((response => {
				assert.deepStrictEqual(JSON.parse(response), [[47800, 0.24114], [48090.06, 0.00375211],])
				done()
			})).catch(done)
		})
		it('searches some asks descending', function (done) {
			request(searchUrl + 'ask=2.208832&ask=0.009&ask=0.00107197&sort=desc').then((response => {
				assert.deepStrictEqual(JSON.parse(response), [[62200, 0.009], [48990.1, 0.00107197]])
				done()
			})).catch(done)
		})
	})

	describe('Other', function () {

		var url = `http://localhost:${port}/`

		it('Gives 404 to random url', function (done) {
			request({
				method: 'GET',
				resolveWithFullResponse: true,
				uri: url + 'awecawec'
			}).then(() => {
				done(new Error('Didn\'t throw error, when it should'))
			}).catch(err => {
				assert(err.response.statusCode, 404)
				done()
			})
		})
	})
})
