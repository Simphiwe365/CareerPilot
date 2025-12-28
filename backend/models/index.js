'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const configFile = require(__dirname + '/../config/config.json');
const config = configFile[env];

// If a DB password is provided via env, coerce to string to satisfy `pg`.
if (process.env.DB_PASSWORD !== undefined && process.env.DB_PASSWORD !== null) {
  config.password = String(process.env.DB_PASSWORD);
}

// Fail fast in development when password is missing to avoid confusing pg errors.
if ((config.password === null || config.password === undefined || config.password === '') && env !== 'production') {
  console.error('Missing DB password. Set `DB_PASSWORD` in backend/.env or your environment.');
  process.exit(1);
}
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
