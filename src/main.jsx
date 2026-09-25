import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, MapPin, Menu, MessageCircle, X } from 'lucide-react';
import './styles.css';

// Replace these image URLs with the clinic's approved photography before launch.
const images = {
  hero: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=85',
  doctor: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=85',
  room: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=82',
  reception: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85',
};

// Número totalmente fictício; substituir pelo WhatsApp confirmado antes da publicação.
const WHATSAPP_URL = 'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';

const procedures = [
  { number: '01', name: 'Cirurgia das mamas', text: 'Conversa sobre possibilidades, expectativas e avaliação individual.', image: 'photo-1559757175-0eb30cd8c063' },
  { number: '02', name: 'Contorno corporal', text: 'Informações sobre abordagens e os cuidados de cada etapa.', image: 'photo-1510017803434-a899398421b3' },
  { number: '03', name: 'Cirurgia facial', text: 'Conheça as áreas de atendimento e esclareça suas dúvidas.', image: 'photo-1534528741775-53994a69daeb' },
  { number: '04', name: 'Procedimentos estéticos', text: 'Uma conversa informativa sobre procedimentos e avaliação.', image: 'photo-1570172619644-dfd03ed5d881' },
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
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <div className="demo-bar"><span className="demo-mark"/> Dr. Gabriel Martins é personagem demonstrativo <span className="demo-divider">/</span> conteúdo e imagens ilustrativos</div>

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
      <a className="header-contact" href={WHATSAPP_URL}><MessageCircle size={17} aria-hidden="true"/><span>Agendar avaliação</span></a>
    </header>

    <main id="conteudo">
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span/> Cirurgia Plástica <span className="eyebrow-city">· Rio de Janeiro</span></p>
          <h1>Dr. Gabriel<br/><em>Martins.</em></h1>
          <p className="hero-intro">Uma proposta de atendimento com escuta, informação clara e atenção à individualidade.</p>
          <div className="hero-actions"><a className="button button-primary" href={WHATSAPP_URL}><MessageCircle size={17} aria-hidden="true"/>Agendar avaliação</a><a className="button-text" href="#procedimentos">Conhecer procedimentos <ArrowDown size={14}/></a></div>
          <div className="hero-note"><span className="note-rule"/> Proposta demonstrativa <span>·</span> Rio de Janeiro</div>
        </div>
        <figure className="hero-photo"><img src={images.hero} alt="Ambiente de clínica com luz natural, fotografia ilustrativa" fetchPriority="high"/><figcaption><span>AMBIENTE DE ATENDIMENTO · IMAGEM ILUSTRATIVA</span><span>01 / 04</span></figcaption><div className="photo-side-note">CIRURGIA PLÁSTICA <i>—</i> RIO DE JANEIRO</div></figure>
        <div className="hero-index" aria-hidden="true">GM<span>·</span></div>
      </section>

      <section className="statement"><span className="section-label">UMA ESCOLHA PESSOAL</span><p>Cada pessoa chega com uma história própria. <em>A conversa é o começo.</em></p><a href="#sobre" aria-label="Conheça o profissional"><ArrowDown size={18}/></a></section>

      <section className="procedures section-shell" id="procedimentos">
        <div className="section-heading"><div><span className="section-label">01 <i>/</i> ÁREAS DE ATENDIMENTO</span><h2>Conhecimento para<br/><em>escolhas conscientes.</em></h2></div><p>As possibilidades são conversadas caso a caso. Conheça as áreas de atendimento e traga suas dúvidas para uma avaliação individual.</p></div>
        <div className="procedure-list">{procedures.map((item) => <article className="procedure" key={item.number}>
          <a className="procedure-photo" href={WHATSAPP_URL} aria-label={`Falar pelo WhatsApp sobre ${item.name}`}><img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=1000&q=82`} alt={`Imagem demonstrativa para ${item.name.toLowerCase()}`} loading="lazy" decoding="async"/><span className="procedure-index">{item.number}</span></a>
          <div className="procedure-copy"><span className="procedure-number">{item.number}</span><div><h3>{item.name}</h3><p>{item.text}</p><a className="underlined-link" href={WHATSAPP_URL}>Saiba mais <ArrowUpRight size={14}/></a></div></div>
        </article>)}</div>
        <div className="section-cta"><p>Tem dúvidas sobre uma área de atendimento?</p><a className="button button-outline" href={WHATSAPP_URL}><MessageCircle size={17} aria-hidden="true"/>Falar pelo WhatsApp</a></div>
      </section>

      <section className="about section-shell" id="sobre">
        <div className="about-image-wrap"><figure className="about-image"><img src={images.doctor} alt="Retrato ilustrativo de um profissional da saúde" loading="lazy" decoding="async"/><figcaption>IMAGEM DEMONSTRATIVA</figcaption></figure><span className="about-image-index">RIO DE JANEIRO <i>·</i> RJ</span></div>
        <div className="about-copy"><span className="section-label">02 <i>/</i> SOBRE O PROFISSIONAL</span><h2>Dr. Gabriel<br/><em>Martins.</em></h2><p className="about-role">Cirurgia Plástica <span>·</span> Personagem demonstrativo</p><p className="about-lead">Uma proposta orientada pela escuta, pela clareza nas informações e pela atenção à jornada de cada paciente.</p><p className="about-placeholder">Este espaço será personalizado com a apresentação profissional e a trajetória do médico. Formação, registros e credenciais serão adicionados somente após validação pelo profissional responsável.</p>
          <div className="credentials"><span className="credentials-rule"/><div><b>FORMAÇÃO E REGISTROS</b><p>Informações profissionais a inserir após confirmação.</p></div></div>
          <a className="button button-primary" href={WHATSAPP_URL}><MessageCircle size={17} aria-hidden="true"/>Agendar avaliação</a>
        </div>
      </section>

      <section className="care-values section-shell"><div className="values-intro"><span className="section-label">03 <i>/</i> NOSSO JEITO DE CUIDAR</span><h2>Presença em<br/><em>cada etapa.</em></h2><p>Um atendimento construído com tempo, clareza e atenção.</p></div><div className="values-grid"><article><span>01</span><h3>Atendimento personalizado</h3><p>Escuta atenta às necessidades e expectativas de cada pessoa.</p></article><article><span>02</span><h3>Estrutura acolhedora</h3><p>Um ambiente pensado para conforto e privacidade.</p></article><article><span>03</span><h3>Acompanhamento individualizado</h3><p>Orientação próxima ao longo das etapas do atendimento.</p></article><article><span>04</span><h3>Experiência centrada no paciente</h3><p>Informações claras para decidir com tranquilidade.</p></article></div></section>

      <section className="clinic-story section-shell"><div className="clinic-heading"><div><span className="section-label">04 <i>/</i> A EXPERIÊNCIA DA CLÍNICA</span><h2>Um lugar para<br/><em>se sentir à vontade.</em></h2></div><p>Conforto e privacidade em uma atmosfera tranquila. As imagens desta composição são ilustrativas e substituíveis.</p></div>
        <div className="clinic-gallery"><figure className="gallery-main"><img src={images.reception} alt="Ambiente contemporâneo de acolhimento, fotografia ilustrativa" loading="lazy" decoding="async"/><figcaption>ESPAÇO DE ACOLHIMENTO <span>01</span></figcaption></figure><figure className="gallery-side"><img src={images.room} alt="Ambiente claro de clínica, imagem ilustrativa" loading="lazy" decoding="async"/><figcaption>AMBIENTE DE ATENDIMENTO <span>02</span></figcaption></figure><div className="gallery-note"><span className="gallery-monogram">G<span>·</span>M</span><p>Um ambiente que acompanha o cuidado com atenção aos detalhes.</p><span className="gallery-disclaimer">IMAGENS DEMONSTRATIVAS</span></div></div>
      </section>

      <section className="faq section-shell"><div className="faq-heading"><span className="section-label">05 <i>/</i> DÚVIDAS FREQUENTES</span><h2>Informação clara,<br/><em>desde o início.</em></h2><p>Uma primeira conversa pode ajudar a esclarecer suas dúvidas.</p><a className="underlined-link" href={WHATSAPP_URL}>Fale com a equipe <ArrowUpRight size={14}/></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <details className="faq-item" key={question}><summary><span className="faq-count">0{index + 1}</span><span>{question}</span><span className="faq-symbol" aria-hidden="true"/></summary><p>{answer}</p></details>)}</div></section>

      <section className="location section-shell" id="localizacao"><div className="location-copy"><span className="section-label">06 <i>/</i> LOCALIZAÇÃO</span><h2>Rio de<br/><em>Janeiro.</em></h2><p>Localização apresentada apenas para esta demonstração.</p><div className="address-block"><MapPin size={19}/><div><b>Endereço demonstrativo</b><span>Endereço fictício · Rio de Janeiro, RJ</span></div></div><a className="button button-outline route-button" href="https://maps.google.com/?q=Rio+de+Janeiro" target="_blank" rel="noreferrer">Abrir rota demonstrativa <ArrowUpRight size={15}/></a></div><div className="map-panel" role="img" aria-label="Mapa ilustrativo com localização demonstrativa no Rio de Janeiro"><div className="map-water"/><div className="map-street street-one"/><div className="map-street street-two"/><div className="map-street street-three"/><div className="map-block block-one"/><div className="map-block block-two"/><div className="map-block block-three"/><div className="map-pin"><MapPin size={20}/></div><span className="map-tag">ENDEREÇO<br/><b>DEMONSTRATIVO</b></span><span className="map-credit">MAPA ILUSTRATIVO · RIO DE JANEIRO</span></div></section>

      <section className="contact-section" id="contato"><span className="section-label">UM PRIMEIRO PASSO, SEM PRESSA</span><h2>Vamos conversar<br/><em>sobre você?</em></h2><p>Entre em contato para tirar dúvidas ou solicitar uma avaliação.</p><a className="button button-light" href={WHATSAPP_URL}><MessageCircle size={18} aria-hidden="true"/>Falar pelo WhatsApp <ArrowUpRight size={16}/></a><span className="contact-caption">Personagem demonstrativo <i>·</i> Rio de Janeiro</span></section>
    </main>

    <footer className="site-footer"><div className="footer-top"><div className="footer-identity"><a className="wordmark" href="#inicio"><span>Dr. Gabriel Martins</span><small>Cirurgia Plástica</small></a><p>Proposta de atendimento:<br/>escuta, clareza e individualidade.</p></div><div className="footer-menu"><span>NAVEGAÇÃO</span><a href="#procedimentos">Procedimentos</a><a href="#sobre">Sobre</a><a href="#localizacao">Localização</a><a href="#contato">Contato</a></div><div className="footer-contact"><span>CONTATO</span><a href={WHATSAPP_URL}>WhatsApp demonstrativo <ArrowUpRight size={13}/></a><small>Endereço demonstrativo<br/>Rio de Janeiro, RJ</small></div><div className="footer-specialty"><span>ESPECIALIDADE</span><p>Cirurgia Plástica</p><small>Informações profissionais<br/>a validar antes da publicação</small></div></div><div className="footer-bottom"><span>© 2026 Dr. Gabriel Martins</span><span>Site demonstrativo · Conteúdo e informações ilustrativos</span><a href="#inicio">Voltar ao início ↑</a></div></footer>

    <a className="floating-whatsapp" href={WHATSAPP_URL} aria-label="Falar pelo WhatsApp — número demonstrativo"><MessageCircle size={21} aria-hidden="true"/><span>Falar pelo WhatsApp</span></a>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
