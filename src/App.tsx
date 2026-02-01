import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import ContactSection from './sections/ContactSection';
import ContactFormModal from './sections/ContactFormModal';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Refresh ScrollTrigger on mount
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="relative bg-[#0B0F17] min-h-screen">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isContactOpen} onClose={closeContact} />

      {/* Main content - 3 compact sections */}
      <main className="relative">
        {/* Section 1: Hero */}
        <HeroSection onOpenContact={openContact} />

        {/* Section 2: Services + Testimonials + Demos */}
        <ServicesSection onOpenContact={openContact} />

        {/* Section 3: Contact + Footer */}
        <ContactSection onOpenContact={openContact} />
      </main>
    </div>
  );
}

export default App;