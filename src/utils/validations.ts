import moment from "moment";

/**
 * isValidEmail helper method
 * @param {string} email
 * @returns {Boolean} True or False
 */
const isValidEmail = (email: string): boolean => {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
};

/**
 * validatePassword helper method
 * @param {string} password
 * @returns {Boolean} True or False
 */
const validatePassword = (password: string): boolean => {
  if (password.length <= 5 || password === '') {
    return false;
  }
  return true;
};

/**
 * isEmpty helper method
 * @param {string, integer} input
 * @returns {Boolean} True or False
 */
const isEmpty = (input: string): boolean => {
  if (input === undefined || input === '') {
    return true;
  }
  return false;
};

export { isValidEmail, validatePassword, isEmpty };
