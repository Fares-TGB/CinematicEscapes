"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/moving-border";
import { motion } from "motion/react";

export function CTASection() {
  return (
    <section id="contact" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#d4a574" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-6xl font-bold text-white"
        >
          Votre prochaine scène commence ici
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-neutral-400 max-w-xl mx-auto"
        >
          Demandez un devis personnalisé et laissez-nous écrire votre prochain chapitre.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Button
            borderRadius="1.75rem"
            containerClassName="h-14 w-auto"
            className="px-8 text-base font-medium"
            borderClassName="bg-[radial-gradient(#d4a574_40%,transparent_60%)]"
          >
            Demander un devis gratuit
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 text-sm text-neutral-500"
        >
          ou contactez-nous à{" "}
          <a href="mailto:contact@cinematicescapes.fr" className="text-[#d4a574] hover:underline">
            contact@cinematicescapes.fr
          </a>
        </motion.p>
      </div>
    </section>
  );
}
