"use client"

import React from "react"
import { useZoom } from "../context/ZoomContext"

interface ZoomControlsProps {
  className?: string
}

const ZoomControls: React.FC<ZoomControlsProps> = ({ className = "" }) => {
  const { zoom, setZoom } = useZoom()
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value) as 1 | 2 | 3 | 4
    setZoom(value)
  }

  return (
    <div className={`relative flex items-center ${className}`}>
      <input 
        type="range" 
        min="1" 
        max="4" 
        step="1" 
        value={zoom} 
        onChange={handleChange}
        className="w-32 h-1 appearance-none bg-black/20 rounded-full outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
      />
    </div>
  )
}

export default ZoomControls
