export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-16 bg-background/80 backdrop-blur-md">
        <div className="font-[family-name:var(--font-playfair)] text-lg tracking-[0.3em] uppercase text-gold">
          Le Sur Mesure
        </div>
        <div className="hidden md:flex items-center gap-10 font-[family-name:var(--font-cormorant)] text-sm tracking-[0.2em] uppercase text-cream-muted">
          <a href="#services" className="hover:text-gold transition-colors duration-300">
            Services
          </a>
          <a href="#atelier" className="hover:text-gold transition-colors duration-300">
            L&apos;Atelier
          </a>
          <a href="#contact" className="hover:text-gold transition-colors duration-300">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Decorative diagonal lines */}
        <div className="diagonal-line top-[20%] right-[10%] animate-fade-in delay-1000" />
        <div className="diagonal-line bottom-[25%] left-[5%] animate-fade-in delay-1200" />

        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.06)_0%,_transparent_70%)]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Decorative top line */}
          <div className="mx-auto mb-10 w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent animate-draw-line delay-200" />

          <p className="font-[family-name:var(--font-cormorant)] text-sm md:text-base tracking-[0.4em] uppercase text-gold-light mb-6 animate-fade-up delay-300">
            Bespoke Tailoring &middot; Casablanca
          </p>

          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight mb-8 animate-fade-up delay-400">
            <span className="block">L&apos;Élégance</span>
            <span className="block mt-2 text-gold-gradient italic">Sur Mesure</span>
          </h1>

          <p className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl text-cream-muted max-w-xl mx-auto leading-relaxed mb-12 animate-fade-up delay-500">
            Chaque pièce est une promesse — taillée à la main, ajustée à votre silhouette,
            façonnée pour durer au-delà des saisons.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-up delay-600">
            <a
              href="#contact"
              className="btn-gold inline-flex items-center gap-3 px-10 py-4 bg-gold text-background font-[family-name:var(--font-cormorant)] text-sm tracking-[0.25em] uppercase font-semibold hover:bg-gold-light transition-colors duration-300"
            >
              Prendre Rendez-vous
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 px-10 py-4 border border-gold/30 text-gold font-[family-name:var(--font-cormorant)] text-sm tracking-[0.25em] uppercase font-semibold hover:border-gold/60 hover:bg-gold/5 transition-all duration-300"
            >
              Nos Services
            </a>
          </div>

          {/* Decorative bottom line */}
          <div className="mx-auto mt-16 w-px h-20 bg-gradient-to-b from-gold/40 to-transparent animate-fade-in delay-1000" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-6 md:px-16">
        {/* Section divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.4em] uppercase text-gold mb-4">
              Savoir-Faire
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium tracking-tight">
              Nos Services
            </h2>
            <div className="mx-auto mt-6 w-16 h-px bg-gold/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {/* Service 1 */}
            <div className="service-card group p-10 md:p-12 bg-charcoal text-center cursor-default">
              <div className="mb-6 text-gold text-3xl font-[family-name:var(--font-playfair)] italic">
                I
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl mb-4 tracking-wide">
                Costume Sur Mesure
              </h3>
              <div className="w-8 h-px bg-gold/40 mx-auto mb-5 group-hover:w-12 transition-all duration-500" />
              <p className="font-[family-name:var(--font-cormorant)] text-cream-muted leading-relaxed text-base md:text-lg">
                Du choix du tissu à la coupe finale — un costume taillé selon vos mesures exactes,
                avec des finitions entièrement à la main.
              </p>
            </div>

            {/* Service 2 */}
            <div className="service-card group p-10 md:p-12 bg-charcoal text-center cursor-default">
              <div className="mb-6 text-gold text-3xl font-[family-name:var(--font-playfair)] italic">
                II
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl mb-4 tracking-wide">
                Chemises &amp; Accessoires
              </h3>
              <div className="w-8 h-px bg-gold/40 mx-auto mb-5 group-hover:w-12 transition-all duration-500" />
              <p className="font-[family-name:var(--font-cormorant)] text-cream-muted leading-relaxed text-base md:text-lg">
                Chemises en coton égyptien, cravates en soie, pochettes et boutons de manchette —
                chaque détail compte.
              </p>
            </div>

            {/* Service 3 */}
            <div className="service-card group p-10 md:p-12 bg-charcoal text-center cursor-default">
              <div className="mb-6 text-gold text-3xl font-[family-name:var(--font-playfair)] italic">
                III
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl mb-4 tracking-wide">
                Retouches &amp; Conseil
              </h3>
              <div className="w-8 h-px bg-gold/40 mx-auto mb-5 group-hover:w-12 transition-all duration-500" />
              <p className="font-[family-name:var(--font-cormorant)] text-cream-muted leading-relaxed text-base md:text-lg">
                Ajustements sur pièces existantes et conseil en style personnel —
                pour une garde-robe qui vous ressemble.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atelier Section */}
      <section id="atelier" className="relative py-32 px-6 md:px-16 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.4em] uppercase text-gold mb-4">
            Notre Philosophie
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-medium leading-snug tracking-tight mb-8">
            Un vêtement sur mesure n&apos;habille pas seulement le corps —{" "}
            <span className="italic text-gold-gradient">il révèle le caractère.</span>
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto mb-8" />
          <p className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl text-cream-muted max-w-2xl mx-auto leading-relaxed">
            Depuis notre atelier à Casablanca, nous perpétuons un art ancestral —
            celui de la coupe, du drapé et du détail. Chaque client est unique.
            Chaque création l&apos;est aussi.
          </p>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="relative py-32 px-6 md:px-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

        <div className="max-w-2xl mx-auto text-center">
          <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.4em] uppercase text-gold mb-4">
            Rendez-vous
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Visitez l&apos;Atelier
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto mb-8" />
          <p className="font-[family-name:var(--font-cormorant)] text-lg text-cream-muted leading-relaxed mb-4">
            Casablanca, Maroc
          </p>
          <p className="font-[family-name:var(--font-cormorant)] text-lg text-cream-muted leading-relaxed mb-10">
            Sur rendez-vous uniquement
          </p>

          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-3 px-12 py-5 bg-gold text-background font-[family-name:var(--font-cormorant)] text-sm tracking-[0.25em] uppercase font-semibold hover:bg-gold-light transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contacter via WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/10 py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-[family-name:var(--font-playfair)] text-sm tracking-[0.3em] uppercase text-gold/60">
            Le Sur Mesure
          </div>
          <p className="font-[family-name:var(--font-cormorant)] text-sm text-cream-muted/50 tracking-wider">
            &copy; 2026 Le Sur Mesure — Casablanca, Maroc
          </p>
        </div>
      </footer>
    </div>
  );
}
