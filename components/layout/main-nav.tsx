// src/components/layout/main-nav.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scale, Menu, X, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/70">
            <Scale className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">ShohozAin</span>
            <span className="text-xs text-muted-foreground">সহজ আইন</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          
          <Link href="/#for-everyone" className="text-sm font-medium hover:text-primary transition-colors">
            For Everyone
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              Legal Resources
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <a href="http://bdlaws.minlaw.gov.bd" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  📚 Bangladesh Laws (bdlaws)
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://www.supremecourt.gov.bd" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  ⚖️ Supreme Court of Bangladesh
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://judiciary.gov.bd" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  🏛️ Bangladesh Judiciary
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://www.bldlegalized.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  📖 BLD Legal Decisions
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://www.bdlex.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  🔍 BDLEX Research
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/document-drafting">
            <Button>Try for Free</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-3">
            <Link
              href="/#features"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#for-everyone"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              For Everyone
            </Link>
            <div className="py-2">
              <p className="text-sm font-medium mb-2">Legal Resources</p>
              <div className="pl-4 space-y-2">
                <a
                  href="http://bdlaws.minlaw.gov.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-primary"
                >
                  📚 Bangladesh Laws
                </a>
                <a
                  href="https://www.supremecourt.gov.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-primary"
                >
                  ⚖️ Supreme Court
                </a>
                <a
                  href="https://judiciary.gov.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-primary"
                >
                  🏛️ Bangladesh Judiciary
                </a>
              </div>
            </div>
            <Link
              href="/#pricing"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Link href="/login">
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link href="/document-drafting">
                <Button className="w-full">Try for Free</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}