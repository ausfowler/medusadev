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
  
  // Calculate handle position based on current zoom level (1,3,5,10)
  // But reversed: 10 is on left (0%), 1 is on right (100%)
  const calculateHandlePosition = () => {
    // Convert zoom to percentage (0-100), reversed
    switch(zoom) {
      case 10: return 0; // Leftmost position
      case 5: return 33; // 1/3 from left
      case 3: return 66; // 2/3 from left
      case 1: return 100; // Rightmost position
      default: return 33; // Default to medium zoom (5)
    }
  }

  const handlePosition = calculateHandlePosition()

  // Update zoom based on click/drag position
  const updateZoomFromPosition = (clientX: number) => {
    if (!sliderRef.current) return
    
    const rect = sliderRef.current.getBoundingClientRect()
    const position = clientX - rect.left
    const percentage = Math.max(0, Math.min(1, position / rect.width))
    
    // Convert percentage (0-1) to zoom (10,5,3,1) - reversed
    // 10 = leftmost (most zoomed out), 1 = rightmost (most zoomed in)
    let newZoom: 1 | 3 | 5 | 10;
    
    if (percentage < 0.167) {
      newZoom = 10;
    } else if (percentage < 0.5) {
      newZoom = 5;
    } else if (percentage < 0.833) {
      newZoom = 3;
    } else {
      newZoom = 1;
    }
    
    setZoom(newZoom);
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
        className="w-16 h-0.5 bg-black cursor-pointer"
        onClick={handleClick}
        onMouseDown={handleMouseDown}
      >
        {/* Slider track line */}
        <div className="absolute inset-0 bg-black h-0.5"></div>
        
        {/* Slider handle (circle) */}
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-white border border-black rounded-full cursor-grab active:cursor-grabbing shadow-sm"
          style={{ left: `calc(${handlePosition}% - 3px)` }}
          onMouseDown={handleMouseDown}
        />
      </div>
    </div>
  )
}

export default CustomSlider
