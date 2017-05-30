exports.up = function (knex, Promise) {
  return knex.schema.createTable('mathtrades', function (table) {
    table.increments('id').primary()
    table.string('mathtrade_name')
    table.integer('math_trade')
    table.date('date_added')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('listings')
}
