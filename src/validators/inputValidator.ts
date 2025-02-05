/**
 * Validates that the input string is a properly formatted email address.
 * @param email - The email string to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

/**
 * Validates that the input string is a valid username.
 * This example uses a simple regex to allow alphanumeric characters and underscores.
 * @param username - The username string to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
export const validateUsername = (username: string): boolean => {
  const re = /^[\w]+$/;
  return re.test(username);
};

/**
 * Validates the company name.
 * A basic implementation that ensures a non-empty, trimmed string.
 * @param company - The company name string to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
export const validateCompany = (company: string): boolean => {
  return company.trim().length > 0;
};
