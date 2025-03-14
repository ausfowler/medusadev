"use client"

import React from "react"
import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type CartSummaryProps = {
  subtotal: number
  shipping: number
  total: number
  currencyCode: string
}

const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  shipping,
  total,
  currencyCode,
}) => {
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
    }).format(amount / 100)
  }

  return (
    <div className="w-full font-mono">
      <div className="py-5 border-t border-b border-black/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase">Subtotal</span>
          <span className="text-xs">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase">Shipping</span>
          <span className="text-xs">{formatPrice(shipping)}</span>
        </div>
        <div className="flex items-center justify-between font-semibold">
          <span className="text-xs uppercase">Total</span>
          <span className="text-xs">{formatPrice(total)}</span>
        </div>
      </div>
      
      <div className="mt-5">
        <LocalizedClientLink href="/checkout">
          <Button 
            variant="primary" 
            className="w-full h-12 bg-black text-white text-xs rounded-none uppercase font-normal"
          >
            Proceed to Checkout
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default CartSummary
