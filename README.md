# Form Validator

A simple and easy integrated form validator for JavaScript. This package provides straightforward functionality to validate form inputs with minimal setup.

## Description

`form-validator` is designed to help developers implement form validation quickly and efficiently. With customizable rules, it ensures that your forms meet the required standards before submission.

## Features

- **Required Field Validation**: Ensures essential fields are not left empty.
- **Minimum Length Validation**: Checks if the input meets specified length requirements.
- **Regex Validation**: Validates inputs against custom regular expressions.
- **Custom Error Messages**: Allows the definition of specific error messages for better user feedback.

## Installation

You can install it using NPM or Yarn:

```bash
npm install form-validator
yarn add form-validator
```

## Usage

Once installed, you can import and use the `form-validator` function in your React components:

```javascript
import React, { useState } from "react";
import { validateForm } from "form-validator";

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: {
      value: "",
      rules: {
        required: true,
        minLength: 3,
        maxLength: 15,
        pattern: /^[a-zA-Z0-9]*$/, // Alphanumeric pattern
        messages: {
          required: "Please enter your username.",
          minLength: "Your username must have at least 3 characters.",
          maxLength: "Your username must not exceed 15 characters.",
          pattern: "Username can only contain alphanumeric characters.",
        },
      },
    },
    password: {
      value: "",
      rules: {
        required: true,
        minLength: 8,
        messages: {
          required: "Please enter your password.",
          minLength: "Your password must have at least 8 characters.",
        },
      },
    },
    email: {
      value: "",
      rules: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Simple email regex
        messages: {
          required: "Please enter your email.",
          pattern: "Please enter a valid email address.",
        },
      },
    },
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors || {});

    if (!validationErrors) {
      console.log("Form Submitted", {
        username: formData.username.value,
        password: formData.password.value,
        email: formData.email.value,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username.value}
          onChange={handleChange}
        />
        {errors.username &&
          errors.username.map((error, index) => (
            <span key={index} style={{ color: "red" }}>
              {error}
            </span>
          ))}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password.value}
          onChange={handleChange}
        />
        {errors.password &&
          errors.password.map((error, index) => (
            <span key={index} style={{ color: "red" }}>
              {error}
            </span>
          ))}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email.value}
          onChange={handleChange}
        />
        {errors.email &&
          errors.email.map((error, index) => (
            <span key={index} style={{ color: "red" }}>
              {error}
            </span>
          ))}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
```

- **Issues**: [Link for reporting issues](https://github.com/bhavadip111/form-Validator/issues)
