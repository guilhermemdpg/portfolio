export type Language = "pt" | "en";

export const portfolioConfig = {
  name: "Guilherme Marson D' Paulo Garcia",
  shortName: "Guilherme Garcia",
  initials: "GG",
  email: "guimarsondpgarcia@gmail.com",
  location: "São Paulo, Brasil",
  portrait: "/Guilherme-duotone-final.png",
  portraitOriginal: "/Guilherme.png",
  resumePT: "/curriculo-guilherme-garcia-desenvolvedor-de-software.pdf",
  resumeEN: "/guilherme-garcia-software-developer.pdf",
  social: {
    github: "https://github.com/guilhermemdpg",
    linkedin: "https://linkedin.com/in/guilherme-marson-d-paulo-garcia-b18b241b5",
    gitlab: "https://gitlab.com/gmdpg98",
  },
  locales: {
    pt: {
      meta: {
        title: "Guilherme Garcia — Engenheiro de Software",
        description:
          "Engenheiro de Software especializado em produtos web, modernização de sistemas, observabilidade e confiabilidade operacional.",
      },
      navigation: {
        work: "Trabalho",
        about: "Sobre",
        experience: "Experiência",
        stack: "Stack",
        learning: "Formação",
        contact: "Contato",
        menu: "Abrir menu",
        close: "Fechar menu",
        language: "Mudar para inglês",
      },
      hero: {
        eyebrow: "Engenheiro de Software • Full Stack & Reliability",
        titleLead: "Construo produtos",
        titleAccent: "que não podem parar.",
        description:
          "Transformo sistemas complexos em experiências mais claras, sustentáveis e confiáveis — do componente no front-end à observabilidade em produção.",
        primaryCta: "Explorar meu trabalho",
        secondaryCta: "Baixar currículo",
        status: "Aberto a boas conversas",
        locationLabel: "Baseado em São Paulo",
        sceneLabel: "Sistema em evolução",
        sceneStatus: "todos os serviços operacionais",
        sceneNodes: ["BUILD", "OBSERVE", "EVOLVE"],
      },
      signals: [
        { value: "3 frentes", label: "Produto, infraestrutura e DevOps" },
        { value: "24×7", label: "Experiência em operação crítica" },
        { value: "≈200", label: "Clientes em ambientes sustentados" },
        { value: "15+", label: "Sites entregues como freelancer" },
      ],
      about: {
        eyebrow: "Minha forma de trabalhar",
        title: "Código é só uma parte da entrega.",
        intro:
          "Sou bacharel em Ciência da Computação e atuo entre desenvolvimento Full Stack, infraestrutura e DevOps. Essa visão de ponta a ponta me ajuda a construir interfaces pensando na regra de negócio — e sistemas pensando em quem depende deles todos os dias.",
        paragraphs: [
          "Hoje, na TOTVS juriTIs, participo da evolução do LegalDesk, um ERP web completo para a gestão de escritórios de advocacia. Trabalho na nova geração do produto, criando componentes e estruturas reutilizáveis em Vue.js e conectando essa experiência a uma base robusta em C#/.NET.",
          "Antes disso, atuei em ambientes de alta criticidade da Hapvida/TIVIT, onde observabilidade não era um dashboard decorativo: era o caminho para antecipar falhas, investigar padrões e proteger fluxos essenciais da operação.",
        ],
        principle: "Entender o sistema inteiro para melhorar a parte certa.",
      },
      work: {
        eyebrow: "Trabalho em destaque",
        title: "Problemas reais. Contextos complexos. Impacto que permanece.",
        description:
          "Uma seleção de produtos e desafios profissionais que representam melhor o tipo de engenharia que entrego hoje.",
        confidential: "Case profissional • detalhes públicos limitados",
        items: [
          {
            number: "01",
            company: "TOTVS juriTIs",
            title: "LegalDesk — a nova geração de um ERP jurídico",
            category: "Modernização de produto",
            period: "2026 — presente",
            summary:
              "Construção do zero de componentes e estruturas genéricas que dão forma à nova experiência do LegalDesk, um ERP completo para gestão jurídica.",
            challenge:
              "Evoluir uma aplicação consolidada sem perder regras de negócio, comportamentos e confiança conquistados no produto legado.",
            contribution: [
              "Componentes reutilizáveis em Vue.js para reduzir duplicação e padronizar novas telas.",
              "Migração gradual de fluxos em Durandal, preservando o comportamento já validado pelo negócio.",
              "Atuação Full Stack em C#/.NET, APIs, grids e regras de negócio em parceria com UX e produto.",
            ],
            tags: ["Vue.js", "C# / .NET", "Durandal", "Design System", "ERP"],
            tone: "cyan",
          },
          {
            number: "02",
            company: "Hapvida • TIVIT",
            title: "Observabilidade aplicada a uma operação crítica",
            category: "Reliability case",
            period: "2026",
            summary:
              "Investigação proativa de falhas recorrentes na exportação de exames, um fluxo sensível e diretamente ligado à continuidade operacional.",
            challenge:
              "Transformar sinais dispersos em uma hipótese técnica clara antes que a recorrência se convertesse em impacto ainda maior.",
            contribution: [
              "Correlação de métricas e eventos no Zabbix para isolar padrões de falha.",
              "Identificação de locks em tabelas do banco de dados como causa associada ao processo.",
              "Direcionamento técnico para mitigação, somado à atuação 24×7 com Grafana e Datadog.",
            ],
            tags: ["Zabbix", "Grafana", "Datadog", "SQL", "Incident Response"],
            tone: "lime",
          },
          {
            number: "03",
            company: "Eduxe",
            title: "De operação reativa a ambientes mais previsíveis",
            category: "Infraestrutura & DevOps",
            period: "2022 — 2025",
            summary:
              "Reestruturação, automação e observabilidade de ambientes críticos usados por aproximadamente 200 clientes.",
            challenge:
              "Estabilizar produtos com pouca documentação e criar condições para o time detectar, resolver e prevenir problemas com mais velocidade.",
            contribution: [
              "Redução aproximada de 40% nos incidentes críticos em produção.",
              "Tempo de detecção reduzido de horas para minutos com CloudWatch e Grafana.",
              "Automações que reduziram em 40–50% o tempo de rotinas internas.",
            ],
            tags: ["AWS", "Docker", "Linux", "Python", "Grafana"],
            tone: "violet",
          },
          {
            number: "04",
            company: "Open source",
            title: "Vaga Justa — tecnologia também é posicionamento",
            category: "Comunidade",
            period: "Contribuição aberta",
            summary:
              "Uma iniciativa coletiva para tornar processos seletivos mais transparentes, respeitosos e equilibrados para empresas e profissionais.",
            challenge:
              "Transformar uma insatisfação comum do mercado em princípios públicos que qualquer pessoa possa consultar e melhorar.",
            contribution: [
              "Colaboração com uma comunidade multidisciplinar.",
              "Construção aberta de um manifesto para empresas e desenvolvedores.",
              "Documentação versionada e participação pública via GitHub.",
            ],
            tags: ["Open Source", "GitHub", "Markdown", "Comunidade"],
            tone: "orange",
            link: "https://github.com/vaga-justa",
            linkLabel: "Conhecer a iniciativa",
          },
        ],
      },
      experience: {
        eyebrow: "Trajetória",
        title: "Cada etapa ampliou o meu campo de visão.",
        description:
          "Do design à operação crítica, fui somando camadas até conseguir enxergar produto e infraestrutura como um único sistema.",
        present: "Agora",
        items: [
          {
            company: "TOTVS juriTIs",
            role: "Desenvolvedor Pleno",
            period: "abr 2026 — atual",
            description:
              "Evolução e modernização do LegalDesk com C#/.NET e Vue.js, criando a base reutilizável para a nova experiência do produto.",
          },
          {
            company: "Hapvida • TIVIT",
            role: "Analista de Infraestrutura",
            period: "fev 2026 — abr 2026",
            description:
              "Monitoramento, troubleshooting e resposta a incidentes em uma operação 24×7 de alta criticidade.",
          },
          {
            company: "Eduxe",
            role: "DevOps, Infraestrutura & Desenvolvimento",
            period: "set 2022 — dez 2025",
            description:
              "Progressão de Operações para Desenvolvimento e DevOps, com foco em automação, observabilidade e sustentação de produtos.",
          },
          {
            company: "Projetos independentes",
            role: "Web Designer & Developer",
            period: "fev 2020 — set 2022",
            description:
              "Mais de 15 websites entregues do conceito ao deploy, com satisfação de clientes superior a 95%.",
          },
        ],
      },
      skills: {
        eyebrow: "Capacidades",
        title: "Uma stack orientada ao problema, não à tendência.",
        description:
          "Ferramentas que uso para construir, operar e evoluir sistemas com responsabilidade de ponta a ponta.",
        groups: [
          {
            number: "01",
            title: "Construir",
            description: "Produtos web e interfaces reutilizáveis conectados a regras de negócio reais.",
            items: ["C# / .NET", "Vue.js", "JavaScript", "React", "Laravel", "REST APIs"],
          },
          {
            number: "02",
            title: "Operar",
            description: "Ambientes confiáveis, processos repetíveis e deploys com menor risco.",
            items: ["Linux", "Docker", "Kubernetes", "AWS", "Azure", "Nginx"],
          },
          {
            number: "03",
            title: "Observar",
            description: "Sinais que ajudam o time a agir antes, diagnosticar melhor e aprender com falhas.",
            items: ["Grafana", "Zabbix", "Datadog", "CloudWatch", "Logs", "Incident Response"],
          },
          {
            number: "04",
            title: "Automatizar",
            description: "Rotinas e dados transformados em fluxos claros, rápidos e auditáveis.",
            items: ["Python", "Shell Script", "SQL", "PostgreSQL", "MySQL", "Webhooks"],
          },
        ],
      },
      learning: {
        eyebrow: "Formação & evolução",
        title: "Aprendizado contínuo, aplicado no mundo real.",
        degree: {
          title: "Bacharelado em Ciência da Computação",
          institution: "Universidade Anhanguera",
          period: "2020 — 2023",
        },
        certificatesLabel: "Certificações e cursos selecionados",
        viewCertificate: "Ver certificado",
        items: [
          { title: "Oracle Cloud Infrastructure Foundations Associate", issuer: "Oracle Academy", year: "2025", status: "Concluído", url: "/eCertificate.pdf" },
          { title: "Kubernetes Essentials", issuer: "LINUXTips", year: "2025", status: "Concluído", url: "/certificate-kubernetes-essentials.pdf" },
          { title: "SQLite", issuer: "Origamid", year: "2025", status: "Concluído", url: "https://www.origamid.com/certificate/1a913b0f" },
          { title: "Vue.js 2 Completo", issuer: "Origamid", year: "2025", status: "Concluído" },
          { title: "MongoDB", issuer: "Udemy", year: "2024", status: "Concluído" },
          { title: "JavaScript ES6+", issuer: "Origamid", year: "2021", status: "Concluído" },
        ],
      },
      contact: {
        eyebrow: "Vamos conversar",
        title: "Tem um produto complexo ou um sistema que precisa evoluir?",
        description:
          "Gosto de desafios em que engenharia, experiência e confiabilidade precisam caminhar juntas. Se esse é o seu contexto, quero conhecê-lo.",
        emailCta: "Iniciar uma conversa",
        resumeTitle: "Prefere começar pelo currículo?",
        resumeDescription: "Escolha a versão e abra o PDF em uma nova aba.",
        resumePT: "Currículo em português",
        resumeEN: "Resume in English",
        copyEmail: "Copiar e-mail",
        copied: "E-mail copiado",
      },
      footer: {
        line: "Projetado e desenvolvido com intenção em São Paulo.",
        backToTop: "Voltar ao topo",
      },
    },
    en: {
      meta: {
        title: "Guilherme Garcia — Software Engineer",
        description:
          "Software Engineer focused on web products, system modernization, observability, and operational reliability.",
      },
      navigation: {
        work: "Work",
        about: "About",
        experience: "Experience",
        stack: "Stack",
        learning: "Education",
        contact: "Contact",
        menu: "Open menu",
        close: "Close menu",
        language: "Mudar para português",
      },
      hero: {
        eyebrow: "Software Engineer • Full Stack & Reliability",
        titleLead: "I build products",
        titleAccent: "that cannot stop.",
        description:
          "I turn complex systems into clearer, maintainable, and reliable experiences — from the front-end component to production observability.",
        primaryCta: "Explore my work",
        secondaryCta: "Download résumé",
        status: "Open to meaningful conversations",
        locationLabel: "Based in São Paulo",
        sceneLabel: "System evolving",
        sceneStatus: "all services operational",
        sceneNodes: ["BUILD", "OBSERVE", "EVOLVE"],
      },
      signals: [
        { value: "3 areas", label: "Product, infrastructure & DevOps" },
        { value: "24×7", label: "Critical operations experience" },
        { value: "≈200", label: "Customers on supported environments" },
        { value: "15+", label: "Freelance websites delivered" },
      ],
      about: {
        eyebrow: "How I work",
        title: "Code is only one part of the delivery.",
        intro:
          "I hold a Bachelor's degree in Computer Science and work across Full Stack Development, Infrastructure, and DevOps. That end-to-end perspective helps me build interfaces with business rules in mind — and systems with the people who rely on them in mind.",
        paragraphs: [
          "Today, at TOTVS juriTIs, I help evolve LegalDesk, a complete web ERP for law firm management. I work on the product's new generation, creating reusable Vue.js components and structures connected to a robust C#/.NET foundation.",
          "Before that, I worked in Hapvida/TIVIT's mission-critical environments, where observability was not a decorative dashboard: it was how we anticipated failures, investigated patterns, and protected essential operational flows.",
        ],
        principle: "Understand the whole system to improve the right part.",
      },
      work: {
        eyebrow: "Selected work",
        title: "Real problems. Complex contexts. Lasting impact.",
        description:
          "A selection of professional products and challenges that best represent the engineering work I deliver today.",
        confidential: "Professional case • limited public details",
        items: [
          {
            number: "01",
            company: "TOTVS juriTIs",
            title: "LegalDesk — the next generation of a legal ERP",
            category: "Product modernization",
            period: "2026 — present",
            summary: "Building components and generic structures from the ground up to shape the new LegalDesk experience, a complete ERP for legal practice management.",
            challenge: "Evolve an established application without losing the business rules, behaviors, and trust earned by the legacy product.",
            contribution: [
              "Reusable Vue.js components that reduce duplication and standardize new screens.",
              "Gradual migration of Durandal flows while preserving business-validated behavior.",
              "Full Stack work across C#/.NET, APIs, grids, and business rules with UX and Product.",
            ],
            tags: ["Vue.js", "C# / .NET", "Durandal", "Design System", "ERP"],
            tone: "cyan",
          },
          {
            number: "02",
            company: "Hapvida • TIVIT",
            title: "Observability applied to critical operations",
            category: "Reliability case",
            period: "2026",
            summary: "Proactive investigation of recurring failures in the medical exam export process, a sensitive flow tied to operational continuity.",
            challenge: "Turn scattered signals into a clear technical hypothesis before recurrence developed into even greater operational impact.",
            contribution: [
              "Correlated metrics and events in Zabbix to isolate failure patterns.",
              "Identified database table locks as a cause associated with the process.",
              "Provided technical direction for mitigation while supporting a 24×7 operation with Grafana and Datadog.",
            ],
            tags: ["Zabbix", "Grafana", "Datadog", "SQL", "Incident Response"],
            tone: "lime",
          },
          {
            number: "03",
            company: "Eduxe",
            title: "From reactive operations to predictable environments",
            category: "Infrastructure & DevOps",
            period: "2022 — 2025",
            summary: "Restructuring, automation, and observability for critical environments used by approximately 200 customers.",
            challenge: "Stabilize lightly documented products and help the team detect, resolve, and prevent problems faster.",
            contribution: [
              "Approximately 40% fewer critical production incidents.",
              "Detection time reduced from hours to minutes with CloudWatch and Grafana.",
              "Automation that cut internal routine execution time by 40–50%.",
            ],
            tags: ["AWS", "Docker", "Linux", "Python", "Grafana"],
            tone: "violet",
          },
          {
            number: "04",
            company: "Open source",
            title: "Vaga Justa — technology is also a stance",
            category: "Community",
            period: "Open contribution",
            summary: "A collective initiative to make hiring processes more transparent, respectful, and balanced for companies and professionals.",
            challenge: "Turn a shared market frustration into public principles anyone can consult and improve.",
            contribution: [
              "Collaboration with a multidisciplinary community.",
              "Open development of a manifesto for companies and developers.",
              "Versioned documentation and public participation through GitHub.",
            ],
            tags: ["Open Source", "GitHub", "Markdown", "Community"],
            tone: "orange",
            link: "https://github.com/vaga-justa",
            linkLabel: "Explore the initiative",
          },
        ],
      },
      experience: {
        eyebrow: "Journey",
        title: "Every chapter expanded my field of view.",
        description: "From design to mission-critical operations, I kept adding layers until I could see product and infrastructure as one system.",
        present: "Now",
        items: [
          { company: "TOTVS juriTIs", role: "Mid-Level Software Developer", period: "Apr 2026 — present", description: "Evolving and modernizing LegalDesk with C#/.NET and Vue.js, creating a reusable foundation for the product's new experience." },
          { company: "Hapvida • TIVIT", role: "Infrastructure Analyst", period: "Feb 2026 — Apr 2026", description: "Monitoring, troubleshooting, and incident response in a 24×7 mission-critical operation." },
          { company: "Eduxe", role: "DevOps, Infrastructure & Development", period: "Sep 2022 — Dec 2025", description: "Progressed from Operations to Development and DevOps, focusing on automation, observability, and product reliability." },
          { company: "Independent projects", role: "Web Designer & Developer", period: "Feb 2020 — Sep 2022", description: "Delivered over 15 websites from concept to deployment, maintaining client satisfaction above 95%." },
        ],
      },
      skills: {
        eyebrow: "Capabilities",
        title: "A stack driven by the problem, not the trend.",
        description: "Tools I use to build, operate, and evolve systems with end-to-end responsibility.",
        groups: [
          { number: "01", title: "Build", description: "Web products and reusable interfaces connected to real business rules.", items: ["C# / .NET", "Vue.js", "JavaScript", "React", "Laravel", "REST APIs"] },
          { number: "02", title: "Operate", description: "Reliable environments, repeatable processes, and lower-risk deployments.", items: ["Linux", "Docker", "Kubernetes", "AWS", "Azure", "Nginx"] },
          { number: "03", title: "Observe", description: "Signals that help teams act sooner, diagnose better, and learn from failure.", items: ["Grafana", "Zabbix", "Datadog", "CloudWatch", "Logs", "Incident Response"] },
          { number: "04", title: "Automate", description: "Routines and data turned into clear, fast, and auditable workflows.", items: ["Python", "Shell Script", "SQL", "PostgreSQL", "MySQL", "Webhooks"] },
        ],
      },
      learning: {
        eyebrow: "Education & growth",
        title: "Continuous learning, applied to the real world.",
        degree: { title: "Bachelor's Degree in Computer Science", institution: "Universidade Anhanguera", period: "2020 — 2023" },
        certificatesLabel: "Selected certifications & courses",
        viewCertificate: "View certificate",
        items: [
          { title: "Oracle Cloud Infrastructure Foundations Associate", issuer: "Oracle Academy", year: "2025", status: "Completed", url: "/eCertificate.pdf" },
          { title: "Kubernetes Essentials", issuer: "LINUXTips", year: "2025", status: "Completed", url: "/certificate-kubernetes-essentials.pdf" },
          { title: "SQLite", issuer: "Origamid", year: "2025", status: "Completed", url: "https://www.origamid.com/certificate/1a913b0f" },
          { title: "Complete Vue.js 2", issuer: "Origamid", year: "2025", status: "Completed" },
          { title: "MongoDB", issuer: "Udemy", year: "2024", status: "Completed" },
          { title: "JavaScript ES6+", issuer: "Origamid", year: "2021", status: "Completed" },
        ],
      },
      contact: {
        eyebrow: "Let's talk",
        title: "Working on a complex product or a system that needs to evolve?",
        description: "I enjoy challenges where engineering, experience, and reliability need to move together. If that is your context, I would like to hear about it.",
        emailCta: "Start a conversation",
        resumeTitle: "Would you rather start with my résumé?",
        resumeDescription: "Choose a version and open the PDF in a new tab.",
        resumePT: "Currículo em português",
        resumeEN: "Résumé in English",
        copyEmail: "Copy email",
        copied: "Email copied",
      },
      footer: {
        line: "Designed and developed with intention in São Paulo.",
        backToTop: "Back to top",
      },
    },
  },
} as const;

export type PortfolioContent = (typeof portfolioConfig.locales)[Language];
