import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id?: string
      role?: string
      tagline?: string
    } & DefaultSession['user']
  }
}
