// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path');
  
  // Declare a route
  fastify.register(require('fastify-static'), {
        root: path.join(__dirname,'public'),
        prefix: '/public/' //optional: default '/'
  })

  fastify.get('/', function (req, reply){
      reply.sendFile('index.html') //serving path.join(_dirname, 'public', 'index.html')
  })

//   fastify.get('/', function (request, reply) {
//     reply.send(JSON.stringify( 'Ania coś tam umie kodzić' ));
//   })

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