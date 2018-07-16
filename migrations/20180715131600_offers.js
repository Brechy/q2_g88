exports.up = function(knex, Promise) {
  return knex.schema.table('offers', (table) => {
    table.dropColumns('id');
    table.unique(['users_id', 'categories_id']);
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.table('offers', (table) => {
    table.increments();
    table.dropUnique(['users_id', 'categories_id']);
  });
}
