import { AuthenticationError } from 'apollo-server-micro'

export default function requiresUser(fn) {
  return function resolve(parent, args, context) {
    if (context?.user?.id) return fn(parent, args, context)
    throw new AuthenticationError('You must be signed in to do that.')
  }
}
