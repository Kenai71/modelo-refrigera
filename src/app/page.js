"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Snowflake, Wrench, ShoppingCart, 
  Map, Phone, CheckCircle2, Shield, Thermometer,
  Clock, MapPin
} from "lucide-react";

const WHATSAPP_NUMBER = "5500000000000";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      id: "climatizacao",
      title: "Climatização",
      desc: "Soluções completas para manter seu ambiente com a temperatura ideal em todas as estações do ano.",
      img: "/images/comfort-home.png",
      icon: <Thermometer className="w-6 h-6" />
    },
    {
      id: "manutencao",
      title: "Manutenção",
      desc: "Manutenção preventiva e corretiva para garantir maior vida útil e máxima eficiência dos seus equipamentos.",
      img: "/images/maintenance-ac.png",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      id: "vendas",
      title: "Vendas de Ar Condicionado",
      desc: "Trabalhamos com as melhores marcas do mercado. Consultoria especializada para a escolha do aparelho ideal.",
      img: "/images/sales-ac.png",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      id: "projetos",
      title: "Projetos",
      desc: "Projetos de engenharia para sistemas de refrigeração comercial e industrial, focados em eficiência energética.",
      img: "/images/projects-hvac.png",
      icon: <Map className="w-6 h-6" />
    },
    {
      id: "assistencia",
      title: "Assistência Técnica",
      desc: "Diagnóstico rápido e conserto de aparelhos com peças originais e profissionais certificados.",
      img: "/images/technical-support.png",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <>
      {/* HEADER */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo">
            <Snowflake className="logo-icon w-8 h-8" />
            FrioMax
          </a>
          <nav className="nav-links">
            <a href="#inicio" className="nav-link">Início</a>
            <a href="#servicos" className="nav-link">Serviços</a>
            <a href="#sobre" className="nav-link">Sobre</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Phone className="w-4 h-4" />
              Fale Conosco
            </a>
          </nav>
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-menu open"
          >
            <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
            <a href="#inicio" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Início</a>
            <a href="#servicos" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
            <a href="#sobre" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
            <a href={WHATSAPP_LINK} className="btn-primary" onClick={() => setMobileMenuOpen(false)}>
              Chamar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="inicio" className="hero">
        <div className="hero-blob-1" />
        <div className="hero-blob-2" />
        <div className="container hero-content">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1>O clima <span className="text-gradient">perfeito</span> para o seu bem-estar</h1>
            <p>
              Especialistas em Refrigeração, Climatização e Manutenção. 
              Traga conforto para sua casa ou empresa com serviços rápidos, de alta qualidade e com garantia.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Agende uma Visita
              </a>
              <a href="#servicos" className="btn-outline">
                Nossos Serviços
              </a>
            </div>

            <div className="hero-badges">
              <div className="hero-badge-item">
                <span>15+</span>
                <span>Anos de Experiência</span>
              </div>
              <div className="hero-badge-item">
                <span>2k+</span>
                <span>Clientes Satisfeitos</span>
              </div>
              <div className="hero-badge-item">
                <span>24h</span>
                <span>Suporte Técnico</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-image-container"
          >
            <div className="hero-image-wrapper">
              <img src="/images/hero-hvac.png" alt="Instalação de Ar Condicionado" />
            </div>
            <div className="hero-floating-card">
              <CheckCircle2 className="w-8 h-8 text-gradient" />
              <div>
                <p style={{ fontWeight: 700, color: 'var(--navy-900)', marginBottom: 0 }}>Garantia de Qualidade</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', margin: 0 }}>Serviço certificado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="section services-section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <span className="section-tag">Especialidades</span>
            <h2 className="section-title">Soluções Completas em Refrigeração</h2>
            <p className="section-desc">
              Do projeto inicial à manutenção corretiva, oferecemos tudo o que você precisa em ar condicionado e climatização.
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card"
              >
                <div className="service-img-wrapper">
                  <img src={service.img} alt={service.title} />
                  <div className="service-icon-badge">
                    {service.icon}
                  </div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="service-link">
                    Solicitar orçamento &rarr;
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / WHY CHOOSE US */}
      <section id="sobre" className="section">
        <div className="container about-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-image"
          >
            <img src="/images/comfort-home.png" alt="Ambiente Climatizado" />
            <div className="about-overlay">
              <p>O conforto térmico que você merece, com a economia de energia que você precisa.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Por que a FrioMax?</span>
            <h2 className="section-title">Excelência e compromisso com o seu projeto</h2>
            <p className="section-desc" style={{ marginBottom: '2rem' }}>
              Trabalhamos com uma equipe de profissionais altamente capacitados, prontos para entregar a melhor solução em refrigeração para residências, escritórios e indústrias.
            </p>

            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="feature-text">
                  <h4>Peças e Equipamentos Originais</h4>
                  <p>Trabalhamos apenas com materiais de primeira linha para garantir durabilidade.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="feature-text">
                  <h4>Atendimento Ágil</h4>
                  <p>Equipe de prontidão para resolver seu problema no menor tempo possível.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="feature-text">
                  <h4>Projetos Personalizados</h4>
                  <p>Analisamos a estrutura do seu imóvel para indicar a melhor solução de climatização.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta-banner"
        >
          <div className="cta-banner-content">
            <h2>Seu ar condicionado parou?</h2>
            <p>
              Não sofra com o calor. Nossa equipe técnica está de prontidão para resolver o seu problema hoje mesmo.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar Atendimento
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo">
                <Snowflake className="logo-icon w-6 h-6" />
                FrioMax
              </a>
              <p>Soluções inteligentes e eficientes em climatização e refrigeração para melhorar sua qualidade de vida e dos seus negócios.</p>
            </div>
            
            <div>
              <h4 className="footer-heading">Navegação</h4>
              <div className="footer-links">
                <a href="#inicio" className="footer-link">Início</a>
                <a href="#servicos" className="footer-link">Serviços</a>
                <a href="#sobre" className="footer-link">Sobre</a>
              </div>
            </div>

            <div>
              <h4 className="footer-heading">Serviços</h4>
              <div className="footer-links">
                <a href="#servicos" className="footer-link">Manutenção</a>
                <a href="#servicos" className="footer-link">Projetos</a>
                <a href="#servicos" className="footer-link">Vendas</a>
              </div>
            </div>

            <div>
              <h4 className="footer-heading">Contato</h4>
              <ul className="footer-contact">
                <li>
                  <Phone className="w-5 h-5" />
                  <span>+55 (00) 0000-0000</span>
                </li>
                <li>
                  <MapPin className="w-5 h-5" />
                  <span>Av. Principal, 1000 - Centro, Sua Cidade - SC</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} FrioMax Climatização. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FAB */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
