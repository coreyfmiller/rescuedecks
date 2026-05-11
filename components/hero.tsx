import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D5Lr4SnfAXuyxl4YRLZZdRIR1HeS5D.png"
          alt="Beautiful composite deck with white railings overlooking countryside"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-primary-foreground/90 mb-4">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">Serving Kings County & Saint John County, NB</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
            Custom Decks & Outdoor Living Spaces
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Transform your backyard into a stunning outdoor oasis. From pressure-treated and cedar decks to composite and pool decks, we build quality outdoor spaces that last.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="#contact">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="#gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
