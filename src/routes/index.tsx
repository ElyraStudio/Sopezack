import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { useReveal } from "@/hooks/use-reveal";

// Importação das seções componentizadas
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Studio } from "@/components/sections/studio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vanessa Sopezack — Fotógrafa de Mulheres 30+ | Gravataí, RS" },
      {
        name: "description",
        content: "Fotografia autoral para mulheres 30+ e ensaios de família em Gravataí/RS. Presença, postura e reconhecimento em cada retrato.",
      },
      { property: "og:title", content: "Vanessa Sopezack — Fotografia Autoral" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  // Inicializa as animações de scroll
  useReveal();

  return (
    <div id="top" className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C5A059]/30">
      <SiteNav />

      <main>
        {/* Impacto visual imediato */}
        <Hero />
        
        {/* Catálogo de fotos logo em seguida */}
        <Gallery />
        
        {/* Conexão com a profissional e autoridade de marca */}
        <About />
        
        {/* Detalhes dos serviços e conversão */}
        <Services />
        <Contact />
        <Studio />
      </main>

      <Footer />
    </div>
  );
}