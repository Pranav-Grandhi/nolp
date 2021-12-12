import { ApolloServer } from 'apollo-server-micro'
import context from 'graphql/context'
import withRateLimit from 'graphql/helpers/withRateLimit'
import resolvers from 'graphql/resolvers'
import typeDefs from 'graphql/typeDefs'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
})

const startServer = apolloServer.start()

export const config = {
  api: {
    bodyParser: false,
  },
}

async function handler(req, res) {
  await startServer
  apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}

export default withRateLimit(handler)
