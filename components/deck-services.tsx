import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const deckTypes = [
  {
    title: "Pressure Treated Decks",
    description: "Affordable and durable, pressure treated lumber is chemically treated to resist rot, decay, and insects. A great choice for budget-conscious homeowners.",
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=600&h=400&fit=crop",
    features: ["Budget-friendly", "Rot & decay resistant", "Paintable & stainable", "15-20 year lifespan"]
  },
  {
    title: "Pool Decks",
    description: "Designed specifically for poolside environments with slip-resistant surfaces and materials that stay cool underfoot. Perfect for your backyard paradise.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&h=400&fit=crop",
    features: ["Slip-resistant surfaces", "Heat-resistant materials", "Water-resistant", "Low maintenance"]
  },
  {
    title: "Cedar Decks",
    description: "Natural beauty with built-in resistance to rot and insects. Cedar&apos;s rich tones and aromatic qualities make it a premium choice for outdoor living.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    features: ["Natural beauty", "Naturally rot resistant", "Aromatic wood", "Environmentally friendly"]
  },
  {
    title: "Composite Decks",
    description: "The ultimate low-maintenance option. Composite decking combines wood fibers and plastic for a durable, fade-resistant surface that never needs staining.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
    features: ["Zero maintenance", "25+ year warranty", "Fade resistant", "Eco-friendly materials"]
  }
]

export function DeckServices() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Deck Building Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our selection of quality deck materials, each offering unique benefits for your outdoor space.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {deckTypes.map((deck) => (
            <Card key={deck.title} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={deck.image}
                  alt={deck.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">{deck.title}</CardTitle>
                <CardDescription className="text-lg">{deck.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
                  {deck.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-base text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
