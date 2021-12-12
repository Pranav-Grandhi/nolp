import { PrismaClient } from '@prisma/client'
import prisma from 'lib/prisma'

export async function getContext(req, res) {
  return {
    prisma,
  }
}

export default async function context(ctx) {
  return await getContext(ctx.req, ctx.res)
}

export type Context = {
  prisma: PrismaClient
}
