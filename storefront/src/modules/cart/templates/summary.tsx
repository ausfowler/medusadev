"use client"

import React from "react"
import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

type SummaryProps = {
  cart: HttpTypes.StoreCart
}

const Summary: React.FC<SummaryProps> = ({ cart }) => {
  if (!cart || !cart.region) {
    return null
  }

  const {
    subtotal = 0,
    discount_total = 0,
    gift_card_total = 0,
    tax_total = 0,
    shipping_total = 0,
    total = 0,
  } = cart

  const currencyCode = cart.region.currency_code

  const formatAmount = (amount: number) => {
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
          <span className="text-xs">{formatAmount(subtotal)}</span>
        </div>
        {discount_total > 0 && (
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase">Discount</span>
            <span className="text-xs">- {formatAmount(discount_total)}</span>
          </div>
        )}
        {gift_card_total > 0 && (
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase">Gift card</span>
            <span className="text-xs">- {formatAmount(gift_card_total)}</span>
          </div>
        )}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase">Shipping</span>
          <span className="text-xs">{formatAmount(shipping_total)}</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase">Taxes</span>
          <span className="text-xs">{formatAmount(tax_total)}</span>
        </div>
        <div className="flex items-center justify-between font-semibold">
          <span className="text-xs uppercase">Total</span>
          <span className="text-xs">{formatAmount(total)}</span>
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

export default Summary
