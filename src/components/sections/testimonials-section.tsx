"use client";

import { Marquee } from "@/components/ui/marquee";
import { BlurFade } from "@/components/ui/blur-fade";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <div className="w-[350px] rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur">
      <Quote className="h-6 w-6 text-[#d4a574]/50 mb-3" />
      <p className="text-white/90 leading-relaxed mb-4 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div>
        <p className="text-sm font-medium text-white">{testimonial.author}</p>
        <p className="text-xs text-neutral-500">{testimonial.trip}</p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      <BlurFade delay={0.1} inView>
        <div className="text-center mb-12">
          <span className="text-sm font-medium tracking-widest uppercase text-[#d4a574]">Témoignages</span>
          <h2 className="mt-4 font-heading text-4xl md:text-6xl font-bold text-white">
            Ils ont vécu l&apos;expérience
          </h2>
        </div>
      </BlurFade>

      <div className="space-y-4">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:35s]">
          {secondRow.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
