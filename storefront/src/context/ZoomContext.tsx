"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

type ZoomLevel = 1 | 2 | 3 | 4

interface ZoomContextType {
  zoom: ZoomLevel
  setZoom: (level: ZoomLevel) => void
}

const ZoomContext = createContext<ZoomContextType | undefined>(undefined)

export function ZoomProvider({ children }: { children: ReactNode }) {
  const [zoom, setZoom] = useState<ZoomLevel>(4)

  return (
    <ZoomContext.Provider value={{ zoom, setZoom }}>
      {children}
    </ZoomContext.Provider>
  )
}

export function useZoom() {
  const context = useContext(ZoomContext)
  if (context === undefined) {
    throw new Error("useZoom must be used within a ZoomProvider")
  }
  return context
}
