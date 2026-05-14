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
    <>
      {/* INJEÇÃO DA ANIMAÇÃO DE ENTRADA DO MENU */}
      <style>{`
        @keyframes menuFadeIn {
          0% { opacity: 0; transform: translateY(-15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes mobileMenuReveal {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out animate-[menuFadeIn_1.5s_cubic-bezier(0.16,1,0.3,1)_out] ${
          scrolled
            ? "bg-[#0A0A0A]/85 backdrop-blur-md border-b border-white/5 py-3 md:py-4"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          
          {/* Logo Minimalista */}
          <a
            href="#top"
            className="font-serif text-base md:text-lg tracking-[0.25em] uppercase text-white hover:opacity-80 transition-opacity"
          >
            V. Sopezack
          </a>
          
          {/* Links do Menu Desktop com Linha Dourada Passiva */}
          <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium text-white/60">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-white transition-colors duration-300 relative group py-1"
              >
                {l.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Botão de Agendamento Desktop */}
          <a
            href="#contato"
            className="hidden md:inline-block text-[10px] uppercase tracking-[0.3em] text-[#C5A059] border-b border-[#C5A059]/30 pb-1 hover:border-[#C5A059] transition-colors"
          >
            Agendar
          </a>

          {/* Botão de Menu Mobile Inteligente (Mantido!) */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white/80 text-[10px] uppercase tracking-[0.3em] bg-transparent border-none outline-none cursor-pointer py-1 transition-colors hover:text-white"
            aria-label="Abrir menu"
          >
            {open ? "[ Fechar ]" : "[ Menu ]"}
          </button>
        </div>

        {/* Gaveta do Menu Mobile com Animação de Descida Suave */}
        {open && (
          <div className="md:hidden border-t border-white/5 bg-[#0A0A0A]/95 backdrop-blur-md animate-[mobileMenuReveal_0.4s_ease-out]">
            <div className="flex flex-col px-6 py-8 gap-5 text-[10px] uppercase tracking-[0.3em] text-white/70">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#C5A059] transition-colors py-1 flex items-center justify-between group"
                >
                  {l.label}
                  <span className="text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}