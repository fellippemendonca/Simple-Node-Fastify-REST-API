require('dotenv-flow').config();


const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '0.0.0.0',
  PORT: process.env.PORT || 3000,
  AUTH_TOKEN: process.env.AUTH_TOKEN || 'TEST_TOKEN_123',
  MONGO_DB_URL: process.env.MONGO_DB_URL || 'mongodb://localhost:27017/simpledb',
};

module.exports = config;
