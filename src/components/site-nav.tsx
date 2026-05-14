import { useEffect, useState } from "react";

const links = [
  { href: "#galeria", label: "Galeria" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg md:text-xl tracking-[0.25em] uppercase"
        >
          V. Sopezack
        </a>
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.3em] font-medium text-foreground/60">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-accent transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contato"
          className="hidden md:inline-block text-[10px] uppercase tracking-[0.3em] text-accent border-b border-accent/40 pb-1 hover:border-accent transition-colors"
        >
          Agendar
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground/80 text-[11px] uppercase tracking-[0.3em]"
          aria-label="Abrir menu"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="flex flex-col px-6 py-6 gap-4 text-[11px] uppercase tracking-[0.3em] text-foreground/70">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
