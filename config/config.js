require('dotenv').config();

const config = {
  database: {
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/code_quest',
  },
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
    JWT_EXPIRES: process.env.JWT_EXPIRES || '1h',
  },
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = { config };
