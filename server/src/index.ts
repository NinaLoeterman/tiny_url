import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.post('/long-url', async (request) => {
  console.log(request.body)
  return { tinyURL: 'imtiny.com' }
})

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 8000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()