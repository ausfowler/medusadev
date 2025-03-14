"use client"

import React from "react"
import { useZoom } from "../context/ZoomContext"

interface ZoomControlsProps {
  className?: string
}

const ZoomControls: React.FC<ZoomControlsProps> = ({ className = "" }) => {
  const { zoom, setZoom } = useZoom()
  
  // Convert discrete zoom levels to slider values
  // Input range is from 0-100 but we're mapping it to our discrete zoom levels
  // where 0 = zoom level 10, 33 = zoom level 5, 66 = zoom level 3, 100 = zoom level 1
  const getSliderValue = () => {
    switch(zoom) {
      case 10: return 0;   // Leftmost 
      case 5: return 33;   // 1/3 from left
      case 3: return 66;   // 2/3 from left
      case 1: return 100;  // Rightmost
      default: return 33;  // Default position
    }
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // Map the continuous slider value to one of our discrete zoom levels
    let newZoom: 1 | 3 | 5 | 10;
    
    if (value < 16.5) {
      newZoom = 10;
    } else if (value < 49.5) {
      newZoom = 5;
    } else if (value < 83.5) {
      newZoom = 3;
    } else {
      newZoom = 1;
    }
    
    setZoom(newZoom);
  }

  return (
    <div className={`relative flex items-center ${className}`}>
      <input 
        type="range" 
        min="0" 
        max="100" 
        step="1" 
        value={getSliderValue()} 
        onChange={handleChange}
        className="w-16 h-0.5 appearance-none bg-black rounded-full outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-sm"
      />
    </div>
  )
}

export default ZoomControls
