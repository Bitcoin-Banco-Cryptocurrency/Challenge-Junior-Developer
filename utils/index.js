class Utils {
	/**
	 * @param {*} a
	 * @param {*} b
	 */
	static sortAsc(a, b) {
		return a[0] - b[0];
	}

	/**
	 * @param {*} a
	 * @param {*} b
	 */
	static sortDesc(a, b) {
		return b[0] - a[0];
	}

	/**
	 * @param {String} attribute
	 * @param {Number} value
	 */
	static findBy(attribute, value) {
		const index = attribute === 'amount' ? 1 : 0;

		return (element) => element[index] === value;
	}
}

module.exports = Utils;