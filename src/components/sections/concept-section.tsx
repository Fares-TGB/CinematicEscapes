"use client";

import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { BlurFade } from "@/components/ui/blur-fade";
import { Clapperboard, Users, Sparkles } from "lucide-react";

export function ConceptSection() {
  return (
    <section id="concept" className="relative">
      <LampContainer className="min-h-auto! pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold bg-linear-to-br from-slate-200 to-slate-500 bg-clip-text text-transparent">
            Le Set-Jetting, réinventé
          </h2>
        </motion.div>
      </LampContainer>

      <div className="relative bg-slate-950 -mt-40 pb-24">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-8">
          <BlurFade delay={0.1} inView>
            <div className="rounded-2xl border border-white/5 bg-white/2 p-8 backdrop-blur">
              <Clapperboard className="mb-4 h-8 w-8 text-[#d4a574]" />
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                Plus qu&apos;un voyage
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Nous ne vendons pas des destinations. Nous vendons des
                narrations. Chaque voyage est conçu pour vous plonger au
                cœur de votre univers préféré.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <div className="rounded-2xl border border-white/5 bg-white/2 p-8 backdrop-blur">
              <Users className="mb-4 h-8 w-8 text-[#d4a574]" />
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                Devenez le personnage
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Marchez dans les pas de vos héros. Des châteaux gothiques de
                la Dark Romance aux rues animées de Séoul, chaque étape est
                une scène où vous êtes le protagoniste.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <div className="rounded-2xl border border-white/5 bg-white/2 p-8 backdrop-blur">
              <Sparkles className="mb-4 h-8 w-8 text-[#d4a574]" />
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                Curatés par des fans
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Nos itinéraires sont conçus par des passionnés qui
                connaissent chaque détail, chaque référence, chaque lieu
                emblématique.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
