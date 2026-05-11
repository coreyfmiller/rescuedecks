import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { DeckServices } from "@/components/deck-services"
import { OtherServices } from "@/components/other-services"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DeckServices />
        <OtherServices />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
