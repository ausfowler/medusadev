"use client"

import { ReactNode } from "react"
import { ZoomProvider } from "../context/ZoomContext"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ZoomProvider>
      {children}
    </ZoomProvider>
  )
}
