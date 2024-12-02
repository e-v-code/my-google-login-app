import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import type { NextAuthConfig } from 'next-auth'

export const authConfig: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    })
  ],
  pages: {
    signIn: '/auth/signin'
  }
}

export const { auth, handlers: { GET, POST } } = NextAuth(authConfig)