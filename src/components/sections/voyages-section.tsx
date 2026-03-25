"use client";

import { useState, useMemo } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { trips, universes } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

function TripCard({ trip }: { trip: (typeof trips)[number] }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#1a1a1a] transition-all duration-300 hover:border-white/10">
      <div className="relative h-56 overflow-hidden">
        <img
          src={trip.imageUrl}
          alt={trip.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 cinematic-image"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          {trip.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-white mb-2 group-hover:text-[#d4a574] transition-colors">
          {trip.title}
        </h3>
        <p className="text-sm text-neutral-400 mb-4 line-clamp-2">
          {trip.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-neutral-500">
            <span>{trip.location}</span> · <span>{trip.duration}</span>
          </div>
          <div className="text-lg font-semibold text-[#d4a574]">
            {trip.priceFrom} &euro;
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <BorderBeam
          size={200}
          duration={8}
          colorFrom="#d4a574"
          colorTo="#f59e0b"
        />
      </div>
    </div>
  );
}

export function VoyagesSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTrips = useMemo(() => {
    if (activeFilter === "all") return trips;
    return trips.filter((t) => t.universe === activeFilter);
  }, [activeFilter]);

  const filters = [
    { id: "all", label: "Tous" },
    ...universes.map((u) => ({ id: u.id, label: u.name })),
  ];

  return (
    <section id="voyages" className="relative py-24 bg-[#111111]">
      <div className="mx-auto max-w-7xl px-4">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-12">
            <span className="text-sm font-medium tracking-widest uppercase text-[#d4a574]">
              Catalogue
            </span>
            <h2 className="mt-4 font-heading text-4xl md:text-6xl font-bold text-white">
              Nos voyages
            </h2>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all",
                  activeFilter === f.id
                    ? "bg-[#d4a574] text-black"
                    : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </BlurFade>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTrips.map((trip) => (
              <motion.div
                key={trip.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <TripCard trip={trip} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
