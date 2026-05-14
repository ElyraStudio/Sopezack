export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A] py-12 md:py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
        
        {/* Identidade da Marca (Lado Esquerdo no PC / Centro no Mobile) */}
        <div className="text-center md:text-left">
          <p className="font-serif text-xl md:text-2xl tracking-[0.2em] uppercase mb-2 text-white">
            V. Sopezack
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">
            © 2026 Vanessa Sopezack — Gravataí · RS
          </p>
        </div>

        {/* Créditos de Desenvolvimento (Lado Direito no PC / Centro no Mobile) */}
        <div className="text-center md:text-right border-t border-white/5 md:border-none pt-4 md:pt-0 w-full md:w-auto">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
            Desenvolvido por{" "}
            <a
              href="https://elyras.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:text-white transition-colors duration-300 border-b border-[#C5A059]/20 hover:border-white pb-0.5"
            >
              Elyra
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}