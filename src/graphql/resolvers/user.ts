import { UserEntity } from 'graphql/entities/entities'
import { Resolver } from 'type-graphql'

@Resolver(UserEntity)
class UserResolver {}

export default UserResolver
