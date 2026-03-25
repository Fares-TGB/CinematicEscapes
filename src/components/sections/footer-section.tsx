"use client";

const navLinks = [
  { label: "Concept", href: "#concept" },
  { label: "Univers", href: "#univers" },
  { label: "Voyages", href: "#voyages" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function FooterSection() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-white">CINEMATIC ESCAPES</h3>
            <p className="mt-2 text-sm text-neutral-400">Transformez votre passion en voyage</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-500 mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-500 mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Instagram</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">TikTok</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Pinterest</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-neutral-600">
          &copy; 2025 Cinematic Escapes. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
