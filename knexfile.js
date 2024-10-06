var envpath = __dirname + '/.env';
var config = require('dotenv').config({ path: envpath });

module.exports = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  migrations: {
    tableName: 'migrations',
  },
};

/*
module.exports = {
  client: 'sqlite3',
  connection: {
    filename: __dirname + '/data.db',
  },
  migrations: {
    tableName: 'migrations',
  },
  useNullAsDefault: true,
};
*/