"use client"

import React from "react"
import { Transition } from "@headlessui/react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface HorizontalMenuProps {
  isOpen: boolean
}

const HorizontalMenu: React.FC<HorizontalMenuProps> = ({ isOpen = false }) => {
  const menuItems = [
    { label: "HELP", href: "/help" },
    { label: "TERMS", href: "/terms" },
    { label: "PRIVACY", href: "/privacy" },
    { label: "ACCESSIBILITY", href: "/accessibility" }
  ]

  return (
    <div className="w-full overflow-hidden">
      <Transition
        show={isOpen}
        enter="transition-all duration-300 ease-out"
        enterFrom="transform -translate-y-full opacity-0"
        enterTo="transform translate-y-0 opacity-100"
        leave="transition-all duration-200 ease-in"
        leaveFrom="transform translate-y-0 opacity-100"
        leaveTo="transform -translate-y-full opacity-0"
        className="w-full bg-white"
      >
        <div className="flex items-center gap-9 px-9 py-2 font-mono">
          {menuItems.map((item) => (
            <LocalizedClientLink
              key={item.label}
              href={item.href}
              className="text-black hover:opacity-70 transition-opacity duration-150 text-base uppercase tracking-wide"
            >
              {item.label}
            </LocalizedClientLink>
          ))}
        </div>
      </Transition>
    </div>
  )
}

export default HorizontalMenu
