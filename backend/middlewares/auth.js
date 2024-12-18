const jwt = require('jsonwebtoken');
const { config } = require('../config/config');

const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, config.jwt.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res
        .status(401)
        .json({ message: 'Token has expired, please login again' });
    }
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authenticate;
