const knex = require('knex')
const knexConfig = require('../../knexfile.js');
const db = knex(knexConfig.development)

module.exports = {
  find,
  findById,
  insert,
  remove,
  edit
}


  function find() {
    return db('Notes')
  }

  function findById(id) {
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

  function edit(id, newNote) {
    return db('Notes')
    .where('id', id)
    .update(newNote)
  }

//   knex('books')
// .where('published_date', '<', 2000)
// .update({
//   status: 'archived',
//   thisKeyIsSkipped: undefined
// })
// Outputs:
// update `books` set `status` = 'archived' where `published_date` < 2000

  // knex('accounts')
  // .where('activated', false)
  // .del()
