export function Services() {
  const experiences = [
    {
      number: "01",
      title: "Retrato Feminino Autoral",
      description: "Uma sessão desenhada para reconectar você com a sua essência. Mais do que fotografia, é um resgate da sua autoestima, registrando sua força e delicadeza em imagens atemporais.",
      details: ["Direção de postura guiada", "Estúdio privativo em Gravataí", "Análise prévia de estilo"],
      presetMessage: "Gostaria de solicitar um orçamento e verificar a disponibilidade para o Retrato Feminino Autoral."
    },
    {
      number: "02",
      title: "Gestante e Maternidade",
      description: "Eternizando a poesia e a transformação do momento mais sublime de uma mulher. Um ensaio leve, acolhedor e focado nas emoções e memórias que sua família guardará com carinho.",
      details: ["Ambiente climatizado e seguro", "Tempo no ritmo da mãe", "Participação da família"],
      presetMessage: "Olá! Gostaria de mais informações sobre o ensaio de Gestante e Maternidade."
    },
    {
      number: "03",
      title: "Posicionamento & Imagem",
      description: "Retratos estratégicos para mulheres líderes e profissionais que desejam alinhar sua presença digital à sua autoridade real de mercado. Postura que transmite confiança.",
      details: ["Alinhamento de branding", "Foco em autoridade", "Formatos prontos para redes"],
      presetMessage: "Olá Vanessa, tenho interesse em alinhar minha imagem profissional com o ensaio de Posicionamento & Imagem."
    }
  ];

  // Função mágica que envia o texto para o formulário e rola a tela
  const selectService = (message: string) => {
    // Dispara um evento personalizado que o componente de Contato vai escutar
    const event = new CustomEvent("setPresetMessage", { detail: message });
    window.dispatchEvent(event);

    // Rola suavemente até a seção de contato
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicos" className="py-20 md:py-40 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho */}
        <div className="reveal mb-12 md:mb-24 max-w-2xl">
          <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-4">
            — A Experiência
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tighter">
            Como deseja ser <br />
            <span className="italic text-[#C5A059]">lembrada?</span>
          </h2>
        </div>

        {/* Lista de Serviços */}
        <div className="flex flex-col border-t border-white/10">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="reveal group relative py-8 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start border-b border-white/10 transition-all duration-500 px-3 md:px-4 overflow-hidden bg-gradient-to-r from-transparent to-transparent active:from-white/[0.02] md:hover:from-white/[0.01]"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 left-0 w-[2px] h-full bg-[#C5A059] scale-y-0 origin-top transition-transform duration-500 md:group-hover:scale-y-100" />

              <div className="lg:col-span-1 font-mono text-xs md:text-sm text-[#C5A059]/60 md:group-hover:text-[#C5A059] transition-colors duration-300">
                [{exp.number}]
              </div>

              <div className="lg:col-span-6">
                <h3 className="font-serif text-lg md:text-2xl text-white mb-2 md:mb-4 md:group-hover:text-[#C5A059] transition-colors duration-500">
                  {exp.title}
                </h3>
                <p className="text-white/70 font-body text-xs md:text-base leading-relaxed font-light max-w-xl">
                  {exp.description}
                </p>
              </div>

              <div className="lg:col-span-3 pt-2 lg:pt-1">
                <ul className="grid grid-cols-1 gap-2">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-white/40 font-mono text-[9px] md:text-[10px] uppercase tracking-wider">
                      <span className="w-1 h-1 bg-[#C5A059]/50 rounded-full shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botão de clique alterado para disparar a função */}
              <div className="lg:col-span-2 lg:text-right pt-4 lg:pt-1">
                <button 
                  onClick={() => selectService(exp.presetMessage)}
                  className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-[#C5A059] md:text-white/50 md:group-hover:text-white transition-all duration-300 border-b border-[#C5A059]/30 md:border-white/10 md:group-hover:border-[#C5A059] pb-1 cursor-pointer"
                >
                  Consultar vagas 
                  <span className="inline-block transition-transform duration-300 md:group-hover:translate-x-1">→</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Rodapé da Seção */}
        <div 
          className="reveal mt-12 md:mt-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-6 border border-white/5 bg-white/[0.01] p-5 md:p-6 backdrop-blur-sm shadow-xl"
          style={{ transitionDelay: "450ms" }}
        >
          <p className="font-body text-xs md:text-sm text-white/50 font-light max-w-md">
            Vagas limitadas por mês para garantir a exclusividade e a dedicação total a cada história.
          </p>
          <button
            onClick={() => selectService("Olá Vanessa! Gostaria de conversar para personalizar e entender melhor como funcionam os ensaios.")}
            className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#b08e4f] text-black font-mono text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-500 w-full lg:w-auto text-center shadow-lg active:scale-[0.98] cursor-pointer"
          >
            Personalizar meu ensaio
          </button>
        </div>

      </div>
    </section>
  );
}