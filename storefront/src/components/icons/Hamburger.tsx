import React from "react"

interface HamburgerProps {
  size?: number
  className?: string
}

const Hamburger: React.FC<HamburgerProps> = ({ size = 24, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 8H20" />
      <path d="M4 16H20" />
    </svg>
  )
}

export default Hamburger
