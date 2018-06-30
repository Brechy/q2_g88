
exports.up = function(knex, Promise) {
  return knex.schema.createTable('offers', (table) => {
    table.increments();
    table.integer('users_id').notNullable().references('users.id');
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('offers')
}
