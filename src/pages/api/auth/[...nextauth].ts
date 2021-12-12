import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

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
})
