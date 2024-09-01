const gameRoutes = [{
  method: 'GET',
  url: '/games',
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'string' },
        }
      }
    }
  },
  handler: (request, reply) => {
    reply.send({ status: 'Games routes is up and running'})
  }
},
{
  method: 'GET',
  url: '/games/:id',
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          gameId: { type: 'number' },
          name: { type: 'string' },
          genre: { type: 'string' },
        }
      }
    }
  },
  handler: (request, reply) => {
    const { id } = request.params;
    reply.send({ gameId: id, name: 'World of warcraft', genre: 'MMORPG' });
  }
},]

export {gameRoutes};