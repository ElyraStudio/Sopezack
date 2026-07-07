import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface GalleryImage {
  src: string;
  category: string;
  id: string;
  delay: string;
  speed: string;
  presetMessage: string;
}

export function Gallery() {
  const [catalogImages, setCatalogImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const { data, error } = await supabase
          .from("fotos")
          .select("*")
          .order("id", { ascending: false });

        if (error) throw error;

        if (data && data.length > 0) {
          const uploadedImages = data.map((item: any, index: number) => {
            const displayId = String(index + 1).padStart(2, "0");
            const delays = ["0ms", "100ms", "200ms", "300ms"];
            const randomSpeeds = [
              "animate-[float_6s_ease-in-out_infinite]",
              "animate-[float_7s_ease-in-out_infinite_1s]",
              "animate-[float_5.5s_ease-in-out_infinite_0.5s]",
              "animate-[float_8s_ease-in-out_infinite_1.5s]"
            ];

            return {
              src: item.url,
              category: item.categoria,
              id: displayId,
              delay: delays[index % delays.length],
              speed: randomSpeeds[index % randomSpeeds.length],
              presetMessage: `Olá Vanessa! Vi as fotos de ${item.categoria} na galeria do seu site e gostaria de saber mais informações sobre o seu trabalho.`
            };
          });

          setCatalogImages(uploadedImages);
        } else {
          setCatalogImages([]);
        }
      } catch (err) {
        console.error("Erro ao buscar fotos da galeria:", err);
      }
    }

    fetchGallery();
  }, []);

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
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
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

      {/* Container Responsivo */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {catalogImages.length === 0 ? (
          <div className="text-center py-12 border border-zinc-800 rounded-2xl bg-zinc-900/10">
            <p className="text-sm text-zinc-500">Nenhuma foto publicada na galeria ainda.</p>
          </div>
        ) : (
          <div className="flex md:grid md:grid-cols-4 gap-x-6 gap-y-16 overflow-x-auto md:overflow-x-visible no-scrollbar snap-x snap-mandatory scroll-smooth pb-8 md:pb-0">
            
            {catalogImages.map((img, index) => (
              <div 
                key={index} 
                onClick={() => selectStyle(img.presetMessage)}
                className={`group cursor-pointer flex-shrink-0 w-[75vw] sm:w-[45vw] md:w-auto snap-start ${img.speed} ${
                  index % 2 === 1 ? "md:translate-y-8" : ""
                }`}
                style={{ transitionDelay: img.delay }}
              >
                {/* Moldura da Imagem - Sem grayscale nem no mobile, nem no desktop */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-950 border border-white/10 mb-4 md:mb-6 transition-all duration-700 shadow-xl group-hover:border-[#C5A059]/30 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]">
                  <img
                    src={img.src}
                    alt={img.category}
                    className="w-full h-full object-cover scale-100 transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-20 transition-opacity duration-700" />
                  
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 font-mono text-[9px] md:text-[10px] text-white/60 group-hover:text-[#C5A059] transition-colors duration-300">
                    [{img.id}]
                  </div>
                </div>

                {/* Informações do Catálogo */}
                <div className="flex flex-col pt-2 relative">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
                  <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#C5A059] group-hover:w-full transition-all duration-700 ease-out" />
                  
                  <div className="flex justify-between items-start pt-2 md:pt-3">
                    <h3 className="font-serif italic text-base md:text-lg text-white/95 group-hover:text-[#C5A059] transition-colors duration-300">
                      {img.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest text-white/40 mt-1">
                    Gravataí • RS
                  </span>
                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </section>
  );
}