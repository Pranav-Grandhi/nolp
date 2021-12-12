import { ForbiddenError, UserInputError } from 'apollo-server-micro'
import { Context } from 'graphql/context'
import {
  MutationCreateReviewArgs,
  MutationDeleteBusinessArgs,
  MutationEditReviewArgs,
} from 'graphql/types.generated'

export async function createReview(
  _,
  args: MutationCreateReviewArgs,
  ctx: Context
) {
  const { rating, text, businessID } = args.data
  const { user, prisma } = ctx

  return await prisma.review
    .create({
      data: {
        rating,
        text,
        user: { connect: { id: user.id } },
        business: { connect: { id: businessID } },
      },
    })
    .catch((err) => {
      console.error(err)
      throw new UserInputError('Could not create review')
    })
}

export async function editReview(args: MutationEditReviewArgs, ctx: Context) {
  const { id, data } = args
  const { rating, text = '' } = data
  const { prisma, user } = ctx

  const review = await prisma.review.findUnique({ where: { id: id } })
  if (review.userId !== user.id) {
    throw new ForbiddenError('You are not the creator of this review')
  }

  return await prisma.review
    .update({
      where: { id: id },
      data: { rating, text },
    })
    .catch((err) => {
      console.error(err)
      throw new UserInputError('Could not edit review')
    })
}

export async function deleteReview(
  args: MutationDeleteBusinessArgs,
  ctx: Context
) {
  const { id } = args
  const { prisma } = ctx

  return await prisma.review.delete({ where: { id: id } }).catch((err) => {
    console.error(err)
    throw new UserInputError('Could not delete review')
  })
}
