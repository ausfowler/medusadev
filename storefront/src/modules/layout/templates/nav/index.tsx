import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import ZoomControlsWrapper from "@modules/layout/components/zoom-controls-wrapper"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-12 mx-auto border-b duration-200 bg-white border-black/20">
        <nav className="flex items-center justify-between w-full h-full px-4 md:px-6 text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <Suspense fallback={<div className="w-32"></div>}>
              <ZoomControlsWrapper />
            </Suspense>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                href="/"
                className="font-body text-sm uppercase tracking-wide hover:opacity-70 transition-opacity duration-150"
                data-testid="nav-store-link"
              >
                Store
              </LocalizedClientLink>
              {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="font-body text-sm uppercase tracking-wide hover:opacity-70 transition-opacity duration-150"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="font-body text-sm uppercase tracking-wide hover:opacity-70 transition-opacity duration-150"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="font-body text-sm uppercase tracking-wide hover:opacity-70 transition-opacity duration-150 flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
