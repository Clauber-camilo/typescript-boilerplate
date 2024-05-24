import packageJSON from '../../package.json'

enum NodeEnv {
  TEST = 'test',
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
  HOMOLOG = 'homolog'
}

interface IEnv {
  isDev: boolean
  env: NodeEnv
  version: string
}

const CONFIG: IEnv = {
  isDev: (process.env.NODE_ENV as NodeEnv) === NodeEnv.DEVELOPMENT,
  env: (process.env.NODE_ENV as NodeEnv) || NodeEnv.DEVELOPMENT,
  version: packageJSON.version
}

export { CONFIG, NodeEnv }
