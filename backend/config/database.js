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
    // Password must come from environment variables - do NOT hardcode secrets here
    // Coerce to string when provided and fail early in development if missing
    password: (() => {
      const raw = process.env.DB_PASSWORD;
      if (raw === undefined || raw === null || raw === '') {
        if ((process.env.NODE_ENV || 'development') !== 'production') {
          console.error('Missing DB_PASSWORD environment variable. Create backend/.env and set DB_PASSWORD.');
          process.exit(1);
        }
        return undefined;
      }
      return String(raw);
    })(),
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
