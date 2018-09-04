/**
 * @file Manages the datasource, all functions are async to simulate an external database
 * @author Thiago Romano 
 */

const { sortOrder, sortOrderDesc } = require('./utils')

const fs = require('fs')
const util = require('util')
//All data will be loaded onto this variable.
var data = []


// This function is on the start of the application to create the connection with
// the database (in this case, with the OrderBook.json file.).

/** 
 * Initiates Datasource 
 * @throws {FileNotFound}
*/
module.exports.initDatasource = async function () {
	console.log('Starting initiating datasouce')

	const readfile = util.promisify(fs.readFile)

	var orderBook = await readfile('./OrderBook.json')

	data = JSON.parse(orderBook)

	console.log('Successfully initiated datasource')
	return
}



/* 
 * This code could be using binary search for optimization, but because future work would trasform
 * the datasource to an external database, the searcg processing could be done on the database
*/
/** 
 * Searches for bids
 * @param {string|Array.number} bids - bids to search for
 * @param {string} sort - 'asc' or 'desc' or undefined
 * @returns {Array.bids}
 */
module.exports.searchBid = async function (bids, sort) {
	if (typeof bids === 'string')
		bids = [bids]
	var res = data.bids

	bids = bids.map(Number.parseFloat)


	res = res.filter(bid => includeOrder(bids, bid))
	if (sort === 'asc') {
		res = res.sort(sortOrder)
	}
	if (sort === 'desc') {
		res = res.sort(sortOrderDesc)
	}

	return res
}

/** 
 * Searches for asks
 * @param {string|Array.number} asks - asks to search for
 * @param {string} sort - 'asc' or 'desc' or undefined
 * @returns {Array.asks}
 */
module.exports.searchAsk = async function (asks, sort) {
	if (typeof asks === 'string')
		asks = [asks]
	var res = data.asks

	asks = asks.map(Number.parseFloat)


	res = res.filter(ask => includeOrder(asks, ask))
	if (sort === 'asc') {
		res = res.sort(sortOrder)
	}
	if (sort === 'desc') {
		res = res.sort(sortOrderDesc)
	}

	return res
}



/**
 * Returns true if the order is inside the orders array
 * @param {Array.Order} orders 
 * @param {Order} order
 * 
 * @returns {boolean} 
 */
function includeOrder (orders, order) {
	return orders.some(toCheck => toCheck === order[1])
}