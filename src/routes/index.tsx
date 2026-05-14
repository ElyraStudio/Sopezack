import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { useReveal } from "@/hooks/use-reveal";
import heroPortrait from "@/assets/hero-portrait.jpg";
import aboutAtelier from "@/assets/about-atelier.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vanessa Sopezack — Fotógrafa de Mulheres 30+ | Gravataí, RS" },
      {
        name: "description",
        content:
          "Fotografia autoral para mulheres 30+ e ensaios de família em Gravataí/RS. Presença, postura e reconhecimento em cada retrato.",
      },
      { property: "og:title", content: "Vanessa Sopezack — Fotografia Autoral" },
      {
        property: "og:description",
        content:
          "Retratos femininos e ensaios de família em Gravataí/RS. Uma experiência fotográfica sofisticada e acolhedora.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Vanessa Sopezack Fotografia",
          description:
            "Fotografia autoral para mulheres 30+ e ensaios de família.",
          areaServed: "Gravataí, Rio Grande do Sul, Brasil",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Gravataí",
            addressRegion: "RS",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroPortrait}
            alt="Retrato autoral de mulher por Vanessa Sopezack"
            width={1920}
            height={1280}
            className="w-full h-full object-cover object-center brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background" />
        </div>

        <div className="relative z-10 text-center px-6 animate-reveal">
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent mb-8">
            Fotografia Autoral · Gravataí · RS
          </p>
          <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] max-w-4xl mx-auto">
            Vanessa <span className="italic">Sopezack</span>
          </h1>
          <div className="mx-auto my-8 h-px w-16 bg-accent/60" />
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] text-foreground/80 mb-12">
            Presença · Postura · Reconhecimento
          </p>
          <a
            href="#contato"
            className="inline-block px-10 py-4 border border-accent text-accent uppercase text-[11px] tracking-[0.3em] hover:bg-accent hover:text-accent-foreground transition-all duration-500"
          >
            Agende sua Experiência
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-16 bg-gradient-to-b from-accent/60 to-transparent" />
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="sobre"
        className="py-32 md:py-40 px-6 md:px-10 max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-8">
              — Sobre
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-8">
              A fotografia como ato <br />
              de <span className="italic text-accent">reconhecimento.</span>
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-6 max-w-md">
              Sou especialista em retratar mulheres que decidiram ocupar o
              próprio espaço. Cada ensaio é uma conversa silenciosa entre
              presença e direção — um trabalho autoral que traduz maturidade,
              suavidade e autoridade em imagem.
            </p>
            <p className="text-foreground/60 leading-relaxed mb-10 max-w-md">
              Mais do que registrar uma pose, meu olhar revela a verdade que o
              tempo esculpiu. Uma experiência pensada para mulheres 30+ que
              buscam se enxergar com inteireza.
            </p>
            <div className="h-px w-12 bg-accent mb-6" />
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40">
              Gravataí, Rio Grande do Sul
            </p>
          </div>
          <div className="reveal relative">
            <img
              src={aboutAtelier}
              alt="Atelier fotográfico de Vanessa Sopezack"
              width={800}
              height={1000}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-accent/40 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="galeria" className="pb-32 md:pb-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto mb-16 px-2 md:px-4 flex items-end justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
              — Obras Selecionadas
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic">
              Galeria
            </h2>
          </div>
          <p className="hidden md:block font-mono text-[10px] text-foreground/40 uppercase tracking-widest max-w-xs text-right">
            Retratos femininos e ensaios atemporais
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:auto-rows-[180px]">
          <div className="reveal md:col-span-4 md:row-span-3">
            <img
              src={portfolio1}
              alt="Retrato editorial feminino em blazer preto"
              width={1080}
              height={1620}
              loading="lazy"
              className="w-full h-full object-cover aspect-[2/3] md:aspect-auto"
            />
          </div>
          <div className="reveal md:col-span-8 md:row-span-2">
            <img
              src={portfolio2}
              alt="Retrato cinematográfico de mulher junto à janela"
              width={1600}
              height={900}
              loading="lazy"
              className="w-full h-full object-cover aspect-[16/9] md:aspect-auto"
            />
          </div>
          <div className="reveal md:col-span-4 md:row-span-3">
            <img
              src={portfolio3}
              alt="Detalhe de mãos femininas com anéis dourados"
              width={1080}
              height={1620}
              loading="lazy"
              className="w-full h-full object-cover aspect-[2/3] md:aspect-auto"
            />
          </div>
          <div className="reveal md:col-span-4 md:row-span-2">
            <img
              src={portfolio4}
              alt="Retrato espontâneo de mulher sorrindo"
              width={1080}
              height={1080}
              loading="lazy"
              className="w-full h-full object-cover aspect-square md:aspect-auto"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="servicos"
        className="bg-card/40 border-y border-border py-32 md:py-40 px-6 md:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-20">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
                — Experiências
              </p>
              <h2 className="font-display text-4xl md:text-5xl">
                Investimento em <span className="italic">legado</span>
              </h2>
            </div>
            <p className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest max-w-xs">
              Atendimento exclusivo sob agendamento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <ServiceCard
              number="01"
              title="Ensaios Femininos"
              body="Uma jornada autoral de três horas dedicada à descoberta da sua melhor versão. Direção de pose, atmosfera e estilo inclusos."
            />
            <ServiceCard
              number="02"
              title="Posicionamento de Imagem"
              body="Imagens estratégicas para mulheres que desejam comunicar autoridade, sofisticação e marca pessoal no mundo digital."
            />
            <ServiceCard
              number="03"
              title="Ensaios de Família"
              body="O registro do tempo que não volta. Ensaios atemporais para celebrar o vínculo e a história que une os seus."
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contato"
        className="py-32 md:py-40 px-6 md:px-10 max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div className="reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6">
              — Contato
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-8">
              Vamos criar algo <span className="italic">eterno</span>?
            </h2>
            <p className="text-foreground/60 leading-relaxed mb-12 max-w-md">
              Atendimento exclusivo em estúdio privativo em Gravataí/RS, com
              disponibilidade para sessões externas e projetos autorais sob
              consulta.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-foreground/80 hover:text-accent transition-colors"
              >
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent w-8">
                  01
                </span>
                <span className="text-sm tracking-wide">WhatsApp</span>
                <span className="flex-1 h-px bg-border group-hover:bg-accent transition-colors" />
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
                  Mensagem
                </span>
              </a>
              <a
                href="https://instagram.com/vanessasopezack"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-foreground/80 hover:text-accent transition-colors"
              >
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent w-8">
                  02
                </span>
                <span className="text-sm tracking-wide">Instagram</span>
                <span className="flex-1 h-px bg-border group-hover:bg-accent transition-colors" />
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
                  @vanessasopezack
                </span>
              </a>
              <div className="group flex items-center gap-4 text-foreground/80">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent w-8">
                  03
                </span>
                <span className="text-sm tracking-wide">Localização</span>
                <span className="flex-1 h-px bg-border" />
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
                  Gravataí · RS
                </span>
              </div>
            </div>
          </div>

          <form
            className="reveal space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const name = data.get("name");
              const message = data.get("message");
              const text = `Olá Vanessa! Sou ${name}. ${message}`;
              window.open(
                `https://wa.me/5500000000000?text=${encodeURIComponent(text)}`,
                "_blank",
              );
            }}
          >
            <Field label="Nome" name="name" type="text" required />
            <Field label="E-mail" name="email" type="email" required />
            <Field label="Telefone" name="phone" type="tel" />
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40 mb-3">
                Mensagem
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-sm resize-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto inline-block px-10 py-4 border border-accent text-accent uppercase text-[11px] tracking-[0.3em] hover:bg-accent hover:text-accent-foreground transition-all duration-500"
            >
              Enviar Solicitação
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <p className="font-display text-2xl tracking-[0.2em] uppercase mb-3">
              V. Sopezack
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40">
              Fotografia Autoral · Gravataí · RS
            </p>
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] text-foreground/60">
            <a
              href="https://instagram.com/vanessasopezack"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 text-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.5em] text-foreground/30">
            © {new Date().getFullYear()} Vanessa Sopezack — Todos os direitos
            reservados
          </p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="reveal group">
      <div className="w-full h-px bg-accent/30 mb-8 overflow-hidden">
        <div className="h-full bg-accent w-0 group-hover:w-full transition-all duration-700 ease-out" />
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6">
        {number}
      </p>
      <h3 className="font-display text-2xl md:text-3xl italic mb-5 text-foreground">
        {title}
      </h3>
      <p className="text-sm text-foreground/60 leading-relaxed">{body}</p>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40 mb-3">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-sm transition-colors"
      />
    </div>
  );
}
