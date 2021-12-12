import { PrismaClient, User } from '@prisma/client'
import prisma from 'lib/prisma'
import { useSession } from 'next-auth/react'

export async function getContext(req, res) {
  const { data: session } = useSession()
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  })

  return {
    user,
    prisma,
  }
}

export default async function context(ctx) {
  return await getContext(ctx.req, ctx.res)
}

export type Context = {
  prisma: PrismaClient
  user: User
}
