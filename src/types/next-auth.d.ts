import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id?: string
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }

  interface Profile {
    email_verified?: boolean
    email?: string
    name?: string
    picture?: string
    sub?: string
    iat?: number
    exp?: number
    jti?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string
    email?: string
    name?: string
    picture?: string
  }
}