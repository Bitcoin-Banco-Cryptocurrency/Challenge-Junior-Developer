const data = require('./data.json');

const database = () => {
	return new Promise(resolve => {
		resolve(data);
	}, 3000);
}

module.exports = database;