import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, MapPin, Menu, X } from 'lucide-react';
import './styles.css';

// Replace these image URLs with the clinic's approved photography before launch.
const images = {
  hero: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=85',
  doctor: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=85',
  room: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85',
  detail: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80&sat=-20',
  reception: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85',
};

// Replace the demonstration phone number with the client's WhatsApp number.
const WHATSAPP_URL = 'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';

const procedures = [
  { number: '01', name: 'Cirurgia das mamas', text: 'Informação e diálogo sobre possibilidades, sempre a partir de uma avaliação individual.', image: 'photo-1576091160399-112ba8d25d1d' },
  { number: '02', name: 'Contorno corporal', text: 'Conheça as abordagens possíveis e converse sobre expectativas e cuidados.', image: 'photo-1576091160550-2173dba999ef' },
  { number: '03', name: 'Cirurgia facial', text: 'Um espaço para conhecer opções, etapas e cuidados relacionados à cirurgia facial.', image: 'photo-1622253692010-333f2da6031d' },
  { number: '04', name: 'Procedimentos estéticos', text: 'Informações claras sobre procedimentos e sobre a avaliação de cada caso.', image: 'photo-1629909613654-28e377c37b09' },
];

const faqs = [
  ['Como funciona a avaliação?', 'O primeiro encontro é uma conversa para entender suas dúvidas e expectativas e conhecer as possibilidades para o seu caso. Qualquer indicação depende de avaliação individual.'],
  ['Como posso entrar em contato?', 'Você pode usar os botões de WhatsApp desta página para solicitar informações e verificar disponibilidade. O número apresentado é demonstrativo.'],
  ['Onde fica a clínica?', 'A localização exibida nesta página é um placeholder. O endereço real será inserido após confirmação pelo profissional.'],
  ['O que acontece no primeiro atendimento?', 'Você poderá compartilhar o que busca e tirar dúvidas sobre etapas, cuidados e próximos passos com a equipe.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return <>
    <div className="demo-bar"><span className="demo-mark"/> Demonstração de site institucional <span className="demo-divider">/</span> conteúdo e dados ilustrativos</div>

    <header className="site-header">
      <a className="wordmark" href="#inicio" onClick={closeMenu} aria-label="Dr. Gabriel Martins, início">
        <span>Dr. Gabriel Martins</span><small>Cirurgia Plástica</small>
      </a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={21}/> : <Menu size={21}/>}
      </button>
      <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} id="main-nav" aria-label="Navegação principal">
        <a href="#inicio" onClick={closeMenu}>Início</a><a href="#procedimentos" onClick={closeMenu}>Procedimentos</a><a href="#sobre" onClick={closeMenu}>Sobre</a><a href="#contato" onClick={closeMenu}>Contato</a>
      </nav>
      <a className="header-contact" href={WHATSAPP_URL}>Agendar avaliação <ArrowUpRight size={15}/></a>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span/> Cirurgia plástica <span className="eyebrow-city">· Rio de Janeiro</span></p>
          <h1>Cuidado atento<br/>à sua <em>história.</em></h1>
          <p className="hero-intro">Uma relação de cuidado que começa com escuta, informação e respeito à individualidade.</p>
          <div className="hero-actions"><a className="button button-primary" href={WHATSAPP_URL}>Agendar avaliação <ArrowUpRight size={16}/></a><a className="button-text" href="#procedimentos">Conhecer procedimentos <ArrowDown size={14}/></a></div>
          <div className="hero-note"><span className="note-rule"/> Atendimento particular <span>·</span> Rio de Janeiro</div>
        </div>
        <figure className="hero-photo"><img src={images.hero} alt="Ambiente de clínica com luz natural, fotografia ilustrativa" fetchPriority="high"/><figcaption><span>AMBIENTE DE ATENDIMENTO · IMAGEM ILUSTRATIVA</span><span>01 / 04</span></figcaption><div className="photo-side-note">CIRURGIA PLÁSTICA <i>—</i> RIO DE JANEIRO</div></figure>
        <div className="hero-index" aria-hidden="true">GM<span>·</span></div>
      </section>

      <section className="statement"><span className="section-label">UMA ESCOLHA PESSOAL</span><p>Cada pessoa chega com uma história própria. <em>A conversa é o começo.</em></p><a href="#sobre" aria-label="Conheça o profissional"><ArrowDown size={18}/></a></section>

      <section className="procedures section-shell" id="procedimentos">
        <div className="section-heading"><div><span className="section-label">01 <i>/</i> ÁREAS DE ATENDIMENTO</span><h2>Conhecimento para<br/><em>escolhas conscientes.</em></h2></div><p>As possibilidades são conversadas caso a caso. Conheça as áreas de atendimento e traga suas dúvidas para uma avaliação individual.</p></div>
        <div className="procedure-list">{procedures.map((item) => <article className="procedure" key={item.number}>
          <a className="procedure-photo" href={WHATSAPP_URL} aria-label={`Conversar sobre ${item.name}`}><img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=1000&q=82`} alt="Imagem ilustrativa de ambiente de cuidado em saúde" loading="lazy" decoding="async"/><span className="procedure-index">{item.number}</span></a>
          <div className="procedure-copy"><span className="procedure-number">{item.number}</span><div><h3>{item.name}</h3><p>{item.text}</p><a className="underlined-link" href={WHATSAPP_URL}>Saiba mais <ArrowUpRight size={14}/></a></div></div>
        </article>)}</div>
        <div className="section-cta"><p>Tem dúvidas sobre uma área de atendimento?</p><a className="button button-outline" href={WHATSAPP_URL}>Converse com a equipe <ArrowUpRight size={15}/></a></div>
      </section>

      <section className="about section-shell" id="sobre">
        <div className="about-image-wrap"><figure className="about-image"><img src={images.doctor} alt="Retrato ilustrativo de um profissional da saúde" loading="lazy" decoding="async"/><figcaption>IMAGEM DEMONSTRATIVA</figcaption></figure><span className="about-image-index">RIO DE JANEIRO <i>·</i> RJ</span></div>
        <div className="about-copy"><span className="section-label">02 <i>/</i> SOBRE O PROFISSIONAL</span><h2>Dr. Gabriel<br/><em>Martins.</em></h2><p className="about-role">Cirurgia Plástica <span>·</span> Atendimento particular</p><p className="about-lead">Uma prática orientada pela escuta, pela clareza nas informações e pela atenção à jornada de cada paciente.</p><p className="about-placeholder">Este espaço será personalizado com a apresentação profissional e a trajetória do médico. Formação, registros e credenciais serão adicionados somente após validação pelo profissional responsável.</p>
          <div className="credentials"><span className="credentials-rule"/><div><b>FORMAÇÃO E REGISTROS</b><p>Informações profissionais a inserir após confirmação.</p></div></div>
          <a className="button button-primary" href={WHATSAPP_URL}>Agendar avaliação <ArrowUpRight size={16}/></a>
        </div>
      </section>

      <section className="care-values section-shell"><div className="values-intro"><span className="section-label">03 <i>/</i> NOSSO JEITO DE CUIDAR</span><h2>Presença em<br/><em>cada etapa.</em></h2><p>Um atendimento construído com tempo, clareza e atenção.</p></div><div className="values-grid"><article><span>01</span><h3>Atendimento personalizado</h3><p>Escuta atenta às necessidades e expectativas de cada pessoa.</p></article><article><span>02</span><h3>Estrutura acolhedora</h3><p>Um ambiente pensado para conforto e privacidade.</p></article><article><span>03</span><h3>Acompanhamento individualizado</h3><p>Orientação próxima ao longo das etapas do atendimento.</p></article><article><span>04</span><h3>Experiência centrada no paciente</h3><p>Informações claras para decidir com tranquilidade.</p></article></div></section>

      <section className="clinic-story section-shell"><div className="clinic-heading"><div><span className="section-label">04 <i>/</i> A EXPERIÊNCIA DA CLÍNICA</span><h2>Um lugar para<br/><em>se sentir à vontade.</em></h2></div><p>Conforto e privacidade em uma atmosfera tranquila. As imagens desta composição são ilustrativas e substituíveis.</p></div>
        <div className="clinic-gallery"><figure className="gallery-main"><img src={images.reception} alt="Ambiente contemporâneo de acolhimento, fotografia ilustrativa" loading="lazy" decoding="async"/><figcaption>ESPAÇO DE ACOLHIMENTO <span>01</span></figcaption></figure><figure className="gallery-side"><img src={images.room} alt="Ambiente claro de clínica, imagem ilustrativa" loading="lazy" decoding="async"/><figcaption>AMBIENTE DE ATENDIMENTO <span>02</span></figcaption></figure><div className="gallery-note"><span className="gallery-monogram">G<span>·</span>M</span><p>Um ambiente que acompanha o cuidado com atenção aos detalhes.</p><span className="gallery-disclaimer">IMAGENS DEMONSTRATIVAS</span></div></div>
      </section>

      <section className="faq section-shell"><div className="faq-heading"><span className="section-label">05 <i>/</i> DÚVIDAS FREQUENTES</span><h2>Informação clara,<br/><em>desde o início.</em></h2><p>Uma primeira conversa pode ajudar a esclarecer suas dúvidas.</p><a className="underlined-link" href={WHATSAPP_URL}>Fale com a equipe <ArrowUpRight size={14}/></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <details className="faq-item" key={question}><summary><span className="faq-count">0{index + 1}</span><span>{question}</span><span className="faq-symbol" aria-hidden="true"/></summary><p>{answer}</p></details>)}</div></section>

      <section className="location section-shell" id="localizacao"><div className="location-copy"><span className="section-label">06 <i>/</i> LOCALIZAÇÃO</span><h2>Estamos no<br/><em>Rio de Janeiro.</em></h2><p>Atendimento particular com hora marcada.</p><div className="address-block"><MapPin size={17}/><div><b>Endereço demonstrativo</b><span>Localização fictícia — Rio de Janeiro, RJ</span></div></div><a className="underlined-link" href="https://maps.google.com/?q=Rio+de+Janeiro" target="_blank" rel="noreferrer">Ver rota demonstrativa <ArrowUpRight size={14}/></a></div><div className="map-panel" role="img" aria-label="Mapa ilustrativo com localização demonstrativa no Rio de Janeiro"><div className="map-water"/><div className="map-street street-one"/><div className="map-street street-two"/><div className="map-street street-three"/><div className="map-block block-one"/><div className="map-block block-two"/><div className="map-block block-three"/><div className="map-pin"><MapPin size={20}/></div><span className="map-tag">ENDEREÇO<br/><b>DEMONSTRATIVO</b></span><span className="map-credit">MAPA ILUSTRATIVO · RIO DE JANEIRO</span></div></section>

      <section className="contact-section" id="contato"><span className="section-label">UM PRIMEIRO PASSO, SEM PRESSA</span><h2>Vamos conversar<br/><em>sobre você?</em></h2><p>Entre em contato para tirar dúvidas ou solicitar uma avaliação.</p><a className="button button-light" href={WHATSAPP_URL}>Agendar avaliação pelo WhatsApp <ArrowUpRight size={16}/></a><span className="contact-caption">Atendimento particular <i>·</i> Rio de Janeiro</span></section>
    </main>

    <footer className="site-footer"><div className="footer-top"><div className="footer-identity"><a className="wordmark" href="#inicio"><span>Dr. Gabriel Martins</span><small>Cirurgia Plástica</small></a><p>Atendimento com escuta,<br/>clareza e individualidade.</p></div><div className="footer-menu"><span>NAVEGAÇÃO</span><a href="#procedimentos">Procedimentos</a><a href="#sobre">Sobre</a><a href="#localizacao">Localização</a><a href="#contato">Contato</a></div><div className="footer-contact"><span>CONTATO</span><a href={WHATSAPP_URL}>WhatsApp demonstrativo <ArrowUpRight size={13}/></a><small>Endereço demonstrativo<br/>Rio de Janeiro, RJ</small></div><div className="footer-specialty"><span>ESPECIALIDADE</span><p>Cirurgia Plástica</p><small>Informações profissionais<br/>a validar antes da publicação</small></div></div><div className="footer-bottom"><span>© 2026 Dr. Gabriel Martins</span><span>Site demonstrativo · Conteúdo e informações ilustrativos</span><a href="#inicio">Voltar ao início ↑</a></div></footer>

    <a className="floating-whatsapp" href={WHATSAPP_URL} aria-label="Falar pelo WhatsApp"><span className="whatsapp-symbol">WA</span><span>Contato</span></a>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
