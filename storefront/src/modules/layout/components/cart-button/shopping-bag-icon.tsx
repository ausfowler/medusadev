import React from "react"

interface ShoppingBagProps {
  size?: number
  className?: string
}

const ShoppingBag: React.FC<ShoppingBagProps> = ({ size = 20, className = "" }) => {
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
      <rect x="6" y="8" width="12" height="10" rx="2" />
      <path d="M9 7V7C9 5.34315 10.3431 4 12 4V4C13.6569 4 15 5.34315 15 7V7" />
    </svg>
  )
}

export default ShoppingBag
