var assert = require('assert')
var datasource = require('../src/datasource')


describe('Datasource', function () {
	describe('Initialization', function () {
		it('initializes without error', function (done) {
			datasource.initDatasource()
				.then(done)
				.catch((e) => {
					done(e)
				})
		})
	})


	describe('Bid Search', function () {
		it('searches bid by specific price', function (done) {
			datasource.searchBid('2.208832')
				.then((res) => {
					assert.deepStrictEqual(res, [[5000, 2.208832]])
					done()
				})
				.catch((e) => {
					done(e)
				})
		})


		it('searches bids by multiple price and sort ascending', function (done) {
			datasource.searchBid(['0.16966000', '2.208832'], 'asc')
				.then((res) => {
					assert.deepStrictEqual(res, [[4000, 0.16966000], [5000, 2.208832]])
					done()
				})
				.catch((e) => {
					done(e)
				})
		})


		it('searches bids by multiple price and sort descending', function (done) {
			datasource.searchBid(['0.16966000', '2.208832'], 'desc')
				.then((res) => {
					assert.deepStrictEqual(res, [[5000, 2.208832], [4000, 0.16966000]])
					done()
				})
				.catch((e) => {
					done(e)
				})
		})


	})
})
