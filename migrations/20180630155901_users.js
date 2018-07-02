
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.text('bio').notNullable()
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.string('email').unique().notNullable();
    table.string('facebook').unique().notNullable();
    table.string('instagaram').unique().notNullable();
    table.string('city').notNullable();
    table.text('image_url').notNullable();
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
