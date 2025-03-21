import React from "react"

interface BackButtonProps {
  size?: number
  color?: string
}

const BackButton: React.FC<BackButtonProps> = ({
  size = 24,
  color = "black"
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M19 12H5M5 12L12 19M5 12L12 5" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default BackButton
