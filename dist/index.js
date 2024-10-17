"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateField = validateField;
exports.validateForm = validateForm;
function validateField(value, rules) {
  var errors = [];

  // Check if the field is required and is empty
  if (rules.required && !value) {
    errors.push(rules.messages.required); // Use the custom message
  }

  // Check minimum length
  if (rules.minLength && value.length < rules.minLength) {
    errors.push(rules.messages.minLength); // Use the custom message
  }

  // Check maximum length
  if (rules.maxLength && value.length > rules.maxLength) {
    errors.push(rules.messages.maxLength); // Use the custom message
  }

  // Check the pattern
  if (rules.pattern && !rules.pattern.test(value)) {
    errors.push(rules.messages.pattern); // Use the custom message
  }
  return errors.length > 0 ? errors : null; // Return errors or null
}
function validateForm(fields) {
  var fieldErrors = {};
  for (var fieldName in fields) {
    var _fields$fieldName = fields[fieldName],
      value = _fields$fieldName.value,
      rules = _fields$fieldName.rules;
    var errors = validateField(value, rules);
    if (errors) {
      fieldErrors[fieldName] = errors;
    }
  }
  return Object.keys(fieldErrors).length > 0 ? fieldErrors : null; // Return errors or null
}