const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'org1',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 3000
};

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'org2',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 3001
};

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'org3',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 3002
};