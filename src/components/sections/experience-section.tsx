"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { BlurFade } from "@/components/ui/blur-fade";
import { experienceSteps } from "@/lib/data";
import { Compass, PenTool, Camera, Heart } from "lucide-react";

const stepIcons = [Compass, PenTool, Camera, Heart];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      <BackgroundBeams className="opacity-40" />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest uppercase text-[#d4a574]">Comment ça marche</span>
            <h2 className="mt-4 font-heading text-4xl md:text-6xl font-bold text-white">
              Votre aventure en 4 actes
            </h2>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experienceSteps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <BlurFade key={step.id} delay={0.2 + idx * 0.15} inView>
                <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur text-center">
                  <div className="mb-4 text-5xl font-heading font-bold text-[#d4a574]/20">
                    {step.number}
                  </div>
                  <Icon className="mx-auto mb-4 h-8 w-8 text-[#d4a574]" />
                  <h3 className="font-heading text-lg font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
