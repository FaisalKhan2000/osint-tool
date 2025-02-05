"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCompany = exports.validateUsername = exports.validateEmail = void 0;
/**
 * Validates that the input string is a properly formatted email address.
 * @param email - The email string to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};
exports.validateEmail = validateEmail;
/**
 * Validates that the input string is a valid username.
 * This example uses a simple regex to allow alphanumeric characters and underscores.
 * @param username - The username string to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
const validateUsername = (username) => {
    const re = /^[\w]+$/;
    return re.test(username);
};
exports.validateUsername = validateUsername;
/**
 * Validates the company name.
 * A basic implementation that ensures a non-empty, trimmed string.
 * @param company - The company name string to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
const validateCompany = (company) => {
    return company.trim().length > 0;
};
exports.validateCompany = validateCompany;
