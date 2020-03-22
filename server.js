// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
  })
  
  // Declare a route
  fastify.get('/', function (request, reply) {
    reply.send(JSON.stringify( 'Ania coś tam umie kodzić' ));
  })
  fastify.get('/ania', function (request, reply) {
    reply.send(JSON.stringify( 'Ania do ćwiczeń' ));
  })
  
  fastify.get('/pawel', function (request, reply) {
    reply.send(JSON.stringify( 'Pawel uczy anie' ));
  })

  // Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()