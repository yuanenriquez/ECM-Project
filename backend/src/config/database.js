const { Sequelize } = require('sequelize');

const requiredVariables = ['DB_NAME', 'DB_USER', 'DB_HOST'];
const missingVariables = requiredVariables.filter((key) => !process.env[key]);

if (missingVariables.length > 0) {
  throw new Error(
    `Missing database environment variables: ${missingVariables.join(', ')}. ` +
    'Copy .env.example to .env and configure your local MySQL connection.'
  );
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

module.exports = sequelize;
