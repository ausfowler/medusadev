"use client"

import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import BackButton from "../../../../components/icons/BackButton"

const CartNavigation: React.FC = () => {
  return (
    <div className="sticky top-0 inset-x-0 z-50 bg-white">
      <header className="relative h-12 mx-auto">
        <nav className="flex items-center justify-between w-full h-full px-5 text-small-regular">
          {/* Left side - Back button */}
          <div className="flex items-center">
            <LocalizedClientLink
              className="flex items-center hover:opacity-80 transition-opacity duration-150"
              href="/"
              data-testid="back-button"
            >
              <BackButton size={22} />
            </LocalizedClientLink>
          </div>

          {/* Center - Title */}
          <div className="flex-1 flex justify-center font-mono uppercase text-sm tracking-wide">
            CART
          </div>

          {/* Right side - Empty space to balance layout */}
          <div className="w-8"></div>
        </nav>
      </header>
    </div>
  )
}

export default CartNavigation
