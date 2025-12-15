// Minimal Sequelize configuration placeholder
require('dotenv').config();

// Recommended .env values:
// DB_USER=postgres
// DB_PASSWORD=Cyarh
// DB_NAME=careerpilot_db
// DB_HOST=127.0.0.1
// DB_PORT=5432

module.exports = {
  development: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'Cyarh',
    database: process.env.DB_NAME || 'careerpilot_db',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    dialect: 'postgres'
  },
  test: {
    username: 'postgres',
    password: null,
    database: 'careerpilot_test',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
  }
};
