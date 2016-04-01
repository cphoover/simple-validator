class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
		this.message = message || 'Invalid data provided as input';
		this.stack = (new Error()).stack;
	}
}

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
