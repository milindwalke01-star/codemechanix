import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, TrendingDown, Clock, Mail, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ValueSectionProps {
  id: string;
  zIndex: number;
  headline: string;
  highlightWord: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryAction: () => void;
  ctaSecondaryAction: () => void;
  cardTitle: string;
  cardType: 'time' | 'errors' | 'costs' | 'custom';
  cardData: {
    items: Array<{
      label: string;
      value?: string;
    }>;
    chip?: string;
  };
}

const ValueSection = ({
  id,
  zIndex,
  headline,
  highlightWord,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  ctaPrimaryAction,
  ctaSecondaryAction,
  cardTitle,
  cardType,
  cardData,
}: ValueSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0-30%)
      scrollTl.fromTo(
        portraitRef.current,
        { x: '-50vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        headlineRef.current,
        { x: '55vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        [subheadlineRef.current, ctaRef.current],
        { y: '10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.05
      );

      scrollTl.fromTo(
        cardRef.current,
        { x: '60vw', opacity: 0, scale: 0.96 },
        { x: 0, opacity: 1, scale: 1, ease: 'none' },
        0.08
      );

      // SETTLE (30-70%): Elements hold position

      // EXIT (70-100%)
      scrollTl.fromTo(
        headlineRef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        [subheadlineRef.current, ctaRef.current],
        { y: 0, opacity: 1 },
        { y: '-6vh', opacity: 0, ease: 'power2.in' },
        0.72
      );

      const rotation = cardType === 'errors' || cardType === 'custom' ? -2 : 2;
      scrollTl.fromTo(
        cardRef.current,
        { y: 0, rotation: 0, opacity: 1 },
        { y: '18vh', rotation, opacity: 0, ease: 'power2.in' },
        0.74
      );

      scrollTl.fromTo(
        portraitRef.current,
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.76
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [cardType]);

  const renderCardContent = () => {
    switch (cardType) {
      case 'time':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-[#4F46E5]" />
                <span className="text-[#F5F7FF] text-sm">Data entry</span>
              </div>
              <span className="text-[#4F46E5] font-semibold text-sm">↓ 80%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#4F46E5]" />
                <span className="text-[#F5F7FF] text-sm">Follow-ups</span>
              </div>
              <span className="text-[#4F46E5] font-semibold text-sm">↓ 60%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#4F46E5]" />
                <span className="text-[#F5F7FF] text-sm">Reporting</span>
              </div>
              <span className="text-[#4F46E5] font-semibold text-sm">↓ 70%</span>
            </div>
          </div>
        );
      case 'errors':
        return (
          <div className="space-y-3">
            {cardData.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#4F46E5]/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-[#4F46E5]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-[#F5F7FF] text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        );
      case 'costs':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-white/5 rounded-xl">
                <span className="font-mono-label block mb-2">Before</span>
                <span className="text-[#A9B3C7] text-sm">
                  Manual hours + rework
                </span>
              </div>
              <div className="p-4 bg-[#4F46E5]/20 rounded-xl border border-[#4F46E5]/30">
                <span className="font-mono-label block mb-2 text-[#4F46E5]">
                  After
                </span>
                <span className="text-[#F5F7FF] text-sm">
                  Automated flows + alerts
                </span>
              </div>
            </div>
            {cardData.chip && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#4F46E5]/20 rounded-full">
                <TrendingDown className="w-4 h-4 text-[#4F46E5]" />
                <span className="text-[#4F46E5] text-sm font-medium">
                  {cardData.chip}
                </span>
              </div>
            )}
          </div>
        );
      case 'custom':
        return (
          <div className="space-y-4">
            <div className="space-y-3">
              {cardData.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#4F46E5]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#4F46E5] text-xs font-bold">
                      {idx + 1}
                    </span>
                  </div>
                  <span className="text-[#F5F7FF] text-sm">{item.label}</span>
                </div>
              ))}
            </div>
            {cardData.chip && (
              <div className="pt-3 border-t border-white/10">
                <span className="font-mono-label block mb-1">Starting at</span>
                <span className="text-[#4F46E5] text-xl font-bold">
                  {cardData.chip}
                </span>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className="section-pinned bg-[#0B0F17]"
      style={{ zIndex }}
    >
      {/* Aurora blob */}
      <div
        className="aurora-blob bg-[#4F46E5]"
        style={{
          width: '500px',
          height: '500px',
          left: '25%',
          top: '30%',
        }}
      />

      {/* Portrait Panel */}
      <div ref={portraitRef} className="portrait-panel">
        <img
          src="/hero-portrait.jpg"
          alt="Professional at work"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Area */}
      <div className="content-area">
        {/* Headline */}
        <div ref={headlineRef} className="mt-[18vh]">
          <h2 className="text-[clamp(32px,4vw,56px)] leading-[1.1] text-[#F5F7FF]">
            {headline.split(highlightWord)[0]}
            <span className="text-[#4F46E5]">{highlightWord}</span>
            {headline.split(highlightWord)[1]}
          </h2>
        </div>

        {/* Subheadline */}
        <div ref={subheadlineRef} className="mt-6 max-w-[38vw]">
          <p className="text-lg text-[#A9B3C7] leading-relaxed">{subheadline}</p>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="mt-8 flex flex-wrap gap-4">
          <button onClick={ctaPrimaryAction} className="btn-primary">
            {ctaPrimary}
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          <button onClick={ctaSecondaryAction} className="btn-secondary">
            {ctaSecondary}
          </button>
        </div>

        {/* Floating UI Card */}
        <div
          ref={cardRef}
          className="card-glass card-glow mt-auto mb-[8vh] p-6 w-full max-w-[34vw]"
        >
          <span className="font-mono-label block mb-4">{cardTitle}</span>
          {renderCardContent()}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;