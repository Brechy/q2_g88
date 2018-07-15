
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.specificType('hashed_password', 'char(60)');
    table.string('city');
    table.text('bio');
    table.text('image_url');
    table.string('facebook');
    table.string('instagram');
    table.timestamps(true, true);
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
