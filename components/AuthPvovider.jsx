"use client"

import { SessionProvider } from "next-auth/react"

export default function AuthPvovider({ children }) {
    return <SessionProvider>{children}</SessionProvider>
}
