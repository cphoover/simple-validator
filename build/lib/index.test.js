'use strict';

var _2 = require('./');

var _3 = _interopRequireDefault(_2);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('asdf', _lodash2.default.isInteger);

describe('AWSElasticSearchMixin', function suite() {
	it('ValidationError has a default message', function () {
		var ValidationError = _3.default.ValidationError;
		try {
			throw new ValidationError();
		} catch (e) {
			(0, _assert2.default)(e.message === 'Invalid data provided as input');
		}
	});

	it('can validate some things', function () {
		_assert2.default.doesNotThrow(function () {
			var a = { b: 1 };
			_3.default.optional(a, 'b', _lodash2.default.isInteger);
		});
		_assert2.default.doesNotThrow(function () {
			var a = { c: 1 };
			_3.default.optional(a, 'b', _lodash2.default.isString);
		});

		_assert2.default.throws(function () {
			var a = { b: 1 };
			_3.default.optional(a, 'b', _lodash2.default.isString);
		});

		_assert2.default.throws(function () {
			var a = { 'b': 2 };
			_3.default.required(a, 'b', _lodash2.default.isString);
		});

		_assert2.default.throws(function () {
			var a = { 'c': 1234 };
			_3.default.required(a, 'c', _lodash2.default.isString);
		});

		_assert2.default.doesNotThrow(function () {
			var a = { 'c': 'asdf' };
			_3.default.required(a, 'c', _lodash2.default.isString);
		});
	});
});