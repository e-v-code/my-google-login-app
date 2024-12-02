import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { auth } from "@/app/auth"
import SessionProvider from '@/components/SessionProvider'

const geistSans = localFont({
  src: "./fonts/GeistSans-Regular.woff2",
  variable: "--font-geist-sans",
  weight: "400",
});

const geistMono = localFont({
  src: "./fonts/GeistMono-SemiBold.woff2",
  variable: "--font-geist-mono",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Onecode Login",
  description: "Google Login with Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}