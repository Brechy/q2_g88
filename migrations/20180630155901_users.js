
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.string('email').unique().notNullable();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.string('city');
    table.text('bio');
    table.text('image_url').defaultTo();
    table.string('facebook').unique();
    table.string('instagram').unique();
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
