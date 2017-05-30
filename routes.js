const createServer = require('./server')
const development = require('./knexfile').development
const knex = require('knex')(development)

const server = createServer(knex)

const PORT = 3000

server.listen(PORT, function () {
  console.log('Listening on port:', PORT)
})
