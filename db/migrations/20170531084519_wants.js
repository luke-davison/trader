exports.up = function (knex, Promise) {
  return knex.schema.createTable('listings', function (table) {
    table.increments('id').primary()
    table.integer('offered_game_id')
    table.integer('wanted_game_id')
    table.string('status')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('listings')
}
