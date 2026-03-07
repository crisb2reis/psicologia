import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { About } from "@/components/About";
import { Specialties } from "@/components/Specialties";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer, WhatsAppButton } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <Hero />
      <Problems />
      <About />
      <Specialties />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
