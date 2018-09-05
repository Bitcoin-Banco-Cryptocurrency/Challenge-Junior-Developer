/**
 * inside this file we can organize our controller exporting functions to be accesible inside the route
 */

const database = require('../../mock/database');
const Utils = require('../../utils');

exports.get_bids = async (req, res, next) => {
	const { order_price, amount } = req.query;

	try {
		const { bids } = await database();

		let response = bids;

		if (amount) {
			response = response.filter(Utils.findBy('amount', +amount));
		}

		if (order_price) {
			if (order_price === 'asc') {
				response = response.concat().sort(Utils.sortAsc); // concat was used to not mutate the original data
			} else if (order_price === 'desc') {
				response = response.concat().sort(Utils.sortDesc); // concat was used to not mutate the original data
			}
		}

		res.send(response);
	} catch (err) {
		next(err);
	}
};