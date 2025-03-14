"use client"

import React, { useRef, useState, useEffect } from "react"
import { useZoom } from "../context/ZoomContext"

interface CustomSliderProps {
  className?: string
}

const CustomSlider: React.FC<CustomSliderProps> = ({ className = "" }) => {
  const { zoom, setZoom } = useZoom()
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  
  // Calculate handle position based on current zoom level (1-4)
  const calculateHandlePosition = () => {
    // Convert zoom (1-4) to percentage (0-100)
    return ((zoom - 1) / 3) * 100
  }

  const handlePosition = calculateHandlePosition()

  // Update zoom based on click/drag position
  const updateZoomFromPosition = (clientX: number) => {
    if (!sliderRef.current) return
    
    const rect = sliderRef.current.getBoundingClientRect()
    const position = clientX - rect.left
    const percentage = Math.max(0, Math.min(1, position / rect.width))
    
    // Convert percentage (0-1) to zoom (1-4)
    const newZoom = Math.round(1 + percentage * 3) as 1 | 2 | 3 | 4
    setZoom(newZoom)
  }

  // Event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    updateZoomFromPosition(e.clientX)
  }

  const handleClick = (e: React.MouseEvent) => {
    updateZoomFromPosition(e.clientX)
  }

  // Effect for drag handling
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updateZoomFromPosition(e.clientX)
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  return (
    <div className={`relative flex items-center ${className}`}>
      <div 
        ref={sliderRef}
        className="w-48 h-0.5 bg-black cursor-pointer"
        onClick={handleClick}
        onMouseDown={handleMouseDown}
      >
        {/* Slider track line */}
        <div className="absolute inset-0 bg-black h-0.5"></div>
        
        {/* Slider handle (circle) */}
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border border-black rounded-full cursor-grab active:cursor-grabbing shadow-sm"
          style={{ left: `calc(${handlePosition}% - 4px)` }}
          onMouseDown={handleMouseDown}
        />
      </div>
    </div>
  )
}

export default CustomSlider
