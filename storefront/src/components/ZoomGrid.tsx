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
  // Only 4 zoom levels: 1, 3, 5, 10
  // 10 = most zoomed out (many items), 1 = most zoomed in (single item)
  const getGridClasses = () => {
    switch (zoom) {
      case 1: // Most zoomed in (single item)
        return "grid-cols-1 gap-8"
      case 3: // Few items per row
        return "grid-cols-3 gap-8"
      case 5: // Medium zoom
        return "grid-cols-5 gap-6"
      case 10: // Most zoomed out (many items per row)
        return "grid-cols-10 gap-4"
      default:
        return "grid-cols-5 gap-6"
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
