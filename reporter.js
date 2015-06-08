// This file is part of pa11y-reporter-1.0-json.
//
// pa11y-reporter-1.0-json is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// pa11y-reporter-1.0-json is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with pa11y-reporter-1.0-json.  If not, see <http://www.gnu.org/licenses/>.

'use strict';

module.exports = {
	begin: emptyFunction,
	error: reportError,
	debug: emptyFunction,
	info: emptyFunction,
	results: reportResults
};

function emptyFunction () {}

function reportError (message) {
	console.error(message);
}

function reportResults (results) {
	var output = {
		isPerfect: (results.length === 0),
		count: {
			total: results.length,
			error: results.filter(buildTypeFilter('error')).length,
			warning: results.filter(buildTypeFilter('warning')).length,
			notice: results.filter(buildTypeFilter('notice')).length
		},
		results: results.map(toLegacyResult)
	};
	console.log(JSON.stringify(output));
}

function buildTypeFilter (type) {
	return function (result) {
		return (result.type === type);
	};
}

function toLegacyResult (result) {
	return {
		code: result.code,
		message: result.message,
		type: result.type,
		html: result.context
	};
}
