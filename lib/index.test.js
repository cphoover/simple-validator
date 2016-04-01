import validate from './';
import assert from 'assert';
import _ from 'lodash';

describe('AWSElasticSearchMixin', function suite() {
	it('ValidationError has a default message', function () {
		const ValidationError = validate.ValidationError;
		try {
			throw new ValidationError();
		} catch (e) {
			assert(e.message === 'Invalid data provided as input');
		}
	});

	it('ValidationError is an instanceof ValidationError and an instanceof Error', function () {
		const ValidationError = validate.ValidationError;
		try {
			throw new ValidationError();
		} catch (e) {
			assert(e instanceof ValidationError, 'e instanceof validate.ValidationError');
			assert(e instanceof Error, 'e instanceof Error');
		}
	});

	it('can validate some things', function () {
		assert.doesNotThrow(() => {
			const a = {b : 1};
			validate.optional(a, 'b', _.isInteger);
		});
		assert.doesNotThrow(() => {
			const a = {c : 1};
			validate.optional(a, 'b', _.isString);
		});

		assert.throws(() => {
			const a = {b : 1};
			validate.optional(a, 'b', _.isString);
		});

		assert.throws(() => {
			const a = {'b' : 2};
			validate.required(a, 'b', _.isString);
		});

		assert.throws(() => {
			const a = {'c' : 1234};
			validate.required(a, 'c', _.isString);
		});

		assert.doesNotThrow(() => {
			const a = {'c' : 0};
			validate.required(a, 'c', _.isInteger);
		});

		assert.throws(() => {
			const a = {'c' : 0};
			validate.optional(a, 'c', _.isString);
		});


		assert.doesNotThrow(() => {
			const a = {'c':'asdf'};
			validate.required(a, 'c', _.isString);
		});

	});

});
