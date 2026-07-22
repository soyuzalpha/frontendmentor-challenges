import BottomGrid from "@/components/landing/bottom-grid";
import Footer from "@/components/landing/footer";
import GridSection from "@/components/landing/grid";
import Hero from "@/components/landing/hero";
import Testimonials from "@/components/landing/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <GridSection />
      <Testimonials />
      <BottomGrid />
      <Footer />
    </main>
  );
}
