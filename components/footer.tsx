import Image from "next/image"
import Link from "next/link"
import { Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d0YkJEvwB6bZRe75M4QIY3HeJaXIos.png"
              alt="Rescue Decks Logo"
              width={160}
              height={90}
              className="h-20 w-auto mb-4 brightness-110"
            />
            <p className="text-primary-foreground/80 max-w-sm">
              Building quality decks and outdoor living spaces in Kings County and Saint John County, New Brunswick.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/rescuedecksNB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@rescuedecks.ca"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Deck Types</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link href="#services" className="hover:text-primary-foreground transition-colors">Pressure Treated</Link></li>
              <li><Link href="#services" className="hover:text-primary-foreground transition-colors">Pool Decks</Link></li>
              <li><Link href="#services" className="hover:text-primary-foreground transition-colors">Cedar Decks</Link></li>
              <li><Link href="#services" className="hover:text-primary-foreground transition-colors">Composite Decks</Link></li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Other Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link href="#other-services" className="hover:text-primary-foreground transition-colors">Pergolas</Link></li>
              <li><Link href="#other-services" className="hover:text-primary-foreground transition-colors">Gazebos</Link></li>
              <li><Link href="#other-services" className="hover:text-primary-foreground transition-colors">Sheds</Link></li>
              <li><Link href="#other-services" className="hover:text-primary-foreground transition-colors">Privacy Screens</Link></li>
              <li><Link href="#other-services" className="hover:text-primary-foreground transition-colors">Landscape Lighting</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Rescue Decks. All rights reserved. | rescuedecks.ca</p>
        </div>
      </div>
    </footer>
  )
}
