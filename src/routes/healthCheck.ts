const healthCheckRoutes = [{
  method: 'GET',
  url: '/healthcheck',
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'string' }
        }
      }
    }
  },
  handler: (request, reply) => {
    reply.send({ status: 'Okie dokie, ta de pé em fio' })
  }
}]

export {healthCheckRoutes};