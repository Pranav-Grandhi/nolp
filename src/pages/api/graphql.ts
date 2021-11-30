import { resolvers } from '@generated/type-graphql'
import { ApolloServer, gql } from 'apollo-server-micro'
import { MicroRequest } from 'apollo-server-micro/dist/types'
import { ServerResponse } from 'http'
import { buildSchema } from 'type-graphql'

async function setup() {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: resolvers,
      validate: false,
    }),
  })

  const startServer = apolloServer.start()

  return apolloServer
}

export default async function handler(req: MicroRequest, res: ServerResponse) {
  const server = await setup()
  await server.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
