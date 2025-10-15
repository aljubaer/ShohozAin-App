import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MainNav } from "@/components/layout/main-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ShohozAin - AI Legal Assistant for Bangladesh",
  description: "Get instant legal document drafting, expert opinions, and case research powered by AI. Designed for lawyers, students, and everyday citizens of Bangladesh.",
  keywords: "Bangladesh law, legal AI, document drafting, legal opinion, ShohozAin, আইনি সহায়তা",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <MainNav />
        {children}
      </body>
    </html>
  )
}