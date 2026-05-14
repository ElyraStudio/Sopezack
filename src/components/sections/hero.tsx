import heroDesktop from "@/assets/hero-portrait.jpg"; 
import heroMobile from "@/assets/FOTO.jpg"; 

export function Hero() {
  return (
    <section className="relative h-[100svh] w-full flex items-end justify-start bg-[#050505] overflow-hidden">
      
      {/* BACKGROUND CINEMATOGRÁFICO COM ZOOM CONTÍNUO */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroDesktop} />
          <img
            src={heroMobile}
            alt="Fotografia de Retrato Feminino em Gravataí - Vanessa Sopezack"
            className="w-full h-full object-cover object-center brightness-[0.35] md:brightness-[0.4] animate-[slowZoom_30s_linear_infinite]"
          />
        </picture>
        {/* Camadas de vinheta para profundidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent hidden md:block" />
      </div>

      {/* INJEÇÃO DE ANIMAÇÕES EXCLUSIVAS */}
      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        @keyframes revealUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        @keyframes bounceMinimal {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>

      {/* CONTEÚDO EDITORIAL ASSIMÉTRICO */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-24 flex flex-col items-start text-left animate-[revealUp_1.5s_cubic-bezier(0.16,1,0.3,1)_out]">
        
        {/* Indicador de Alta Costura Fotográfica */}
        <div className="flex items-center gap-4 mb-6 md:mb-8 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-[#C5A059]">
          <span>[ Estúdio de Fotografias ]</span>
          <span className="w-8 h-[1px] bg-[#C5A059]/30" />
          <span className="text-white/40 hidden sm:inline">29° 56' 20" S 50° 59' 38" W</span>
        </div>

        {/* Título de Grife Internacional */}
        <h1 className="font-serif font-light text-[11vw] md:text-[6.5vw] lg:text-[5.5vw] leading-[1.05] text-white tracking-tighter max-w-4xl mb-8 md:mb-10 selection:bg-[#C5A059]/20">
          Retratos que revelam <br className="hidden sm:block" />
          sua essência com <span className="italic font-normal text-[#C5A059] font-serif">autoridade.</span>
        </h1>

        {/* Bloco Inferior Interativo */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-8 border-t border-white/10 pt-8 max-w-4xl">
          
          <p className="font-body text-xs md:text-sm text-white/60 max-w-md leading-relaxed font-light">
            A fotografia autoral como ferramenta definitiva de posicionamento, elegância e legado visual. Atendimentos exclusivos sob agendamento.
          </p>

          <div className="flex flex-col items-start sm:items-end gap-3 shrink-0">
            <a
              href="#contato"
              className="group relative inline-flex items-center justify-center px-10 py-4 border border-[#C5A059]/40 text-white uppercase text-[9px] tracking-[0.4em] font-medium overflow-hidden transition-all duration-500 hover:border-[#C5A059]"
            >
              <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                Reservar Experiência
              </span>
            </a>
            
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              Estúdio Privado · Gravataí, RS
            </span>
          </div>

        </div>

      </div>

      {/* INDICADOR DE SCROLL ADAPTATIVO (DESKTOP E MOBILE) */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 md:left-auto md:right-12 md:translate-x-0 z-10 flex flex-col items-center gap-2">
        {/* No mobile mostra uma setinha discreta flutuando, no desktop mostra o texto vertical */}
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/20 hidden md:block [writing-mode:vertical-lr]">
          Scroll
        </span>
        
        {/* Linha que corre (Desktop) */}
        <div className="w-[1px] h-10 bg-white/10 relative overflow-hidden hidden md:block">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#C5A059] animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>

        {/* Ícone de indicação sutil (Mobile) */}
        <div className="md:hidden flex flex-col items-center gap-1 opacity-50 animate-[bounceMinimal_2.5s_ease-in-out_infinite]">
          <span className="font-mono text-[7px] uppercase tracking-[0.4em] text-white/40 mb-1">Role</span>
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#C5A059" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>

    </section>
  );
}