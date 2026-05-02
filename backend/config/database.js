require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'postgres',
    password: (() => {
      const raw = process.env.DB_PASSWORD;
      if (!raw) {
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
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD ? String(process.env.DB_PASSWORD) : '',
    database: (process.env.DB_NAME || 'careerpilot_db') + '_test',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
  }
};