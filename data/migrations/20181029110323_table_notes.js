
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Notes', function(tbl){
    tbl.increments();
    tbl.string('title', 64).notNullable().unique();
    tbl.string('content', 4096).notNullable();
    tbl.string('comments', 1024);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Notes')
};
