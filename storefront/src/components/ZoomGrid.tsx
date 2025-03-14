"use client"

import React, { ReactNode } from "react"
import { useZoom } from "../context/ZoomContext"

interface ZoomGridProps {
  children: ReactNode
  className?: string
}

const ZoomGrid: React.FC<ZoomGridProps> = ({ children, className = "" }) => {
  const { zoom } = useZoom()
  
  // Determine the grid classes based on zoom level
  const getGridClasses = () => {
    switch (zoom) {
      case 1: // Most zoomed in - fewer items per row
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
      case 2:
        return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      case 3:
        return "grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6"
      case 4: // Most zoomed out - more items per row
        return "grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
      default:
        return "grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
    }
  }
  
  return (
    <div 
      className={`zoom-grid ${className}`} 
      data-zoom={zoom} 
      data-zoom-active="true"
    >
      <div className={`grid ${getGridClasses()}`}>
        {children}
      </div>
    </div>
  )
}

export default ZoomGrid
