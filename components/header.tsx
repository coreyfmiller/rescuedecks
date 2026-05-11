"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: "Deck Types" },
  { href: "#other-services", label: "Other Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-36">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d0YkJEvwB6bZRe75M4QIY3HeJaXIos.png"
              alt="Rescue Decks Logo"
              width={420}
              height={240}
              className="h-28 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors text-lg"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="mailto:info@rescuedecks.ca" className="flex items-center gap-2 text-base text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              <span>info@rescuedecks.ca</span>
            </a>
            <Button asChild>
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <a href="mailto:info@rescuedecks.ca" className="flex items-center gap-2 text-sm text-muted-foreground px-2 py-2">
                  <Mail className="h-4 w-4" />
                  <span>info@rescuedecks.ca</span>
                </a>
                <Button asChild className="w-full mt-4">
                  <Link href="#contact">Get a Quote</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
