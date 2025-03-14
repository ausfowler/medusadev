"use client"

import { usePathname } from "next/navigation"
import NavigationMenu from "@modules/layout/components/navigation-menu"
import CartNavigation from "@modules/layout/components/cart-navigation"

export default function Nav() {
  const pathname = usePathname()
  
  // Check if we're on the cart page
  const isCartPage = pathname?.endsWith('/cart')
  
  // Render the appropriate navigation component
  return isCartPage ? <CartNavigation /> : <NavigationMenu />
}
