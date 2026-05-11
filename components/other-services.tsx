import { Home, Tent, Warehouse, PanelTop, Lightbulb } from "lucide-react"

const services = [
  {
    title: "Pergolas",
    description: "Add shade and architectural interest to your outdoor space with a custom-built pergola.",
    icon: Home
  },
  {
    title: "Gazebos",
    description: "Create a charming focal point in your yard with a beautiful enclosed or open gazebo.",
    icon: Tent
  },
  {
    title: "Sheds",
    description: "Quality storage solutions built to match your home and withstand the elements.",
    icon: Warehouse
  },
  {
    title: "Privacy Screens",
    description: "Enjoy your outdoor space in seclusion with custom privacy screens and fencing.",
    icon: PanelTop
  },
  {
    title: "Landscape Lighting",
    description: "Extend your outdoor enjoyment into the evening with professional landscape lighting.",
    icon: Lightbulb
  }
]

export function OtherServices() {
  return (
    <section id="other-services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Additional Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond decks, we offer a full range of outdoor structures and improvements to complete your backyard vision.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-muted/50 rounded-lg p-6 text-center hover:bg-muted transition-colors group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
