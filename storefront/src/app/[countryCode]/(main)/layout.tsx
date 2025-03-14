import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { getBaseURL } from "@lib/util/env"
import { Providers } from "../../../components/providers"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL())
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="min-h-screen flex flex-col bg-white">
        <Nav />
        <main className="flex-1 relative">
          {props.children}
        </main>
        <Footer />
      </div>
    </Providers>
  )
}
