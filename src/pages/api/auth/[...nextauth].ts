import { TypeORMLegacyAdapter } from '@next-auth/typeorm-legacy-adapter'
import { PrismaClient } from '@prisma/client'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import path from 'path'
import { ConnectionOptions } from 'typeorm'

import * as entities from '../../../graphql/entities'

const prisma = new PrismaClient()

const connection: ConnectionOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  migrations: [path.join(__dirname, './migrations/*')],
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      profile: (profile) => {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email_address,
          image: profile.avatar_url,
        }
      },
    }),
  ],
  adapter: TypeORMLegacyAdapter(connection, { entities }),
})
