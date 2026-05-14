import { useState } from "react";
import local1 from "@/assets/local1.jpg";
import local2 from "@/assets/local2.jpg";

export function Studio() {
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="estudio" className="py-24 md:py-36 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      
      {/* Estilo de flutuação orgânica simplificado */}
      <style>{`
        @keyframes floatStudio {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(0.3deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Lado Esquerdo: Conteúdo Enxuto */}
          <div className="reveal lg:col-span-5 space-y-6">
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-[#C5A059]">
              — O Espaço Privativo
            </p>
            
            <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tighter leading-[1.1]">
              Um refúgio desenhado para <br />
              <span className="italic text-[#C5A059]">sua experiência.</span>
            </h2>

            <p className="font-body text-sm text-white/70 leading-relaxed font-light">
              Localizado estrategicamente em Gravataí, RS, o estúdio é um ambiente totalmente reservado, climatizado e intimista. O cenário perfeito para garantir seu conforto e privacidade em cada retrato.
            </p>

            {/* Endereço e botões de ação */}
            <div className="pt-6 border-t border-white/5 space-y-4">
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">Estúdio Vanessa Sopezack</span>
                <span className="font-mono text-[9px] text-white/30 tracking-wide">Gravataí · Rio Grande do Sul</span>
              </div>
              
              <div className="flex flex-wrap gap-5 pt-2">
                <button 
                  onClick={() => setShowMap(true)}
                  className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-[#C5A059] border-b border-[#C5A059]/30 pb-0.5 hover:border-[#C5A059] transition-all duration-300 cursor-pointer"
                >
                  Ver mapa no site ↗
                </button>
                
                <a 
                  href="https://www.google.com/maps/@-29.9285107,-51.0344285,3a,35.9y,69.8h,89.28t/data=!3m7!1e1!3m5!1s9dqIaBQheTtOKIbsN9t7Lw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0.7235050095214461%26panoid%3D9dqIaBQheTtOKIbsN9t7Lw%26yaw%3D69.80402455821505!7i16384!8i8192?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-white/40 border-b border-white/10 pb-0.5 hover:text-white hover:border-white transition-all duration-300"
                >
                  Abrir no app
                </a>
              </div>
            </div>
          </div>

          {/* Lado Direito: Composição Assimétrica Clássica com 2 Fotos */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative min-h-[300px] md:min-h-[450px] mt-8 lg:mt-0">
            
            {/* Foto Principal */}
            <div className="reveal col-span-8 relative aspect-[4/5] bg-neutral-900 border border-white/5 overflow-hidden shadow-2xl z-10 animate-[floatStudio_7s_ease-in-out_infinite]">
              <img 
                src={local1} 
                alt="Ambiente principal do estúdio" 
                className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Foto Secundária */}
            <div 
              className="reveal col-span-5 absolute right-0 top-12 w-[45%] aspect-[3/4] bg-neutral-900 border border-white/10 overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.8)] z-20 animate-[floatStudio_6s_ease-in-out_infinite_1s]"
              style={{ transitionDelay: "200ms" }}
            >
              <img 
                src={local2} 
                alt="Detalhes do estúdio boutique" 
                className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
              />
            </div>

          </div>

        </div>
      </div>

      {/* POP-UP INTERATIVO COM O MAPA (MODAL) */}
      {showMap && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]">
          <div className="relative w-full max-w-3xl bg-[#0A0A0A] border border-white/10 p-2 shadow-2xl">
            
            {/* Botão de Fechar */}
            <button 
              onClick={() => setShowMap(false)}
              className="absolute -top-10 right-0 font-mono text-[10px] uppercase tracking-widest text-white/60 hover:text-white cursor-pointer bg-transparent border-none py-2"
            >
              [ Fechar Mapa ]
            </button>

            {/* Iframe Real do Google Maps */}
            <div className="w-full aspect-[16/9] bg-neutral-900">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55314.18602511452!2d-51.0315707!3d-29.9389745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951975b9f7a77d13%3A0x6b876fc1a62dc8eb!2zR3JhdmF0YcOtLCBSUw!5e0!3m2!1spt-BR!2sbr!4v1715610000000!5m2!1spt-BR!2sbr"
                className="w-full h-full border-none grayscale invert contrast-[90%] brightness-[85%]"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      )}

      {/* Animação rápida de fade do Pop-up */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}