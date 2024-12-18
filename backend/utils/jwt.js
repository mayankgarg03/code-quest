const jwt = require('jsonwebtoken');
const { config } = require('../config/config');

const generateToken = (userId) => {
  const accessToken = jwt.sign({ userId }, config.jwt.JWT_SECRET, {
    expiresIn: config.jwt.JWT_EXPIRES,
  });
  return accessToken;
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, config.jwt.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
