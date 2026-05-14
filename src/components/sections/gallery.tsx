import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

export function Gallery() {
  const catalogImages = [
    { 
      src: portfolio1, 
      category: "Retrato Autoral", 
      id: "01", 
      delay: "0ms", 
      speed: "animate-[float_6s_ease-in-out_infinite]",
      presetMessage: "Olá Vanessa! Fiquei encantada com o estilo do Retrato Autoral na sua galeria e gostaria de entender como funciona para fazer um ensaio assim."
    },
    { 
      src: portfolio2, 
      category: "Posicionamento", 
      id: "02", 
      delay: "200ms", 
      speed: "animate-[float_7s_ease-in-out_infinite_1s]",
      presetMessage: "Olá Vanessa! Vi as fotos de Gestante no seu portfólio e gostaria de saber mais informações sobre pacotes e disponibilidade."
    },
    { 
      src: portfolio3, 
      category: "Gestante", 
      id: "03", 
      delay: "100ms", 
      speed: "animate-[float_5.5s_ease-in-out_infinite_0.5s]",
      presetMessage: "Olá Vanessa, gostei muito da linha de fotos de Posicionamento e Imagem da sua galeria. Quero alinhar meu perfil profissional, como podemos agendar?"
    },
    { 
      src: portfolio4, 
      category: "Essência Feminina", 
      id: "04", 
      delay: "300ms", 
      speed: "animate-[float_8s_ease-in-out_infinite_1.5s]",
      presetMessage: "Olá! Vi o ensaio de Essência Feminina na galeria do seu site e gostaria de bater um papo para planejar uma sessão exclusiva para mim."
    },
  ];

  // Mesma função inteligente usada na seção de Serviços
  const selectStyle = (message: string) => {
    const event = new CustomEvent("setPresetMessage", { detail: message });
    window.dispatchEvent(event);

    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="galeria" className="py-24 md:py-36 bg-[#0A0A0A] relative overflow-hidden">
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 relative z-10">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-4">
              — Portfólio Conceito
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tighter">
              Sua imagem, <span className="italic text-[#C5A059]">sua força.</span>
            </h2>
          </div>
          <p className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-white/40 max-w-[200px] leading-loose">
            A sensibilidade do clique capturando memórias e legados atemporais.
          </p>
        </div>
      </div>

      {/* Grid de Catálogo Fluido */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16 relative z-10">
        {catalogImages.map((img, index) => (
          <div 
            key={index} 
            onClick={() => selectStyle(img.presetMessage)} // Ação de clique adicionada aqui
            className={`reveal group cursor-pointer ${img.speed} ${
              index % 2 === 1 ? "lg:translate-y-8" : ""
            }`}
            style={{ transitionDelay: img.delay }}
          >
            {/* Moldura da Imagem */}
            <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/5 mb-4 md:mb-6 transition-all duration-700 shadow-xl group-hover:border-[#C5A059]/30 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]">
              <img
                src={img.src}
                alt={img.category}
                className="w-full h-full object-cover grayscale scale-100 transition-all duration-[1.2s] ease-out group-hover:grayscale-0 group-hover:scale-105 active:grayscale-0"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
              
              <div className="absolute top-3 right-3 md:top-4 md:right-4 font-mono text-[8px] md:text-[10px] text-white/40 group-hover:text-[#C5A059] transition-colors duration-300">
                [{img.id}]
              </div>
            </div>

            {/* Informações do Catálogo */}
            <div className="flex flex-col pt-2 relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#C5A059] group-hover:w-full transition-all duration-700 ease-out" />
              
              <div className="flex justify-between items-start pt-2 md:pt-3">
                <h3 className="font-serif italic text-sm md:text-lg text-white/90 group-hover:text-[#C5A059] transition-colors duration-300">
                  {img.category}
                </h3>
              </div>
              <span className="font-mono text-[7px] md:text-[8px] uppercase tracking-widest text-white/30 mt-1">
                Gravataí • RS
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}