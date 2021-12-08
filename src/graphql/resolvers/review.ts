import { Resolver } from 'type-graphql'

import { Review } from '../entities'

@Resolver(Review)
class ReviewResolver {}

export default ReviewResolver
