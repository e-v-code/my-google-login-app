import NextAuth from "next-auth"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { getServerSession } from 'next-auth/next'
import SessionProvider from '@/components/SessionProvider'

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