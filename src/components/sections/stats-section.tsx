"use client";

import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";
import { stats } from "@/lib/data";

export function StatsSection() {
  return (
    <section className="relative py-20 bg-[#111111]">
      <div className="mx-auto max-w-6xl px-4">
        <BlurFade delay={0.1} inView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <NumberTicker
                    value={stat.value}
                    className="font-heading text-4xl md:text-5xl font-bold text-[#d4a574]"
                    delay={0.2 + idx * 0.1}
                  />
                  <span className="font-heading text-4xl md:text-5xl font-bold text-[#d4a574]">
                    {stat.suffix}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
