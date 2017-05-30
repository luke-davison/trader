exports.up = function (knex, Promise) {
  return knex.schema.createTable('listings', function (table) {
    table.increments('id').primary()
    table.integer('bgg_id')
    table.string('game_name')
    table.string('picture_url')
    table.string('game_condition')
    table.string('game_description')
    table.string('wants_description')
    table.integer('mathtrade_id')
    table.integer('user_id')
    table.date('date_added')
    table.date('date_removed')
    table.string('status')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('listings')
}
