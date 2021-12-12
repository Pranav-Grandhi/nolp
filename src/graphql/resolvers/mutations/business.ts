import { UserInputError } from 'apollo-server-micro'
import { Context } from 'graphql/context'
import {
  CreateBusinessInput,
  MutationDeleteBusinessArgs,
} from 'graphql/types.generated'
import { useSession } from 'next-auth/react'

export async function createBusiness(args: CreateBusinessInput, ctx: Context) {
  const { about, location, name } = args
  const { prisma } = ctx

  return await prisma.business.create({
    data: {
      about,
      location,
      name,
      owner:
    },
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
