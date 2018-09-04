/**
 * @file This file has simple utilities
 * @author Thiago Romano 
 */

/**
 * Orders by price ascending
 */
module.exports.sortOrder = function (a, b) {
	return a[0] - b[0]
}

/**
 * Orders by price descending
 */
module.exports.sortOrderDesc = function (a, b) {
	return b[0] - a[0]
}


/**
 * Extract the querystring params
 * @param {string} url
 * 
 * @returns {Object.Params}
 *  
 */
module.exports.getQueryStringParams = function (url) {
	var regex = /[?&]([^=#]+)=([^&#]*)/g

	var params = {},
		match

	while ((match = regex.exec(url))) {
		if (params[match[1]]) {
			if (!Array.isArray(params[match[1]]))
				params[match[1]] = [params[match[1]]]

			params[match[1]].push(decodeURIComponent(match[2]))
		}
		else
			params[match[1]] = decodeURIComponent(match[2])
	}
	return params
}