import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER!,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith('/document-drafting') || 
                            nextUrl.pathname.startsWith('/legal-opinion')
      
    //   if (isOnDashboard) {
    //     if (isLoggedIn) return true
    //     return false // Redirect to login
    //   }
      
      return true
    },
  },
})