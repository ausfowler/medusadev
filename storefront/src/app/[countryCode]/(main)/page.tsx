import { Metadata } from "next"

import { getRegion } from "@lib/data/regions"
import { getProductsList } from "@lib/data/products"
import ZoomGrid from "../../../components/ZoomGrid"
import SimpleProductPreview from "../../../components/SimpleProductPreview"
import { HttpTypes } from "@medusajs/types"

export const metadata: Metadata = {
  title: "Medusa Store",
  description: "A minimalist ecommerce store built with Medusa"
}

export default async function Home({
  params: { countryCode }
}: {
  params: { countryCode: string }
}) {
  const region = await getRegion(countryCode)
  const { response } = await getProductsList({ countryCode })
  const products = response.products

  if (!products || !region) {
    return null
  }

  // Create multiple copies of the products to fill the grid
  const extendedProducts = [...products, ...products, ...products, ...products].slice(0, 80)

  return (
    <div className="px-4 md:px-6 py-4">
      <div className="group-zoom-grids">
        <ZoomGrid className="w-full h-full pb-20">
          {extendedProducts.map((product: HttpTypes.StoreProduct, index) => (
            <div key={`${product.id}-${index}`} className="product-item flex flex-col">
              <SimpleProductPreview product={product} region={region} />
              <div className="mt-2 text-center">
                <p className="text-sm uppercase tracking-wider">TT-02</p>
              </div>
            </div>
          ))}
        </ZoomGrid>
      </div>
    </div>
  )
}
