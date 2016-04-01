'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValidationError = function (_Error) {
	_inherits(ValidationError, _Error);

	function ValidationError(message) {
		_classCallCheck(this, ValidationError);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ValidationError).call(this, message));

		_this.name = _this.constructor.name;
		_this.message = message || 'Invalid data provided as input';
		_this.stack = new Error().stack;
		return _this;
	}

	return ValidationError;
}(Error);

var api = {
	optional: function optional(_repo, field, _validator) {
		if (_repo[field] && !_validator(_repo[field])) {
			throw new ValidationError('optional field ' + field + ' must be valid');
		}
	},
	required: function required(_repo, field, _validator) {
		if (!_validator(_repo[field])) {
			throw new ValidationError('required field ' + field + ' must be valid');
		}
	},
	ValidationError: ValidationError
};

exports.default = api;