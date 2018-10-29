const knex = require('knex')
const knexConfig = require('../../knexfile.js');
const db = knex(knexConfig.development)

module.exports = {
  find,
  findById,
  insert,
  remove
}


  function find() {
    return db('Notes')
  }

  function findById(id) {
    console.log('ID:', id);
    return db('Notes')
      .where({id: id})
  }

  function insert(game) {
    return db('Notes')
      .insert(game)
  }

  function remove(id) {
    return db('Notes')
      .where('id', id)
      .del()
  }

  // knex('accounts')
  // .where('activated', false)
  // .del()
