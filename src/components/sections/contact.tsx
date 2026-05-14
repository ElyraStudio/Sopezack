import { useState, useEffect } from "react";

export function Contact() {
  return (
    <section id="contato" className="py-32 md:py-40 px-6 md:px-10 max-w-6xl mx-auto relative z-10">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Bloco de Informações */}
        <div className="reveal">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#C5A059] mb-6">
            — Contato
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8 text-white">
            Vamos criar algo <br />
            <span className="italic text-[#C5A059]">eterno</span>?
          </h2>
          <div className="space-y-4 text-white">
            <ContactLink 
              icon="01" 
              label="WhatsApp" 
              href="https://wa.me/5551984203368" 
              value="Conversar agora" 
            />
            <ContactLink 
              icon="02" 
              label="Instagram" 
              href="https://www.instagram.com/vanessasopezackfotografia/" 
              value="@vanessasopezackfotografia" 
            />
          </div>
        </div>

        {/* Formulário Inteligente */}
        <ContactForm />

      </div>
    </section>
  );
}

function ContactLink({ icon, label, href, value }: any) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-white/80 hover:text-[#C5A059] transition-colors">
      <span className="font-mono text-[10px] text-[#C5A059] w-8">[{icon}]</span>
      <span className="text-sm tracking-wide">{label}</span>
      <span className="flex-1 h-[1px] bg-white/10 group-hover:bg-[#C5A059]/30" />
      <span className="font-mono text-[10px] opacity-60 transition-colors group-hover:text-white">{value}</span>
    </a>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Ouvinte inteligente para capturar o clique do serviço lá de cima
  useEffect(() => {
    const handlePresetMessage = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setMessage(customEvent.detail);
      }
    };

    window.addEventListener("setPresetMessage", handlePresetMessage);
    
    // Limpa o ouvinte quando o componente desmonta para evitar vazamento de memória
    return () => {
      window.removeEventListener("setPresetMessage", handlePresetMessage);
    };
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !message) {
      alert("Por favor, preencha o seu nome e a mensagem.");
      return;
    }

    const text = `Olá Vanessa! Me chamo *${name}* e vim através do seu site.\n\n*Mensagem:* ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5551984203368?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <form className="reveal space-y-8" onSubmit={handleSendMessage}>
      
      {/* Campo de Nome */}
      <div className="flex flex-col">
        <label className="font-mono text-[10px] text-white/40 uppercase mb-1 tracking-widest">Seu Nome</label>
        <input 
          type="text" 
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Mariana Silva"
          className="bg-transparent border-b border-white/10 focus:border-[#C5A059] outline-none py-2 text-sm text-white transition-colors placeholder:text-white/10 font-light" 
        />
      </div>

      {/* Campo de Mensagem */}
      <div className="flex flex-col">
        <label className="font-mono text-[10px] text-white/40 uppercase mb-1 tracking-widest">Sua Mensagem</label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Conte um pouco sobre o ensaio que você deseja realizar..."
          className="w-full bg-transparent border-b border-white/10 focus:border-[#C5A059] outline-none py-2 text-sm resize-none transition-colors text-white placeholder:text-white/10 font-light"
        />
      </div>

      {/* Botão de Ação */}
      <button 
        type="submit"
        className="w-full md:w-auto px-10 py-4 border border-[#C5A059] text-[#C5A059] uppercase text-[10px] tracking-[0.3em] font-medium hover:bg-[#C5A059] hover:text-black transition-all duration-500 active:scale-[0.98] cursor-pointer"
      >
        Enviar via WhatsApp
      </button>

    </form>
  );
}