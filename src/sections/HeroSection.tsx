import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Layout, Calculator, Clock, TrendingDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onOpenContact: () => void;
}

const HeroSection = ({ onOpenContact }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        '.hero-headline',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      );

      tl.fromTo(
        '.hero-subheadline',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      );

      tl.fromTo(
        '.hero-cta',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.3'
      );

      tl.fromTo(
        '.hero-card',
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6 },
        '-=0.3'
      );

      tl.fromTo(
        '.hero-image',
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#0B0F17] flex items-center pt-16 lg:pt-0"
    >
      {/* Aurora blob */}
      <div
        className="aurora-blob bg-[#4F46E5]"
        style={{
          width: '600px',
          height: '600px',
          right: '-200px',
          top: '10%',
        }}
      />

      <div className="w-full px-4 sm:px-6 lg:px-10 py-8 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Content */}
          <div ref={contentRef} className="order-2 lg:order-1">
            <h1 className="hero-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-[#F5F7FF] mb-4 lg:mb-6">
              Small business ops,{' '}
              <span className="text-[#4F46E5]">automated.</span>
            </h1>

            <p className="hero-subheadline text-base lg:text-lg text-[#A9B3C7] leading-relaxed mb-6 lg:mb-8 max-w-lg">
              We build custom tools, workflows, and micro-apps that save hours every
              week—without hiring more staff.
            </p>

            <div className="hero-cta flex flex-wrap gap-3 mb-8">
              <button onClick={onOpenContact} className="btn-primary text-sm lg:text-base">
                Book a free call
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button onClick={scrollToServices} className="btn-secondary text-sm lg:text-base">
                See services
              </button>
            </div>

            {/* Feature Card */}
            <div className="hero-card card-glass card-glow p-4 lg:p-5 max-w-md">
              <span className="font-mono-label block mb-3">What We Build</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#4F46E5]/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-[#4F46E5]" />
                  </div>
                  <span className="text-[#F5F7FF] text-xs lg:text-sm">Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#4F46E5]/20 flex items-center justify-center flex-shrink-0">
                    <Layout className="w-4 h-4 text-[#4F46E5]" />
                  </div>
                  <span className="text-[#F5F7FF] text-xs lg:text-sm">Dashboards</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#4F46E5]/20 flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-4 h-4 text-[#4F46E5]" />
                  </div>
                  <span className="text-[#F5F7FF] text-xs lg:text-sm">Portals</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="hero-image relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden">
              <img
                src="/hero-portrait.jpg"
                alt="Professional automation solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/60 via-transparent to-transparent" />
              
              {/* Floating stats */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                <div className="card-glass px-3 py-2 flex-1">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#4F46E5]" />
                    <span className="text-[#F5F7FF] text-xs font-semibold">10+ hrs saved</span>
                  </div>
                </div>
                <div className="card-glass px-3 py-2 flex-1">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-green-500" />
                    <span className="text-[#F5F7FF] text-xs font-semibold">25-40% savings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;