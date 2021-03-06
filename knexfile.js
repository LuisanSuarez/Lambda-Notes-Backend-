require('dotenv').config();
const localPg = {
  host: 'localhost',
  database: 'notes',
  user: process.env.DB_USER,
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
      tableName: 'table_notes',
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
      tableName: 'table_notes',
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
