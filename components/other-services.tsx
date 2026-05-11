import Image from "next/image"
import { Tent, PanelTop } from "lucide-react"

const featuredServices = [
  {
    title: "Pergolas",
    description: "Add shade and architectural interest to your outdoor space with a custom-built pergola.",
    image: "/images/otherservices/pergola.jpg",
  },
  {
    title: "Sheds",
    description: "Quality storage solutions built to match your home and withstand the elements.",
    image: "/images/otherservices/shed.jpg",
  },
  {
    title: "Landscape Lighting",
    description: "Extend your outdoor enjoyment into the evening with professional landscape lighting.",
    image: "/images/otherservices/decklighting.jpg",
  },
]

const additionalServices = [
  {
    title: "Gazebos",
    description: "Create a charming focal point in your yard with a beautiful enclosed or open gazebo.",
    icon: Tent,
  },
  {
    title: "Privacy Screens",
    description: "Enjoy your outdoor space in seclusion with custom privacy screens and fencing.",
    icon: PanelTop,
  },
]

export function OtherServices() {
  return (
    <section id="other-services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Additional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beyond decks, we offer a full range of outdoor structures and improvements to complete your backyard vision.
          </p>
        </div>

        {/* Featured services with images */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredServices.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl overflow-hidden bg-muted/50 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-semibold text-xl text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional services without images */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {additionalServices.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-muted/50 rounded-xl p-6 text-center hover:bg-muted transition-colors group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
