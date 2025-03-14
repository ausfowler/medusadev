"use client"

import React, { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ShoppingBag from "@modules/layout/components/cart-button/shopping-bag-icon"
import HorizontalMenu from "@modules/layout/components/horizontal-menu"
import ZoomControlsWrapper from "@modules/layout/components/zoom-controls-wrapper"

const NavigationMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      {/* Main navigation bar */}
      <header className="relative h-12 mx-auto duration-200 bg-white">
        <nav className="flex items-center justify-between w-full h-full px-5 text-small-regular">
          {/* Left side - Menu toggle */}
          <div className="flex items-center w-8 h-8 cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8H20M4 16H20" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </div>

          {/* Center - Slider */}
          <div className="flex-1 flex items-center justify-center h-full">
            <ZoomControlsWrapper />
          </div>

          {/* Right side - Cart */}
          <div className="flex items-center">
            <LocalizedClientLink
              className="flex items-center hover:opacity-80 transition-opacity duration-150"
              href="/cart"
              data-testid="nav-cart-link"
            >
              <div className="flex items-center gap-1">
                <ShoppingBag size={22} />
                <span className="text-sm ml-1 font-normal">1</span>
              </div>
            </LocalizedClientLink>
          </div>
        </nav>
      </header>
      
      {/* Horizontal menu below */}
      <HorizontalMenu isOpen={menuOpen} />
    </div>
  )
}

export default NavigationMenu
