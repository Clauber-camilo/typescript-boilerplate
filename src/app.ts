import Fastify, { FastifyInstance } from 'fastify'
import { CONFIG } from '@config/env'
import { initializer } from './routes'

const server: FastifyInstance = Fastify({})


const start = async () => {
  try {
    initializer(server)

    await server.listen({ port: CONFIG.port })

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port
    console.log(`Server initialized in localhost:${port}`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

export { start }
