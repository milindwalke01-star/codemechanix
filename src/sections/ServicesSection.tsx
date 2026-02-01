import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Shield, TrendingDown, Code, Quote, Play, CheckCircle, FileText, Bell } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ServicesSectionProps {
  onOpenContact: () => void;
}

const ServicesSection = (_props: ServicesSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header
      gsap.fromTo(
        '.services-header',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.services-header',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Service cards
      gsap.fromTo(
        '.service-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Testimonials
      gsap.fromTo(
        '.testimonial-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Demo section
      gsap.fromTo(
        '.demo-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.demos-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      image: '/section-time.jpg',
      title: 'Save Time',
      highlight: '10+ hours/week',
      description: 'Map repetitive tasks and replace them with reliable workflows.',
      icon: Clock,
      metrics: [
        { label: 'Data entry', value: '↓ 80%' },
        { label: 'Follow-ups', value: '↓ 60%' },
        { label: 'Reporting', value: '↓ 70%' },
      ],
    },
    {
      image: '/section-errors.jpg',
      title: 'Reduce Errors',
      highlight: '99% accuracy',
      description: 'Built-in checks and validations at every step.',
      icon: Shield,
      features: ['Required fields enforced', 'Cross-sheet validation', 'Auto-alerts on anomalies'],
    },
    {
      image: '/section-costs.jpg',
      title: 'Cut Costs',
      highlight: '25-40% savings',
      description: 'Do more without adding headcount. Tools that pay for themselves.',
      icon: TrendingDown,
      comparison: { before: 'Manual hours + rework', after: 'Automated flows + alerts' },
    },
    {
      image: '/section-custom.jpg',
      title: 'Custom Solutions',
      highlight: 'Starting ₹15,000',
      description: 'Built for your process, not off-the-shelf.',
      icon: Code,
      deliverables: ['Automation playbook', 'Internal dashboard', 'Integration + docs'],
    },
  ];

  const testimonials = [
    {
      quote: "CodeMechanix turned our weekly reporting chaos into a 10-minute automated routine.",
      name: 'A. Ramesh',
      role: 'Operations Lead, Chennai',
      initials: 'AR',
    },
    {
      quote: "They built a client portal in days—not months—and it actually feels like us.",
      name: 'S. Priya',
      role: 'Founder, Studio Kollektiv',
      initials: 'SP',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-[#0B0F17] py-16 lg:py-24"
    >
      {/* Aurora blob */}
      <div
        className="aurora-blob bg-[#4F46E5]"
        style={{
          width: '500px',
          height: '500px',
          left: '-150px',
          top: '20%',
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="services-header text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#4F46E5]/10 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse" />
            <span className="font-mono-label text-[#4F46E5]">50+ Projects Delivered</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#F5F7FF] mb-3">
            Built for teams who want{' '}
            <span className="text-[#4F46E5]">reliability</span> without the bloat.
          </h2>
          <p className="text-[#A9B3C7] text-sm lg:text-base">
            Custom automation solutions designed for small businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 max-w-7xl mx-auto mb-16 lg:mb-20">
          {services.map((service, idx) => (
            <div key={idx} className="service-card group">
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="font-mono-label text-[#4F46E5]">{service.highlight}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex items-center gap-2 mb-2">
                <service.icon className="w-4 h-4 text-[#4F46E5]" />
                <h3 className="text-[#F5F7FF] font-semibold text-sm lg:text-base">{service.title}</h3>
              </div>
              <p className="text-[#A9B3C7] text-xs lg:text-sm mb-3">{service.description}</p>

              {/* Details */}
              {service.metrics && (
                <div className="space-y-1.5">
                  {service.metrics.map((m, i) => (
                    <div key={i} className="flex justify-between text-xs">
                      <span className="text-[#A9B3C7]">{m.label}</span>
                      <span className="text-[#4F46E5] font-medium">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {service.features && (
                <div className="space-y-1.5">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-[#4F46E5]" />
                      <span className="text-[#A9B3C7] text-xs">{f}</span>
                    </div>
                  ))}
                </div>
              )}

              {service.comparison && (
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <span className="text-[#A9B3C7]/60 block mb-1">Before</span>
                    <span className="text-[#A9B3C7]">{service.comparison.before}</span>
                  </div>
                  <div className="p-2 bg-[#4F46E5]/20 rounded-lg border border-[#4F46E5]/30">
                    <span className="text-[#4F46E5] block mb-1">After</span>
                    <span className="text-[#F5F7FF]">{service.comparison.after}</span>
                  </div>
                </div>
              )}

              {service.deliverables && (
                <div className="space-y-1.5">
                  {service.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-[#4F46E5]/20 flex items-center justify-center">
                        <span className="text-[#4F46E5] text-[10px] font-bold">{i + 1}</span>
                      </div>
                      <span className="text-[#A9B3C7] text-xs">{d}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div id="work" className="mb-16 lg:mb-20">
          <h3 className="text-center text-lg lg:text-xl text-[#F5F7FF] mb-6 lg:mb-8">
            What our clients say
          </h3>
          <div className="testimonials-grid grid md:grid-cols-2 gap-4 lg:gap-5 max-w-3xl mx-auto">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card card-glass p-5 lg:p-6">
                <Quote className="w-6 h-6 text-[#4F46E5] mb-3" />
                <p className="text-[#F5F7FF] text-sm lg:text-base leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white text-sm font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[#F5F7FF] font-medium text-sm">{t.name}</div>
                    <div className="text-[#A9B3C7] text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Videos */}
        <div>
          <h3 className="text-center text-lg lg:text-xl text-[#F5F7FF] mb-6 lg:mb-8">
            Watch our solutions in action
          </h3>
          <div className="demos-grid grid sm:grid-cols-2 gap-4 lg:gap-5 max-w-3xl mx-auto">
            <div className="demo-card">
              <div className="youtube-embed group cursor-pointer mb-3">
                <div className="absolute inset-0 flex items-center justify-center bg-[#111827]/70 group-hover:bg-[#111827]/60 transition-colors z-10">
                  <div className="w-12 h-12 rounded-full bg-[#4F46E5] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                  </div>
                </div>
                <img
                  src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                  alt="Demo thumbnail"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              <p className="text-[#F5F7FF] text-sm font-medium flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#4F46E5]" />
                Invoice automation overview
              </p>
            </div>

            <div className="demo-card">
              <div className="youtube-embed group cursor-pointer mb-3">
                <div className="absolute inset-0 flex items-center justify-center bg-[#111827]/70 group-hover:bg-[#111827]/60 transition-colors z-10">
                  <div className="w-12 h-12 rounded-full bg-[#4F46E5] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                  </div>
                </div>
                <img
                  src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                  alt="Demo thumbnail"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              <p className="text-[#F5F7FF] text-sm font-medium flex items-center gap-2">
                <Bell className="w-4 h-4 text-[#4F46E5]" />
                Dashboard + alerts walkthrough
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
