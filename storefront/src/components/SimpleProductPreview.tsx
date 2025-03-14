"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CleanThumbnail from "@modules/products/components/clean-thumbnail"
import { HttpTypes } from "@medusajs/types"

interface SimpleProductPreviewProps {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
}

export default function SimpleProductPreview({
  product,
  region
}: SimpleProductPreviewProps) {
  return (
    <LocalizedClientLink 
      href={`/products/${product.handle}`} 
      className="block transition-opacity hover:opacity-80"
    >
      <div data-testid="product-wrapper" className="relative">
        <CleanThumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="full"
        />
        <div className="mt-2 text-center text-xs font-mono uppercase tracking-wider">
          {product.title.split(' ')[0] || product.handle}
        </div>
      </div>
    </LocalizedClientLink>
  )
}
