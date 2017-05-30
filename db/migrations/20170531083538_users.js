exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary()
    table.string('user_name')
    table.string('user_location')
    table.string('game_description')
    table.string('wants_description')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
