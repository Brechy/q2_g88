
exports.up = function(knex, Promise) {
  return knex.schema.createTable('offers', (table) => {
    table.increments();
    table.integer('users_id').notNullable().references('users.id');
    table.integer('categories_id').notNullable().references('categories.id');
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('offers')
}
