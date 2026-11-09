import { useEffect, Component } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Amenities from "@/components/Amenities";
import DecorSection from "@/components/DecorSection";
import Gallery from "@/components/Gallery";
import HoursSection from "@/components/HoursSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-ivory p-8 text-center">
          <p className="font-display text-xl font-bold text-forest">
            Algo deu errado ao carregar a página. Tente recarregar.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return (
    <div className="overflow-x-clip bg-ivory font-sans text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Amenities />
        <DecorSection />
        <Gallery />
        <HoursSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <Page />
    </ErrorBoundary>
  );
}

export default App;
