import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"

export const config = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    })
  ],
  pages: {
    signIn: '/auth/signin'
  }
} satisfies NextAuthConfig

export const { auth, handlers: { GET, POST } } = NextAuth(config) 