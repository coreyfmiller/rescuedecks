"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&h=600&fit=crop",
    alt: "Beautiful wooden deck with outdoor furniture",
    caption: "Pressure Treated Deck"
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    alt: "Cedar deck with stunning natural finish",
    caption: "Cedar Deck"
  },
  {
    src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop",
    alt: "Pool deck with lounge chairs",
    caption: "Pool Deck"
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    alt: "Modern composite deck with railing",
    caption: "Composite Deck"
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    alt: "Pergola with outdoor living space",
    caption: "Pergola Installation"
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    alt: "Backyard deck with landscaping",
    caption: "Multi-level Deck"
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
    alt: "Deck with outdoor kitchen",
    caption: "Outdoor Living Space"
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
    alt: "Modern deck design with lighting",
    caption: "Deck with Lighting"
  }
]

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="gallery" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our portfolio of completed projects across Kings County and Saint John County.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end justify-center">
                <span className="text-primary-foreground font-medium pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.caption}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-primary-foreground hover:text-accent transition-colors"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 text-primary-foreground hover:text-accent transition-colors"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <div className="max-w-4xl max-h-[80vh] relative">
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              width={800}
              height={600}
              className="object-contain max-h-[80vh] w-auto"
            />
            <p className="text-center text-primary-foreground mt-4 text-lg">
              {galleryImages[currentIndex].caption}
            </p>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-4 text-primary-foreground hover:text-accent transition-colors"
          >
            <ChevronRight className="h-12 w-12" />
          </button>
        </div>
      )}
    </section>
  )
}
