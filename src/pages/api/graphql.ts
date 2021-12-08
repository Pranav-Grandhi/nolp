import { ApolloServer, gql } from 'apollo-server-micro'
import BusinessResolver from 'graphql/resolvers/business'
import ReviewResolver from 'graphql/resolvers/review'
import UserResolver from 'graphql/resolvers/user'
import { NextApiRequest, NextApiResponse } from 'next'
import { buildSchema } from 'type-graphql'

async function setup() {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, ReviewResolver, BusinessResolver],
      validate: false,
    }),
  })

  apolloServer.start()

  return apolloServer
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
