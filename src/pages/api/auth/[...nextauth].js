import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const prisma = new PrismaClient()

export default NextAuth({
  providers: [
    Providers.Google({
      async profile(profile) {
        // You can use the tokens, in case you want to fetch more profile information
        // For example several OAuth providers do not return email by default.
        // Depending on your provider, will have tokens like `access_token`, `id_token` and or `refresh_token`
        return {
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
      profileUrl: 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json',
    }),
  ],
  adapter: PrismaAdapter(prisma),
})
