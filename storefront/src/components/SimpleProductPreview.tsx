"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
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
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="full"
        />
      </div>
    </LocalizedClientLink>
  )
}
