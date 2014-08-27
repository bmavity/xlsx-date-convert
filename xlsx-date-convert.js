var moment = require('moment')

module.exports = function convertToXlsxDate(dateString) {
	return moment.utc(dateString).diff(moment.utc([1900, 0, 1]), 'days') + 2
}
