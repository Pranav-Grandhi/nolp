import { Resolver } from 'type-graphql'

import { Business } from '../entities'

@Resolver(Business)
class BusinessResolver {}

export default BusinessResolver
