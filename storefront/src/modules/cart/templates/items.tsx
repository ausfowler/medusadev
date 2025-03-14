"use client"

import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import React from "react"
import LineItemOptions from "@modules/common/components/line-item-options"

type ItemsTemplateProps = {
  items: HttpTypes.StoreCart["items"]
}

const ItemsTemplate: React.FC<ItemsTemplateProps> = ({ items }) => {
  if (!items?.length) {
    return null
  }

  return (
    <div className="p-0">
      {items
        .sort((a, b) => {
          return a.created_at && b.created_at && a.created_at > b.created_at ? -1 : 1
        })
        .map((item) => {
          // Format the price manually - use a fixed currency code
          const formattedPrice = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD", // Default to USD
          }).format((item.unit_price || 0) * item.quantity / 100);

          return (
            <div key={item.id} className="flex items-start py-5 border-t border-b border-black/10 last:border-b-0">
              {/* Product Thumbnail */}
              <div className="h-20 w-20 relative bg-white mr-5">
                {item.thumbnail ? (
                  <Image
                    src={item.thumbnail}
                    alt={item.title || "Product Image"}
                    className="object-contain"
                    fill
                    sizes="80px"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <span className="text-xs text-gray-400">No image</span>
                  </div>
                )}
              </div>
              
              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between min-h-[80px] font-mono">
                <div>
                  <div className="flex flex-col">
                    <h3 className="text-xs uppercase">{item.title}</h3>
                    {item.variant && item.variant.title !== "Default" && (
                      <p className="text-xs text-black/70 mt-1">{item.variant.title}</p>
                    )}
                  </div>
                  <LineItemOptions variant={item.variant} />
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-xs">
                    {formattedPrice}
                  </div>
                </div>
              </div>
              
              {/* Quantity Controls */}
              <div className="ml-auto flex items-start">
                <div className="flex border border-black/10 items-center h-7">
                  <button
                    className="w-7 h-full flex items-center justify-center text-sm font-bold"
                    onClick={() => {}}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-mono">{item.quantity}</span>
                  <button
                    className="w-7 h-full flex items-center justify-center text-sm font-bold"
                    onClick={() => {}}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default ItemsTemplate
