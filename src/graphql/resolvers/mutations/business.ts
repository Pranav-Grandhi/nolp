import { ForbiddenError, UserInputError } from 'apollo-server-micro'
import { Context } from 'graphql/context'
import {
  CreateBusinessInput,
  MutationDeleteBusinessArgs,
  MutationEditBusinessArgs,
} from 'graphql/types.generated'

export async function createBusiness(args: CreateBusinessInput, ctx: Context) {
  const { about, location, name } = args
  const { user, prisma } = ctx

  return await prisma.business
    .create({
      data: {
        about,
        location,
        name,
        userId: user.id,
      },
    })
    .catch((err) => {
      console.error(err)
      throw new UserInputError('Could not create business')
    })
}

export async function editBusiness(
  args: MutationEditBusinessArgs,
  ctx: Context
) {
  const { id, data } = args
  const { name = '', about = '', location = '' } = data
  const { prisma, user } = ctx

  const business = await prisma.business.findUnique({ where: { id: id } })
  if (business.userId !== user.id) {
    throw new ForbiddenError('You are not the owner of this business')
  }

  return await prisma.business
    .update({
      where: { id },
      data: { name, about, location },
    })
    .catch((err) => {
      console.error({ err })
      throw new UserInputError('Unable to edit business')
    })
}

export async function deleteBusiness(
  args: MutationDeleteBusinessArgs,
  ctx: Context
) {
  const { id } = args
  const { prisma } = ctx

  return await prisma.business.delete({ where: { id: id } }).catch((err) => {
    console.error(err)
    throw new UserInputError('Could not delete business')
  })
}
