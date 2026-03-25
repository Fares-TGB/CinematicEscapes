"use client";

import { useState } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { ConceptSection } from "@/components/sections/concept-section";
import { UniversesSection } from "@/components/sections/universes-section";
import { VoyagesSection } from "@/components/sections/voyages-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";
import { navItems } from "@/lib/data";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleSelectUniverse = (universeId: string) => {
    setActiveFilter(universeId);
  };

  return (
    <main>
      <FloatingNav navItems={navItems} />
      <HeroSection />
      <ConceptSection />
      <UniversesSection onSelectUniverse={handleSelectUniverse} />
      <VoyagesSection activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <ExperienceSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
