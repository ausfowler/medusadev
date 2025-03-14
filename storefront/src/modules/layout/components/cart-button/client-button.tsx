"use client"

import { usePathname } from "next/navigation"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ShoppingBag from "./shopping-bag-icon"

interface CartButtonProps {
  cart?: HttpTypes.StoreCart | null
}

const CartButtonClient: React.FC<CartButtonProps> = ({ cart }) => {
  const totalItems = cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0

  return (
    <div className="h-full z-50">
      <LocalizedClientLink
        className="flex items-center hover:opacity-80 transition-opacity duration-150"
        href="/cart"
        data-testid="nav-cart-link"
      >
        <div className="flex items-center gap-1">
          <ShoppingBag size={22} />
          {totalItems > 0 && (
            <span className="text-sm ml-1 font-normal">
              {totalItems}
            </span>
          )}
        </div>
      </LocalizedClientLink>
    </div>
  )
}

export default CartButtonClient
