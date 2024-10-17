function validateField(value, rules) {
  let errors = [];

  if (rules.required && !value) {
    errors.push(rules.messages?.required || "This field is required.");
  }

  if (rules.minLength && value.length < rules.minLength) {
    errors.push(
      rules.messages?.minLength ||
        `This field must be at least ${rules.minLength} characters long.`
    );
  }

  if (rules.maxLength && value.length > rules.maxLength) {
    errors.push(
      rules.messages?.maxLength ||
        `This field must not exceed ${rules.maxLength} characters.`
    );
  }

  if (rules.pattern && !rules.pattern.test(value)) {
    errors.push(rules.messages?.pattern || "Invalid format.");
  }

  return errors.length > 0 ? errors : null;
}

function validateForm(fields) {
  let fieldErrors = {};

  for (const fieldName in fields) {
    const { value, rules } = fields[fieldName];
    const errors = validateField(value, rules);

    if (errors) {
      fieldErrors[fieldName] = errors;
    }
  }

  return Object.keys(fieldErrors).length > 0 ? fieldErrors : null;
}

module.exports = { validateField, validateForm };
