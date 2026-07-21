import Image from "next/image";
import Hero from "./components/landing/hero";
import Footer from "./components/landing/footer";
import Feature from "./components/landing/feature";
import Cta from "./components/landing/cta";
import Testimonials from "./components/landing/testimonials";
import Contact from "./components/landing/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Cta />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
