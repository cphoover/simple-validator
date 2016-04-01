// babel doesn't support extending natives
function ValidationError(message) {
	this.name = 'ValidationError';
	this.message = message || 'Invalid data provided as input';
	this.stack = (new Error()).stack;
}
ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

const api = {
	optional : (_repo, field, _validator) => {
		if (_repo[field] !== undefined && (!_validator(_repo[field]))) {
			throw new ValidationError(`optional field ${field} must be valid`);
		}
	},
	required : (_repo, field, _validator) => {
		if (!_validator(_repo[field])) {
			throw new ValidationError(`required field ${field} must be valid`);
		}
	},
	ValidationError
};

export default api;
