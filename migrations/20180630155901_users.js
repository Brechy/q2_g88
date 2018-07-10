
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('name');
    table.string('email').unique();
    table.specificType('hashed_password', 'char(60)');
    table.string('city');
    table.text('bio');
    table.text('image_url')
    table.string('facebook').unique();
    table.string('instagram').unique();
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
