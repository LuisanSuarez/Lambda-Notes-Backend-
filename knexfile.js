require('dotenv').config();
const localPg = {
  host: 'localhost',
  database: 'notes',
  user: process.env.DB_user,
  password: process.env.DB_PASS,
}
const dbConnection = process.env.DATABASE_URL || localPg

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/notes.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  production: {
    client: 'pg',  //yarn add pg (in my project, not this one)
    connection: dbConnection,  //could be an object or a string
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};
