export type Lang = 'es' | 'en' | 'de' | 'pt' | 'uk';

export const translations = {
  es: {
    nav: { services: 'Servicios', howItWorks: 'Cómo funciona', pricing: 'Precios', contact: 'Contacto', cta: 'Agendar llamada' },
    hero: {
      badge: '✦ Solo para empresas y negocios listos para crecer sin límites',
      title: 'Automatizamos tu empresa.',
      titleHighlight: 'Tú te enfocas en crecer.',
      subtitle: 'Recepcionista virtual IA, automatizaciones inteligentes y soluciones que trabajan por ti 24/7.',
      cta1: 'Agendar llamada gratuita', cta2: 'Hablar por WhatsApp'
    },
    problem: {
      title: '¿Tu negocio tiene estos problemas?',
      subtitle: 'Miles de empresas pierden clientes y tiempo por no tener las herramientas correctas',
      items: [
        { title: 'Clientes sin respuesta', desc: 'Pierdes clientes porque no puedes responder siempre' },
        { title: 'Demasiado trabajo manual', desc: 'Tareas repetitivas que consumen tu tiempo valioso' },
        { title: 'Sin organización', desc: 'Sin sistema claro para gestionar clientes y oportunidades' },
        { title: 'Pérdida de leads', desc: 'Oportunidades que se pierden por falta de seguimiento' },
        { title: 'Sin presencia digital', desc: 'Tu negocio no aparece online o tiene una web anticuada' },
        { title: 'Seguimiento deficiente', desc: 'No sabes en qué estado están tus clientes potenciales' }
      ]
    },
    services: {
      title: 'Nuestros servicios',
      subtitle: 'Soluciones completas para modernizar, automatizar y hacer crecer tu negocio',
      items: [
        { icon: '🌐', title: 'Páginas web profesionales', desc: 'Diseñamos webs que no solo se ven bien — convierten visitantes en clientes reales.' },
        { icon: '🤖', title: 'Agentes IA', desc: 'Tu negocio nunca duerme: agentes que responden, venden y gestionan clientes 24/7.' },
        { icon: '💬', title: 'Automatización WhatsApp', desc: 'El canal favorito de tus clientes, 100% automatizado y siempre disponible.' },
        { icon: '📧', title: 'Automatización de Email', desc: 'Secuencias que nutren leads y generan ventas mientras tú te enfocas en crecer.' },
        { icon: '📊', title: 'CRM personalizado', desc: 'Un sistema hecho a tu medida que centraliza clientes, ventas y oportunidades.' },
        { icon: '📈', title: 'Dashboards', desc: 'Datos en tiempo real para tomar decisiones inteligentes y escalar con confianza.' },
        { icon: '⚙️', title: 'Automatización de procesos', desc: 'Conectamos tus herramientas para que trabajen solas, ahorrándote horas cada día.' },
        { icon: '🔗', title: 'Integraciones', desc: 'WhatsApp, email, CRM y más — sincronizados en un ecosistema automatizado.' },
        { icon: '📅', title: 'Automatización de citas', desc: 'Reservas 24/7 con recordatorios automáticos que reducen cancelaciones.' },
        { icon: '📋', title: 'Formularios inteligentes', desc: 'Captura prospectos calificados y envíalos directo a tu CRM automáticamente.' },
        { icon: '📞', title: 'Recepcionista virtual', desc: 'Atiende llamadas, responde dudas y agenda citas en tu nombre, siempre.' },
        { icon: '🧠', title: 'Consultoría IA', desc: 'Te guiamos para implementar IA en tu empresa y maximizar tu inversión.' },
        { icon: '📱', title: 'Desarrollo de Apps', desc: 'Creamos aplicaciones móviles y web a medida que digitalizan y potencian tu negocio.' }
      ]
    },
    howItWorks: {
      title: 'Cómo funciona',
      subtitle: 'Un proceso simple y rápido para transformar tu negocio',
      steps: [
        { number: '01', title: 'Diagnóstico gratuito', desc: 'Analizamos tu negocio y detectamos las oportunidades de mejora' },
        { number: '02', title: 'Propuesta personalizada', desc: 'Diseñamos una solución adaptada exactamente a tus necesidades' },
        { number: '03', title: 'Implementación rápida', desc: 'Ponemos en marcha tu solución en 5 a 8 días' },
        { number: '04', title: 'Resultados reales', desc: 'Más tiempo, más clientes y un negocio mejor organizado' }
      ]
    },
    niches: {
      title: '¿A quién ayudamos?',
      subtitle: 'Trabajamos con empresas de todos los sectores',
      items: [
        { icon: '🏥', title: 'Clínicas' }, { icon: '🍽️', title: 'Restaurantes' }, { icon: '🏨', title: 'Hoteles' },
        { icon: '🏕️', title: 'Glamping' }, { icon: '🏋️', title: 'Gimnasios' }, { icon: '🏠', title: 'Inmobiliarias' },
        { icon: '⚖️', title: 'Abogados' }, { icon: '💄', title: 'Estéticas' }, { icon: '🚗', title: 'Talleres' },
        { icon: '🎓', title: 'Academias' }, { icon: '🏢', title: 'Empresas' }, { icon: '👤', title: 'Profesionales' }
      ]
    },
    pricing: {
      title: 'Precios claros y directos',
      subtitle: 'Sin costos ocultos, sin sorpresas',
      project: {
        label: 'Proyecto', price: 'Desde 500€', period: 'por proyecto',
        desc: 'Pago en dos partes: 50% para comenzar, 50% al finalizar',
        features: ['Implementación completa', 'Entrega en 5-8 días', 'Solución personalizada', 'Soporte incluido'],
        cta: 'Empezar ahora'
      },
      maintenance: {
        label: 'Mantenimiento', price: 'A medida', period: 'según el proyecto',
        desc: 'Cuota de mantenimiento de acuerdo al alcance y complejidad de tu proyecto',
        features: ['Soporte técnico', 'Actualizaciones', 'Mejoras continuas'],
        cta: 'Saber más'
      }
    },
    contact: {
      title: '¿Listo para automatizar tu negocio?',
      subtitle: 'Escríbenos hoy y te respondemos en menos de 24 horas',
      whatsapp: 'Hablar por WhatsApp', calendly: 'Agendar llamada gratuita',
      why: ['Respuesta en menos de 24h', 'Primera consulta gratuita', 'Entrega en 5-8 días', 'Soporte en 4 idiomas'],
      form: { name: 'Tu nombre', email: 'Tu email', business: 'Nombre de tu negocio', message: 'Cuéntanos qué necesitas...', send: 'Enviar mensaje' }
    },
    benefits: {
      title: 'Más velocidad, más orden y mejor experiencia',
      subtitle: 'Mejora la experiencia para tus clientes y tu empresa',
      items: [
        { title: 'Respuesta rápida', desc: 'Atiende a tus clientes incluso cuando tu equipo no está disponible.' },
        { title: 'Más leads organizados', desc: 'Cada oportunidad queda registrada y lista para hacer seguimiento.' },
        { title: 'Menos tareas repetitivas', desc: 'Automatiza el trabajo manual y libera tiempo para vender mejor.' },
        { title: 'Datos claros', desc: 'Toma decisiones con dashboards y métricas visibles en tiempo real.' }
      ]
    },
    footer: { tagline: 'Automatización inteligente para negocios que quieren crecer.', rights: '© 2026 NexiaMC. Todos los derechos reservados.' }
  },
  en: {
    nav: { services: 'Services', howItWorks: 'How it works', pricing: 'Pricing', contact: 'Contact', cta: 'Book a call' },
    hero: {
      badge: 'AI & Automation for Businesses',
      title: 'We automate your business so you can',
      titleHighlight: 'grow without limits',
      subtitle: 'Professional websites, AI agents, automation and CRM for businesses that want to work smarter and attract more clients.',
      cta1: 'Book a free call', cta2: 'Chat on WhatsApp'
    },
    problem: {
      title: 'Does your business have these problems?',
      subtitle: 'Thousands of businesses lose clients and time without the right tools',
      items: [
        { title: 'Unanswered clients', desc: "You lose clients because you can't always respond" },
        { title: 'Too much manual work', desc: 'Repetitive tasks consuming your valuable time' },
        { title: 'No organization', desc: 'No clear system to manage clients and opportunities' },
        { title: 'Lost leads', desc: 'Opportunities lost due to lack of follow-up' },
        { title: 'No digital presence', desc: "Your business isn't online or has an outdated website" },
        { title: 'Poor follow-up', desc: "You don't know the status of your potential clients" }
      ]
    },
    services: {
      title: 'Our services',
      subtitle: 'Complete solutions to modernize and automate your business',
      items: [
        { icon: '🌐', title: 'Professional websites', desc: 'Modern, fast websites optimized to convert' },
        { icon: '🤖', title: 'AI Agents', desc: 'Smart assistants working 24/7 for your business' },
        { icon: '💬', title: 'WhatsApp Automation', desc: 'Automatic replies and message management' },
        { icon: '📧', title: 'Email Automation', desc: 'Automatic campaigns and email follow-ups' },
        { icon: '📊', title: 'Custom CRM', desc: 'Manage your clients and sales in an organized way' },
        { icon: '📈', title: 'Dashboards', desc: 'Visualize your business performance in real time' },
        { icon: '⚙️', title: 'Process Automation', desc: 'Eliminate manual and repetitive tasks' },
        { icon: '🔗', title: 'Integrations', desc: 'Connect all your tools in one system' },
        { icon: '📅', title: 'Appointment Automation', desc: 'Automatic booking system and reminders' },
        { icon: '📋', title: 'Smart Forms', desc: 'Capture leads and data automatically' },
        { icon: '📞', title: 'Virtual Receptionist', desc: 'Serve clients outside hours automatically' },
        { icon: '🧠', title: 'AI Consulting', desc: 'Strategy to implement AI in your company' },
        { icon: '📱', title: 'App Development', desc: 'We build custom mobile and web apps to digitize and grow your business.' }
      ]
    },
    howItWorks: {
      title: 'How it works',
      subtitle: 'A simple and fast process to transform your business',
      steps: [
        { number: '01', title: 'Free diagnosis', desc: 'We analyze your business and identify improvement opportunities' },
        { number: '02', title: 'Custom proposal', desc: 'We design a solution tailored exactly to your needs' },
        { number: '03', title: 'Fast implementation', desc: 'We launch your solution in 5 to 8 days' },
        { number: '04', title: 'Real results', desc: 'More time, more clients and a better organized business' }
      ]
    },
    niches: {
      title: 'Who do we help?',
      subtitle: 'We work with businesses across all sectors',
      items: [
        { icon: '🏥', title: 'Clinics' }, { icon: '🍽️', title: 'Restaurants' }, { icon: '🏨', title: 'Hotels' },
        { icon: '🏕️', title: 'Glamping' }, { icon: '🏋️', title: 'Gyms' }, { icon: '🏠', title: 'Real Estate' },
        { icon: '⚖️', title: 'Lawyers' }, { icon: '💄', title: 'Beauty Salons' }, { icon: '🚗', title: 'Auto Shops' },
        { icon: '🎓', title: 'Academies' }, { icon: '🏢', title: 'Companies' }, { icon: '👤', title: 'Freelancers' }
      ]
    },
    pricing: {
      title: 'Clear and direct pricing',
      subtitle: 'No hidden costs, no surprises',
      project: {
        label: 'Project', price: 'From €500', period: 'per project',
        desc: 'Payment in two parts: 50% to start, 50% upon completion',
        features: ['Complete implementation', 'Delivery in 5-8 days', 'Custom solution', 'Support included'],
        cta: 'Get started'
      },
      maintenance: {
        label: 'Maintenance', price: 'Custom', period: 'per project',
        desc: 'Maintenance fee based on the scope and complexity of your project',
        features: ['Technical support', 'Updates', 'Continuous improvements'],
        cta: 'Learn more'
      }
    },
    contact: {
      title: 'Ready to automate your business?',
      subtitle: "Contact us today and we'll respond within 24 hours",
      whatsapp: 'Chat on WhatsApp', calendly: 'Book a free call',
      why: ['Response in less than 24h', 'First consultation free', 'Delivery in 5-8 days', 'Support in 4 languages'],
      form: { name: 'Your name', email: 'Your email', business: 'Business name', message: 'Tell us what you need...', send: 'Send message' }
    },
    benefits: {
      title: 'More speed, more order, better experience',
      subtitle: 'Improve the experience for your clients and your business',
      items: [
        { title: 'Fast response', desc: 'Serve your clients even when your team is not available.' },
        { title: 'More organized leads', desc: 'Every opportunity is recorded and ready for follow-up.' },
        { title: 'Fewer repetitive tasks', desc: 'Automate manual work and free up time to sell more.' },
        { title: 'Clear data', desc: 'Make decisions with real-time dashboards and visible metrics.' }
      ]
    },
    footer: { tagline: 'Intelligent automation for businesses that want to grow.', rights: '© 2026 NexiaMC. All rights reserved.' }
  },
  de: {
    nav: { services: 'Leistungen', howItWorks: 'So funktioniert es', pricing: 'Preise', contact: 'Kontakt', cta: 'Gespräch buchen' },
    hero: {
      badge: 'KI & Automatisierung für Unternehmen',
      title: 'Wir automatisieren Ihr Unternehmen damit Sie',
      titleHighlight: 'grenzenlos wachsen können',
      subtitle: 'Professionelle Webseiten, KI-Agenten, Automatisierung und CRM für Unternehmen, die effizienter arbeiten möchten.',
      cta1: 'Kostenloses Gespräch buchen', cta2: 'Per WhatsApp schreiben'
    },
    problem: {
      title: 'Hat Ihr Unternehmen diese Probleme?',
      subtitle: 'Tausende Unternehmen verlieren Kunden und Zeit ohne die richtigen Werkzeuge',
      items: [
        { title: 'Kunden ohne Antwort', desc: 'Sie verlieren Kunden, weil Sie nicht immer antworten können' },
        { title: 'Zu viel manuelle Arbeit', desc: 'Sich wiederholende Aufgaben verschwenden Ihre Zeit' },
        { title: 'Fehlende Organisation', desc: 'Kein klares System zur Verwaltung von Kunden und Chancen' },
        { title: 'Verlorene Leads', desc: 'Chancen gehen durch mangelnde Nachverfolgung verloren' },
        { title: 'Keine digitale Präsenz', desc: 'Ihr Unternehmen ist nicht online oder hat eine veraltete Website' },
        { title: 'Schlechte Nachverfolgung', desc: 'Sie wissen nicht, in welchem Status Ihre potenziellen Kunden sind' }
      ]
    },
    services: {
      title: 'Unsere Leistungen',
      subtitle: 'Vollständige Lösungen zur Modernisierung und Automatisierung Ihres Unternehmens',
      items: [
        { icon: '🌐', title: 'Professionelle Webseiten', desc: 'Moderne, schnelle Webseiten für mehr Konversionen' },
        { icon: '🤖', title: 'KI-Agenten', desc: 'Intelligente Assistenten, die 24/7 für Sie arbeiten' },
        { icon: '💬', title: 'WhatsApp-Automatisierung', desc: 'Automatische Antworten und Nachrichtenverwaltung' },
        { icon: '📧', title: 'E-Mail-Automatisierung', desc: 'Automatische Kampagnen und E-Mail-Nachverfolgungen' },
        { icon: '📊', title: 'Individuelles CRM', desc: 'Verwalten Sie Kunden und Verkäufe organisiert' },
        { icon: '📈', title: 'Dashboards', desc: 'Visualisieren Sie Ihre Unternehmensleistung in Echtzeit' },
        { icon: '⚙️', title: 'Prozessautomatisierung', desc: 'Manuelle und sich wiederholende Aufgaben eliminieren' },
        { icon: '🔗', title: 'Integrationen', desc: 'Verbinden Sie alle Ihre Tools in einem System' },
        { icon: '📅', title: 'Terminautomatisierung', desc: 'Automatisches Buchungssystem und Erinnerungen' },
        { icon: '📋', title: 'Intelligente Formulare', desc: 'Leads und Daten automatisch erfassen' },
        { icon: '📞', title: 'Virtuelle Rezeption', desc: 'Kunden außerhalb der Geschäftszeiten automatisch bedienen' },
        { icon: '🧠', title: 'KI-Beratung', desc: 'Strategie für KI-Implementierung in Ihrem Unternehmen' },
        { icon: '📱', title: 'App-Entwicklung', desc: 'Maßgeschneiderte mobile und Web-Apps für Ihr Unternehmen.' }
      ]
    },
    howItWorks: {
      title: 'So funktioniert es',
      subtitle: 'Ein einfacher und schneller Prozess zur Transformation Ihres Unternehmens',
      steps: [
        { number: '01', title: 'Kostenlose Diagnose', desc: 'Wir analysieren Ihr Unternehmen und identifizieren Verbesserungsmöglichkeiten' },
        { number: '02', title: 'Individuelles Angebot', desc: 'Wir entwickeln eine Lösung, die genau auf Ihre Bedürfnisse zugeschnitten ist' },
        { number: '03', title: 'Schnelle Umsetzung', desc: 'Wir starten Ihre Lösung in 5 bis 8 Tagen' },
        { number: '04', title: 'Echte Ergebnisse', desc: 'Mehr Zeit, mehr Kunden und ein besser organisiertes Unternehmen' }
      ]
    },
    niches: {
      title: 'Wem helfen wir?',
      subtitle: 'Wir arbeiten mit Unternehmen aus allen Branchen',
      items: [
        { icon: '🏥', title: 'Kliniken' }, { icon: '🍽️', title: 'Restaurants' }, { icon: '🏨', title: 'Hotels' },
        { icon: '🏕️', title: 'Glamping' }, { icon: '🏋️', title: 'Fitnessstudios' }, { icon: '🏠', title: 'Immobilien' },
        { icon: '⚖️', title: 'Anwälte' }, { icon: '💄', title: 'Beauty-Salons' }, { icon: '🚗', title: 'Autowerkstätten' },
        { icon: '🎓', title: 'Akademien' }, { icon: '🏢', title: 'Unternehmen' }, { icon: '👤', title: 'Freiberufler' }
      ]
    },
    pricing: {
      title: 'Klare und direkte Preise',
      subtitle: 'Keine versteckten Kosten, keine Überraschungen',
      project: {
        label: 'Projekt', price: 'Ab 500€', period: 'pro Projekt',
        desc: 'Zahlung in zwei Teilen: 50% zu Beginn, 50% nach Abschluss',
        features: ['Vollständige Implementierung', 'Lieferung in 5-8 Tagen', 'Individuelle Lösung', 'Support inklusive'],
        cta: 'Jetzt starten'
      },
      maintenance: {
        label: 'Wartung', price: 'Individuell', period: 'je nach Projekt',
        desc: 'Wartungsgebühr je nach Umfang und Komplexität Ihres Projekts',
        features: ['Technischer Support', 'Updates', 'Kontinuierliche Verbesserungen'],
        cta: 'Mehr erfahren'
      }
    },
    contact: {
      title: 'Bereit, Ihr Unternehmen zu automatisieren?',
      subtitle: 'Kontaktieren Sie uns heute und wir antworten innerhalb von 24 Stunden',
      whatsapp: 'Per WhatsApp schreiben', calendly: 'Kostenloses Gespräch buchen',
      why: ['Antwort in weniger als 24h', 'Erste Beratung kostenlos', 'Lieferung in 5-8 Tagen', 'Support in 4 Sprachen'],
      form: { name: 'Ihr Name', email: 'Ihre E-Mail', business: 'Unternehmensname', message: 'Erzählen Sie uns, was Sie benötigen...', send: 'Nachricht senden' }
    },
    benefits: {
      title: 'Mehr Geschwindigkeit, mehr Ordnung, bessere Erfahrung',
      subtitle: 'Verbessern Sie die Erfahrung für Ihre Kunden und Ihr Unternehmen',
      items: [
        { title: 'Schnelle Reaktion', desc: 'Bedienen Sie Kunden auch wenn Ihr Team nicht verfügbar ist.' },
        { title: 'Organisierte Leads', desc: 'Jede Gelegenheit wird erfasst und ist bereit zur Nachverfolgung.' },
        { title: 'Weniger Routineaufgaben', desc: 'Automatisieren Sie manuelle Arbeit und gewinnen Sie Zeit.' },
        { title: 'Klare Daten', desc: 'Entscheiden Sie mit Echtzeit-Dashboards und sichtbaren Kennzahlen.' }
      ]
    },
    footer: { tagline: 'Intelligente Automatisierung für Unternehmen, die wachsen wollen.', rights: '© 2026 NexiaMC. Alle Rechte vorbehalten.' }
  },
  pt: {
    nav: { services: 'Serviços', howItWorks: 'Como funciona', pricing: 'Preços', contact: 'Contato', cta: 'Agendar chamada' },
    hero: {
      badge: 'IA e Automação para Empresas',
      title: 'Automatizamos o seu negócio para você poder',
      titleHighlight: 'crescer sem limites',
      subtitle: 'Sites profissionais, agentes IA, automação e CRM para empresas que querem trabalhar melhor e captar mais clientes.',
      cta1: 'Agendar chamada gratuita', cta2: 'Falar pelo WhatsApp'
    },
    problem: {
      title: 'O seu negócio tem estes problemas?',
      subtitle: 'Milhares de empresas perdem clientes e tempo sem as ferramentas certas',
      items: [
        { title: 'Clientes sem resposta', desc: 'Você perde clientes porque não consegue responder sempre' },
        { title: 'Muito trabalho manual', desc: 'Tarefas repetitivas que consomem o seu tempo valioso' },
        { title: 'Falta de organização', desc: 'Sem sistema claro para gerir clientes e oportunidades' },
        { title: 'Perda de leads', desc: 'Oportunidades perdidas por falta de acompanhamento' },
        { title: 'Sem presença digital', desc: 'O seu negócio não está online ou tem um site desatualizado' },
        { title: 'Acompanhamento deficiente', desc: 'Não sabe qual é o estado dos seus clientes potenciais' }
      ]
    },
    services: {
      title: 'Nossos serviços',
      subtitle: 'Soluções completas para modernizar e automatizar o seu negócio',
      items: [
        { icon: '🌐', title: 'Sites profissionais', desc: 'Sites modernos, rápidos e otimizados para converter' },
        { icon: '🤖', title: 'Agentes IA', desc: 'Assistentes inteligentes que trabalham 24/7 pelo seu negócio' },
        { icon: '💬', title: 'Automação WhatsApp', desc: 'Respostas automáticas e gestão de mensagens' },
        { icon: '📧', title: 'Automação de Email', desc: 'Campanhas e follow-ups automáticos por email' },
        { icon: '📊', title: 'CRM personalizado', desc: 'Gerencie seus clientes e vendas de forma organizada' },
        { icon: '📈', title: 'Dashboards', desc: 'Visualize o desempenho do seu negócio em tempo real' },
        { icon: '⚙️', title: 'Automação de processos', desc: 'Elimine tarefas manuais e repetitivas' },
        { icon: '🔗', title: 'Integrações', desc: 'Conecte todas as suas ferramentas num único sistema' },
        { icon: '📅', title: 'Automação de agendamentos', desc: 'Sistema automático de reservas e lembretes' },
        { icon: '📋', title: 'Formulários inteligentes', desc: 'Capture leads e dados de forma automatizada' },
        { icon: '📞', title: 'Rececionista virtual', desc: 'Atenda clientes fora do horário automaticamente' },
        { icon: '🧠', title: 'Consultoria IA', desc: 'Estratégia para implementar IA na sua empresa' },
        { icon: '📱', title: 'Desenvolvimento de Apps', desc: 'Criamos apps móveis e web personalizados para o seu negócio.' }
      ]
    },
    howItWorks: {
      title: 'Como funciona',
      subtitle: 'Um processo simples e rápido para transformar o seu negócio',
      steps: [
        { number: '01', title: 'Diagnóstico gratuito', desc: 'Analisamos o seu negócio e identificamos oportunidades de melhoria' },
        { number: '02', title: 'Proposta personalizada', desc: 'Desenvolvemos uma solução adaptada exatamente às suas necessidades' },
        { number: '03', title: 'Implementação rápida', desc: 'Lançamos a sua solução em 5 a 8 dias' },
        { number: '04', title: 'Resultados reais', desc: 'Mais tempo, mais clientes e um negócio melhor organizado' }
      ]
    },
    niches: {
      title: 'A quem ajudamos?',
      subtitle: 'Trabalhamos com empresas de todos os setores',
      items: [
        { icon: '🏥', title: 'Clínicas' }, { icon: '🍽️', title: 'Restaurantes' }, { icon: '🏨', title: 'Hotéis' },
        { icon: '🏕️', title: 'Glamping' }, { icon: '🏋️', title: 'Ginásios' }, { icon: '🏠', title: 'Imobiliárias' },
        { icon: '⚖️', title: 'Advogados' }, { icon: '💄', title: 'Estéticas' }, { icon: '🚗', title: 'Oficinas' },
        { icon: '🎓', title: 'Academias' }, { icon: '🏢', title: 'Empresas' }, { icon: '👤', title: 'Profissionais' }
      ]
    },
    pricing: {
      title: 'Preços claros e diretos',
      subtitle: 'Sem custos ocultos, sem surpresas',
      project: {
        label: 'Projeto', price: 'A partir de 500€', period: 'por projeto',
        desc: 'Pagamento em duas partes: 50% para começar, 50% ao finalizar',
        features: ['Implementação completa', 'Entrega em 5-8 dias', 'Solução personalizada', 'Suporte incluído'],
        cta: 'Começar agora'
      },
      maintenance: {
        label: 'Manutenção', price: 'Sob medida', period: 'por projeto',
        desc: 'Cuota de manutenção de acordo com o escopo e complexidade do projeto',
        features: ['Suporte técnico', 'Atualizações', 'Melhorias contínuas'],
        cta: 'Saber mais'
      }
    },
    contact: {
      title: 'Pronto para automatizar o seu negócio?',
      subtitle: 'Entre em contato hoje e respondemos em menos de 24 horas',
      whatsapp: 'Falar pelo WhatsApp', calendly: 'Agendar chamada gratuita',
      why: ['Resposta em menos de 24h', 'Primeira consulta gratuita', 'Entrega em 5-8 dias', 'Suporte em 4 idiomas'],
      form: { name: 'Seu nome', email: 'Seu email', business: 'Nome do negócio', message: 'Conte-nos o que precisa...', send: 'Enviar mensagem' }
    },
    benefits: {
      title: 'Mais velocidade, mais ordem e melhor experiência',
      subtitle: 'Melhore a experiência para seus clientes e sua empresa',
      items: [
        { title: 'Resposta rápida', desc: 'Atenda seus clientes mesmo quando sua equipe não está disponível.' },
        { title: 'Mais leads organizados', desc: 'Cada oportunidade fica registrada e pronta para acompanhamento.' },
        { title: 'Menos tarefas repetitivas', desc: 'Automatize o trabalho manual e libere tempo para vender mais.' },
        { title: 'Dados claros', desc: 'Tome decisões com dashboards em tempo real e métricas visíveis.' }
      ]
    },
    footer: { tagline: 'Automação inteligente para negócios que querem crescer.', rights: '© 2026 NexiaMC. Todos os direitos reservados.' }
  },
  uk: {
    nav: { services: 'Послуги', howItWorks: 'Як це працює', pricing: 'Ціни', contact: 'Контакти', cta: 'Записатись на дзвінок' },
    hero: {
      badge: 'ШІ та Автоматизація для Бізнесу',
      title: 'Ми автоматизуємо ваш бізнес, щоб ви могли',
      titleHighlight: 'рости без обмежень',
      subtitle: 'Професійні сайти, ШІ-агенти, автоматизація та CRM для бізнесу, який хоче працювати ефективніше та залучати більше клієнтів.',
      cta1: 'Безкоштовний дзвінок', cta2: 'Написати у WhatsApp'
    },
    problem: {
      title: 'Ваш бізнес має ці проблеми?',
      subtitle: 'Тисячі компаній втрачають клієнтів і час через відсутність правильних інструментів',
      items: [
        { title: 'Клієнти без відповіді', desc: 'Ви втрачаєте клієнтів, бо не можете відповідати завжди' },
        { title: 'Забагато ручної роботи', desc: 'Повторювані завдання поглинають ваш дорогоцінний час' },
        { title: 'Відсутність організації', desc: 'Немає чіткої системи управління клієнтами та можливостями' },
        { title: 'Втрата лідів', desc: 'Можливості зникають через відсутність відстеження' },
        { title: 'Немає цифрової присутності', desc: 'Ваш бізнес не в мережі або має застарілий сайт' },
        { title: 'Поганий моніторинг', desc: 'Ви не знаєте, на якому етапі ваші потенційні клієнти' }
      ]
    },
    services: {
      title: 'Наші послуги',
      subtitle: 'Комплексні рішення для модернізації та автоматизації вашого бізнесу',
      items: [
        { icon: '🌐', title: 'Професійні сайти', desc: 'Сучасні, швидкі сайти для залучення клієнтів' },
        { icon: '🤖', title: 'ШІ-агенти', desc: 'Розумні помічники, які працюють 24/7 для вас' },
        { icon: '💬', title: 'Автоматизація WhatsApp', desc: 'Автоматичні відповіді та управління повідомленнями' },
        { icon: '📧', title: 'Автоматизація Email', desc: 'Автоматичні кампанії та follow-up листи' },
        { icon: '📊', title: 'CRM на замовлення', desc: 'Управляйте клієнтами та продажами організовано' },
        { icon: '📈', title: 'Дашборди', desc: 'Візуалізуйте ефективність бізнесу в реальному часі' },
        { icon: '⚙️', title: 'Автоматизація процесів', desc: 'Усуньте ручні та повторювані завдання' },
        { icon: '🔗', title: 'Інтеграції', desc: "Підключіть усі свої інструменти в одну систему" },
        { icon: '📅', title: 'Автоматизація записів', desc: 'Автоматична система бронювання та нагадувань' },
        { icon: '📋', title: 'Розумні форми', desc: 'Збирайте ліди та дані автоматично' },
        { icon: '📞', title: 'Віртуальний адміністратор', desc: "Обслуговуйте клієнтів у неробочий час автоматично" },
        { icon: '🧠', title: 'ШІ-консалтинг', desc: 'Стратегія впровадження ШІ у вашому бізнесі' },
        { icon: '📱', title: 'Розробка додатків', desc: 'Створюємо мобільні та веб-додатки на замовлення для вашого бізнесу.' }
      ]
    },
    howItWorks: {
      title: 'Як це працює',
      subtitle: 'Простий і швидкий процес трансформації вашого бізнесу',
      steps: [
        { number: '01', title: 'Безкоштовна діагностика', desc: 'Аналізуємо ваш бізнес і виявляємо можливості для покращення' },
        { number: '02', title: 'Персональна пропозиція', desc: 'Розробляємо рішення, адаптоване саме до ваших потреб' },
        { number: '03', title: 'Швидке впровадження', desc: 'Запускаємо ваше рішення за 5–8 днів' },
        { number: '04', title: 'Реальні результати', desc: 'Більше часу, більше клієнтів і краще організований бізнес' }
      ]
    },
    niches: {
      title: 'Кому ми допомагаємо?',
      subtitle: 'Ми працюємо з компаніями всіх галузей',
      items: [
        { icon: '🏥', title: 'Клініки' }, { icon: '🍽️', title: 'Ресторани' }, { icon: '🏨', title: 'Готелі' },
        { icon: '🏕️', title: 'Глемпінг' }, { icon: '🏋️', title: 'Спортзали' }, { icon: '🏠', title: 'Нерухомість' },
        { icon: '⚖️', title: 'Юристи' }, { icon: '💄', title: 'Бʼюті-салони' }, { icon: '🚗', title: 'Автосервіси' },
        { icon: '🎓', title: 'Академії' }, { icon: '🏢', title: 'Компанії' }, { icon: '👤', title: 'Фрілансери' }
      ]
    },
    pricing: {
      title: 'Прозорі ціни',
      subtitle: 'Ніяких прихованих витрат, ніяких сюрпризів',
      project: {
        label: 'Проект', price: 'Від 500€', period: 'за проект',
        desc: 'Оплата в два етапи: 50% на старті, 50% після завершення',
        features: ['Повне впровадження', 'Здача за 5–8 днів', 'Індивідуальне рішення', 'Підтримка включена'],
        cta: 'Розпочати зараз'
      },
      maintenance: {
        label: 'Обслуговування', price: 'Індивідуально', period: 'за проектом',
        desc: 'Вартість обслуговування відповідно до обсягу та складності проекту',
        features: ['Технічна підтримка', 'Оновлення', 'Безперервні покращення'],
        cta: 'Дізнатись більше'
      }
    },
    contact: {
      title: 'Готові автоматизувати свій бізнес?',
      subtitle: 'Напишіть нам сьогодні — відповімо протягом 24 годин',
      whatsapp: 'Написати у WhatsApp', calendly: 'Безкоштовний дзвінок',
      why: ['Відповідь менш ніж за 24г', 'Перша консультація безкоштовна', 'Здача за 5–8 днів', 'Підтримка 5 мовами'],
      form: { name: "Ваше ім'я", email: 'Ваш email', business: 'Назва бізнесу', message: 'Розкажіть, що вам потрібно...', send: 'Надіслати повідомлення' }
    },
    benefits: {
      title: 'Більше швидкості, більше порядку, краще обслуговування',
      subtitle: 'Покращте досвід для своїх клієнтів та бізнесу',
      items: [
        { title: 'Швидка відповідь', desc: 'Обслуговуйте клієнтів навіть коли команда недоступна.' },
        { title: 'Організовані ліди', desc: 'Кожна можливість зафіксована і готова до відстеження.' },
        { title: 'Менше рутини', desc: 'Автоматизуйте ручну роботу і звільніть час для продажів.' },
        { title: 'Чіткі дані', desc: 'Приймайте рішення з дашбордами в реальному часі.' }
      ]
    },
    footer: { tagline: 'Розумна автоматизація для бізнесу, який хоче рости.', rights: '© 2026 NexiaMC. Усі права захищені.' }
  }
} as const;
