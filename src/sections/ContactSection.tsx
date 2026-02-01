import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MessageCircle, ArrowRight, MapPin, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ContactSectionProps {
  onOpenContact: () => void;
}

const ContactSection = ({ onOpenContact }: ContactSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-header',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-header',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.contact-card-main',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-card-main',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.contact-info-cards',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-info-grid',
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
      id="contact"
      className="relative bg-[#111827] py-16 lg:py-24"
    >
      {/* Aurora blob */}
      <div
        className="aurora-blob bg-[#4F46E5]"
        style={{
          width: '500px',
          height: '500px',
          right: '-150px',
          top: '10%',
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="contact-header text-center mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#F5F7FF] mb-3">
              Ready to automate the{' '}
              <span className="text-[#4F46E5]">busywork?</span>
            </h2>
            <p className="text-[#A9B3C7] text-sm lg:text-base max-w-md mx-auto">
              Tell us what you're solving. We'll reply with a plan and a clear quote.
            </p>
          </div>

          {/* Main CTA Card */}
          <div className="contact-card-main card-glass card-glow p-6 lg:p-8 mb-6 lg:mb-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div>
                <h3 className="text-xl lg:text-2xl text-[#F5F7FF] font-semibold mb-3">
                  Start your project today
                </h3>
                <p className="text-[#A9B3C7] text-sm mb-6">
                  Get a free consultation and discover how we can streamline your operations.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button onClick={onOpenContact} className="btn-primary">
                    <Mail className="w-4 h-4 mr-2" />
                    Send us an email
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <a
                    href="https://wa.me/919579893850"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                      background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-3">
                  <div className="card-glass p-4 text-center">
                    <div className="text-2xl font-bold text-[#4F46E5] mb-1">50+</div>
                    <div className="font-mono-label">Projects</div>
                  </div>
                  <div className="card-glass p-4 text-center">
                    <div className="text-2xl font-bold text-[#4F46E5] mb-1">10+</div>
                    <div className="font-mono-label">Hours Saved/Week</div>
                  </div>
                  <div className="card-glass p-4 text-center">
                    <div className="text-2xl font-bold text-[#4F46E5] mb-1">25-40%</div>
                    <div className="font-mono-label">Cost Reduction</div>
                  </div>
                  <div className="card-glass p-4 text-center">
                    <div className="text-2xl font-bold text-[#4F46E5] mb-1">₹15K</div>
                    <div className="font-mono-label">Starting Price</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="contact-info-grid grid sm:grid-cols-3 gap-4">
            <div className="contact-info-cards card-glass p-4 lg:p-5">
              <div className="w-10 h-10 rounded-xl bg-[#4F46E5]/20 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5 text-[#4F46E5]" />
              </div>
              <span className="font-mono-label block mb-1">Email</span>
              <a
                href="mailto:support@codemechanix.in"
                className="text-[#F5F7FF] text-sm hover:text-[#4F46E5] transition-colors"
              >
                Support@codemechanix.in
              </a>
            </div>

            <div className="contact-info-cards card-glass p-4 lg:p-5">
              <div className="w-10 h-10 rounded-xl bg-[#4F46E5]/20 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-[#4F46E5]" />
              </div>
              <span className="font-mono-label block mb-1">Response Time</span>
              <span className="text-[#F5F7FF] text-sm">Within 24 hours</span>
            </div>

            <div className="contact-info-cards card-glass p-4 lg:p-5">
              <div className="w-10 h-10 rounded-xl bg-[#4F46E5]/20 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-[#4F46E5]" />
              </div>
              <span className="font-mono-label block mb-1">Location</span>
              <span className="text-[#F5F7FF] text-sm">India (IST)</span>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 lg:mt-16 pt-6 border-t border-white/10 text-center">
            <div className="text-xl lg:text-2xl font-bold text-[#F5F7FF] mb-2">
              CodeMechanix
            </div>
            <p className="text-[#A9B3C7] text-xs lg:text-sm mb-4">
              Custom automation & software solutions for small businesses
            </p>
            <p className="text-[#A9B3C7]/50 text-xs">
              © 2026 CodeMechanix.in Built for small businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
