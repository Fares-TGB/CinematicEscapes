"use client";

import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { Particles } from "@/components/ui/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const heroWords = "Entrez dans l'histoire. Vivez le film.".split(" ");

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#d4a574"
      />
      <Spotlight
        className="top-10 left-full -translate-x-1/2"
        fill="#d4a574"
      />

      <Particles
        className="absolute inset-0"
        quantity={60}
        color="#d4a574"
        size={0.6}
        staticity={30}
        ease={80}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium tracking-wider text-[#d4a574] uppercase">
            Voyages Immersifs
          </span>
        </motion.div>

        <motion.h1 className="mt-8 font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
          {heroWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
              className="inline-block mr-[0.3em] bg-linear-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-neutral-400 leading-relaxed"
        >
          Voyages immersifs sur les lieux de tournage de vos univers
          préférés
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <a href="#voyages">
            <ShimmerButton
              shimmerColor="#d4a574"
              background="rgba(212, 165, 116, 0.1)"
              className="mt-10 mx-auto text-base font-medium"
            >
              Découvrir nos expériences
            </ShimmerButton>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-neutral-500"
          >
            <span className="text-xs tracking-widest uppercase">
              Défiler pour explorer
            </span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
