# simple-validation

Usage

```
import validate from 'simple-validation';

validate.optional(obj, 'fieldName', _.isString); // will pass if field doesn't exist or is string
validate.required(obj, 'fieldName', _.isString); // will pass if field is string

```
on failure `validate.ValidationError` will be thrown
