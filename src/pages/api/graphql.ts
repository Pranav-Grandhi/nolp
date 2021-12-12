import { ApolloServer } from 'apollo-server-micro'
import context from 'graphql/context'
import withRateLimit from 'graphql/helpers/withRateLimit'

const apolloServer = new ApolloServer({
  context,
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = apolloServer.createHandler({ path: '/api/graphql' })

export default withRateLimit(handler)
