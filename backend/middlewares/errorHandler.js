const { config } = require('../config/config');

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500; // Default to 500 if statusCode is not set
  const message = err.message || 'An unexpected error occurred';

  res.status(statusCode).json({
    message: message,
    ...(config.NODE_ENV === 'development' && { error: err.stack }),
  });
};

module.exports = errorHandler;
