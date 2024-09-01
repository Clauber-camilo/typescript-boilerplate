import { healthCheckRoutes } from './healthCheck'
import { gameRoutes } from './games'

const initializer = (server) => {
  gameRoutes.forEach((route) => server.route(route))

  server.route(healthCheckRoutes[0])
}

export { initializer }
