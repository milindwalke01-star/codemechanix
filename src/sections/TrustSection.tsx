import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TrustSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const metricRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const testimonial1Ref = useRef<HTMLDivElement>(null);
  const testimonial2Ref = useRef<HTMLDivElement>(null);
  const demo1Ref = useRef<HTMLDivElement>(null);
  const demo2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Metric block
      gsap.fromTo(
        metricRef.current,
        { y: '6vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: metricRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Headline block
      gsap.fromTo(
        headlineRef.current,
        { x: '6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Testimonial cards
      gsap.fromTo(
        testimonial1Ref.current,
        { x: '-8vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: testimonial1Ref.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        testimonial2Ref.current,
        { x: '8vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: testimonial2Ref.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Demo embeds
      gsap.fromTo(
        demo1Ref.current,
        { y: '8vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: demo1Ref.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        demo2Ref.current,
        { y: '8vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: demo2Ref.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="trust"
      className="relative bg-[#0B0F17] py-20 lg:py-32"
    >
      {/* Aurora blob */}
      <div
        className="aurora-blob bg-[#4F46E5]"
        style={{
          width: '700px',
          height: '700px',
          left: '50%',
          top: '10%',
          transform: 'translateX(-50%)',
        }}
      />

      <div className="relative z-10 px-6 lg:px-[6vw]">
        {/* Top row: Metric + Headline */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16">
          {/* Metric Block */}
          <div ref={metricRef} className="lg:w-[28vw]">
            <div className="text-[clamp(64px,8vw,120px)] font-bold text-[#4F46E5] leading-none">
              50+
            </div>
            <div className="font-mono-label mt-2">Projects Delivered</div>
          </div>

          {/* Headline Block */}
          <div ref={headlineRef} className="lg:w-[54vw] lg:pt-8">
            <h2 className="text-[clamp(28px,3.5vw,48px)] leading-[1.15] text-[#F5F7FF]">
              Built for teams who want{' '}
              <span className="text-[#4F46E5]">reliability</span> without the
              enterprise bloat.
            </h2>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Testimonial 1 */}
          <div ref={testimonial1Ref} className="card-glass p-6 lg:p-8">
            <Quote className="w-8 h-8 text-[#4F46E5] mb-4" />
            <p className="text-lg text-[#F5F7FF] leading-relaxed mb-6">
              "CodeMechanix turned our weekly reporting chaos into a 10-minute
              automated routine."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white font-bold">
                AR
              </div>
              <div>
                <div className="text-[#F5F7FF] font-semibold">A. Ramesh</div>
                <div className="text-[#A9B3C7] text-sm">
                  Operations Lead, Chennai
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div ref={testimonial2Ref} className="card-glass p-6 lg:p-8">
            <Quote className="w-8 h-8 text-[#4F46E5] mb-4" />
            <p className="text-lg text-[#F5F7FF] leading-relaxed mb-6">
              "They built a client portal in days—not months—and it actually feels
              like us."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white font-bold">
                SP
              </div>
              <div>
                <div className="text-[#F5F7FF] font-semibold">S. Priya</div>
                <div className="text-[#A9B3C7] text-sm">
                  Founder, Studio Kollektiv
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Embeds */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Demo 1 */}
          <div ref={demo1Ref}>
            <h3 className="text-[#F5F7FF] font-semibold mb-4 flex items-center gap-2">
              <Play className="w-5 h-5 text-[#4F46E5]" />
              Watch: Invoice automation overview
            </h3>
            <div className="youtube-embed group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center bg-[#111827]/80 group-hover:bg-[#111827]/70 transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#4F46E5] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </div>
              </div>
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                alt="Demo thumbnail"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>

          {/* Demo 2 */}
          <div ref={demo2Ref}>
            <h3 className="text-[#F5F7FF] font-semibold mb-4 flex items-center gap-2">
              <Play className="w-5 h-5 text-[#4F46E5]" />
              Watch: Dashboard + alerts walkthrough
            </h3>
            <div className="youtube-embed group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center bg-[#111827]/80 group-hover:bg-[#111827]/70 transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#4F46E5] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </div>
              </div>
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                alt="Demo thumbnail"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;