"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  { src: "/images/gallery/470826404_17888127966155973_5207287233049954386_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/470901490_17888127957155973_2711808205253870002_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/470920585_17888127996155973_2693795794726752247_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/481911357_122293468310003274_2066389610907384060_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/482087398_122293468178003274_2596086320421741325_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/482906846_17898034506155973_3159347960566449308_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/497748005_17906204892155973_5654799948561596421_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/502509318_17911029873155973_7113789303809839106_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/503625860_17911029891155973_3580781622986399164_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/522393122_17914046619155973_3572970213906098459_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/522413294_17914046628155973_2018325861752196660_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/522669163_17914156869155973_7381256027436311646_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/523015741_17914156860155973_8271681892946530168_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/531985480_17916873087155973_6238197226823628503_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/542226866_17919365757155973_1391020720094087525_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/542450192_17919365733155973_2451351092069212922_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/542562066_17919365769155973_1019592537924945532_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/559129508_122351760176003274_4310909031371942768_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/571202577_122357934320003274_2979626463855147762_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/571271026_122357934374003274_2616628707884102519_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/580487403_122363583770003274_2890992776107531480_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/581934479_122363583704003274_3363000428444905964_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/597818245_122370249452003274_8709232196729955469_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/599936839_122370249422003274_2511050315329519293_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/643730665_122388426086003274_3604827853855170767_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/645476955_122388426074003274_2278413411215235757_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/669619110_122399363528003274_6890957779155155139_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/669642598_122399363576003274_4004157394852097490_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/671232441_17946331503155973_4265488398485287871_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/671835218_17946331533155973_282923567755615363_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/683457497_17948019831155973_8748813101671875138_n.jpg", alt: "Deck project" },
  { src: "/images/gallery/683492490_17948019786155973_536194177743007646_n.jpg", alt: "Deck project" },
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
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse through our portfolio of completed projects across Kings County and Saint John County.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
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
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious() }}
            className="absolute left-4 text-white hover:text-accent transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext() }}
            className="absolute right-4 text-white hover:text-accent transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          <div className="absolute bottom-4 text-white/70 text-sm">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  )
}
