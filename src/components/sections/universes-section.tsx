"use client";

import { WobbleCard } from "@/components/ui/wobble-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { universes } from "@/lib/data";

export function UniversesSection() {
  return (
    <section id="univers" className="relative py-24 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest uppercase text-[#d4a574]">
              Collections
            </span>
            <h2 className="mt-4 font-heading text-4xl md:text-6xl font-bold text-white">
              Choisissez votre univers
            </h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
              Chaque univers est une porte vers un monde que vous avez toujours
              rêvé d&apos;explorer
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universes.map((universe, idx) => (
            <BlurFade key={universe.id} delay={0.1 + idx * 0.1} inView>
              <WobbleCard containerClassName={`h-[320px] ${universe.color}`}>
                <div className="relative z-10">
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    {universe.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                    {universe.description}
                  </p>
                  <a
                    href="#voyages"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-colors"
                  >
                    Explorer
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
                <img
                  src={universe.imageUrl}
                  alt={universe.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-30 cinematic-image"
                  loading="lazy"
                />
              </WobbleCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
