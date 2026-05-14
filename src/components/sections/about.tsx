import fotoVanessa from "@/assets/fotografa.jpg";

export function About() {
  return (
    <section id="sobre" className="relative py-20 md:py-40 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
      
      {/* --- BACKGROUND ANIME: OS 4 FIOS DOURADOS --- */}
      <div className="absolute inset-0 pointer-events-none opacity-40 select-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Fio 01 */}
          <path
            d="M-100,200 Q200,400 500,150 T1200,300"
            fill="none"
            stroke="#C5A059"
            strokeWidth="1"
            className="animate-[wave_18s_ease-in-out_infinite_alternate]"
          />
          {/* Fio 02 */}
          <path
            d="M-50,350 Q300,100 700,450 T1300,200"
            fill="none"
            stroke="#C5A059"
            strokeWidth="1.2"
            opacity="0.7"
            className="animate-[wave_24s_ease-in-out_infinite_alternate_2s]"
          />
          {/* Fio 03 */}
          <path
            d="M-120,600 Q400,700 800,350 T1400,500"
            fill="none"
            stroke="#C5A059"
            strokeWidth="0.8"
            opacity="0.5"
            className="animate-[wave_20s_ease-in-out_infinite_alternate_1s]"
          />
          {/* Fio 04 */}
          <path
            d="M-80,100 Q150,500 600,250 T1150,650"
            fill="none"
            stroke="#C5A059"
            strokeWidth="1.5"
            opacity="0.6"
            className="animate-[wave_30s_ease-in-out_infinite_alternate_3s]"
          />
        </svg>
      </div>

      {/* Injectando a animação keyframe diretamente no escopo do componente */}
      <style>{`
        @keyframes wave {
          0% { transform: translateY(-20px) skewX(-2px); }
          100% { transform: translateY(20px) skewX(2px); }
        }
      `}</style>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          
          {/* Bloco de Imagem: Agora aparece PRIMEIRO no celular (order-1) */}
          <div className="lg:col-span-5 order-1">
            <div className="relative aspect-[3/4] max-h-[420px] lg:max-h-none mx-auto w-full overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
              <img
                src={fotoVanessa}
                alt="Vanessa Sopezack - Especialista em Fotografia em Gravataí"
                className="w-full h-full object-cover object-center transition-transform duration-[2s] hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-widest text-white/40 bg-black/60 backdrop-blur-sm px-3 py-1.5">
                Desde 2005 © 2026
              </div>
            </div>
          </div>

          {/* Bloco de Conteúdo: Aparece DEPOIS no celular (order-2) com textos condensados */}
          <div className="lg:col-span-7 order-2 flex flex-col justify-center">
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-3">
              — A Retratista
            </p>
            
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-tight mb-6">
              Eternizando histórias e <br className="hidden md:block" />
              <span className="italic text-[#C5A059]">revelando sua essência.</span>
            </h2>

            <div className="h-[1px] w-12 bg-[#C5A059]/40 mb-6" />

            {/* Copywriting enxuto focado em escaneabilidade no celular */}
            <div className="space-y-4 text-white/80 font-body text-sm md:text-base lg:text-lg leading-relaxed font-light">
              <p>
                Me chamo <strong className="text-white font-normal">Vanessa Sopezack</strong>, especialista em fotografia de mulheres e gestantes com <span className="text-[#C5A059] font-normal">21 anos de legado</span> e olhar apurado.
              </p>
              
              <p className="font-serif italic text-white/90 border-l-2 border-[#C5A059] pl-4 my-4 text-base md:text-xl bg-white/[0.02] py-2 pr-2">
                "Escolhi a fotografia porque acredito em eternizar momentos. Cada clique guarda emoções, histórias e memórias para serem lembradas com carinho."
              </p>

              <p>
                Iniciei em <strong className="text-white font-normal">2005</strong> para criar conexões verdadeiras. Atendo exclusivamente em meu estúdio em <span className="text-[#C5A059]">Gravataí, RS</span>, em um espaço planejado para transformar suas memórias em retratos atemporais.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contato"
                className="inline-block w-full md:w-auto text-center px-10 py-4 border border-[#C5A059]/30 text-white uppercase text-[10px] tracking-[0.3em] hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-500 bg-black/40 backdrop-blur-sm"
              >
                Agendar um horário
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}