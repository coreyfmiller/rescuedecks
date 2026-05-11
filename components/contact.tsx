import { Mail, Phone, MapPin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to transform your outdoor space? Contact us today for a free consultation and estimate. We proudly serve Kings County and Saint John County, New Brunswick.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:info@rescuedecks.ca" className="text-muted-foreground hover:text-primary transition-colors">
                    info@rescuedecks.ca
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Service Area</h3>
                  <p className="text-muted-foreground">
                    Kings County & Saint John County, New Brunswick
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Facebook className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Follow Us</h3>
                  <a 
                    href="https://www.facebook.com/rescuedecksNB" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @rescuedecksNB
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted/50 rounded-xl p-8">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
              Request a Quote
            </h3>
            <form className="space-y-6" action="mailto:info@rescuedecks.ca" method="POST" encType="text/plain">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <Input id="phone" name="phone" type="tel" placeholder="Your phone number" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Interested In
                </label>
                <Input id="service" name="service" placeholder="e.g., Composite Deck, Pergola" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
