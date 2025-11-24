// ============================================
// PORTFOLIO CONFIGURATION
// ============================================
// Edit this file to customize your portfolio content

export const portfolioConfig = {
  // Personal Information
  name: "Guilherme Marson D' Paulo Garcia",
  title: "Full Stack Developer",
  tagline: "Passionate about crafting intelligent solutions to tackle challenges of all sizes through technology.",
  
  // Hero Section
  hero: {
    greeting: "Hi, I'm",
    description: "I craft elegant solutions to complex problems. Specialized in building modern web applications with Laravel, PHP, Vue.js, Javascript, C#, AWS.",
    ctaText: "View My Solutions",
    ctaLink: "#projects",
    secondaryCtaText: "Get in Touch",
    secondaryCtaLink: "#contact"
  },
  
  // About Section
  about: {
    title: "About Me",
    paragraphs: [
      "I'm a passionate full-stack developer with 3+ years of experience building web applications that users love. I believe in writing clean, maintainable code and creating seamless user experiences.",
      "When I'm not coding, you can find me contributing to open-source projects, or exploring new technologies. I'm always eager to learn and take on new challenges.",
      "I also stand out for contributing to process improvements and critical issue resolution that were negatively affecting teams and products I worked on. My efforts helped improve KPI metrics by up to 40% and fix critical bugs impacting key products used by over 100 clients and more than 2,000 simultaneous users"
    ],
    image: "/Guilherme.png" // Replace with your image path
  },
  
  // Skills Section
  skills: {
    title: "Skills & Technologies",
    categories: [
      {
        name: "Frontend",
        items: ["React", "Bootstrap", "CSS", "HTML", "Javascript", "Livewire", "Vue.js"]
      },
      {
        name: "Backend",
        items: ["C#", "Python", "PHP", "Dart", "Laravel", "REST APIs", "Webhooks", "MVC Architecture", "Pandas", "Selenium", "Microservices"]
      },
      {
        name: "Mobile",
        items: ["Flutter"]
      },
      {
        name: "Databases",
        items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"]
      },
      {
        name: "DevOps",
        items: ["Kubernetes", "Docker", "AWS Cloudwatch", "AWS EC2", "AWS S3", "AWS RDS/Aurora", "Oracle Cloud OCI", "Grafana", "Bash", "Shell Scripting", "Python Scripting",
                "Docker CLI", "Kubectl", "Crontabs", "Getting errors by analyzing logs", "yaml manifests to create and maintain kubernetes pods and deployment"]
      },
      {
        name: "Softskills",
        items: ["Proactivity", "Teamwork", "Knowledge Sharing", "Resilience", "Adaptability", "Self-Learning / Self-Taught", "Fast and Continuous Learning", "Empathy"]
      },
      {
        name: "Tools & Others",
        items: ["Git", "Bitbucket", "Github", "Gitlab", "Linux", "Windows", "Agile", "Jira", "Notion", "Supabase", "Figma", "Netlify"]
      }
    ]
  },
  
  // Projects Section
  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "Flash Financas",
        description: "A mobile app for complete financial management: expenses, transactions, and overall financial health. No spreadsheets needed, and it works even offline — with automatic synchronization once you’re back online. Perfect for quickly logging expenses on the go, making your daily life easier.",
        image: "/Flash Financas.png",
        tags: ["Flutter", "Supabase for auth and database hosting", "SQLite for local offline data", "PostgreSQL for database"],
        figma: "https://www.figma.com/design/iUP6Pwpz6nn14ffZ1eCx4g/Flash-Screens-Prototype?node-id=0-1&t=9wJ8vyaJHxZjaObs-1",
        liveUrl: "#",
        githubUrl: "https://github.com/FlashFinancas"
      },
      {
        title: "Moovflix",
        description: "A free and open-source web platform — with future mobile support — for streaming public domain movies, series, and animations. Each account supports up to 10 profiles, making it easy to share and personalize content management. A unified solution for enjoying classic productions with simple and accessible organization.",
        image: "/Moovflix.png",
        tags: ["Laravel or Node.js for backend (Still studying the pros and cons)", "React for Frontend", "PostgreSQL for database", "Redis for caching", "FFmpeg for streaming", 
          "OAuth for authentication"],
        figma: "https://www.figma.com/design/LpecDGz9cIe0KfabE7BdXx/Moovflix?node-id=0-1&t=dXjBoiJJcuHa27M6-1",
        liveUrl: "https://moovflix.com",
        githubUrl: "https://github.com/guilhermemdpg/moovflix"
      },
      {
        title: "Loqplace",
        description: "Loqplace is a web platform born from a real need I observed both at work and in my personal life. Its purpose is to provide a unified space where individuals and businesses can find venues for all kinds of events — from birthday parties to weddings. The platform gives users easy access to reviews, photos, contact details, payment, and booking information. Venue owners benefit from a centralized environment to manage all their locations, featuring dashboards, editing tools, integrated chat, and much more.",
        image: "/LoqPlace.png",
        tags: ["Laravel", "PostgreSQL", "Python", "Livewire", "OAuth"],
        figma: "https://www.figma.com/design/IJ3Wk0d83qABibTT9WxDry/Loqplace?node-id=0-1&t=sbQSzUm20FQXjAK0-1",
        liveUrl: "https://loqplace.com",
        githubUrl: "https://github.com/guilhermemdpg"
      },
      {
        title: "Eduxeclass",
        description: "A project I was involved in at my previous job, where I was one of the main people responsible for product maintenance and new feature development, working alongside a colleague. Although I was not part of the original creation, I took on the challenge of reviving and sustaining the product. With resilience and a proactive approach, I managed to overcome the lack of documentation and quickly adapted to a completely new tech stack at the time, ensuring the product’s growth and continuity.",
        image: "/placeholder.svg",
        tags: ["Laravel", "MySQL", "PHP", "Vue.js"],
        figma: "#",
        liveUrl: "#",
        githubUrl: "#"
      },
      {
        title: "Vaga Justa",
        description: "Vaga Justa Project is an initiative I discovered on LinkedIn through one of its founders, Diogo Cezar. Interested in the project’s purpose and mission, I reached out to learn more and became one of its contributors. The project aims to create a “Vaga Justa” manifesto for both companies and developers. Although still in its early stages, we have committed people working to drive the initiative forward.",
        image: "/vaga_justa.png",
        tags: ["Markdown", "Manifesto", "Open Source"],
        figma: "#",
        liveUrl: "#",
        githubUrl: "https://github.com/vaga-justa"
      }
    ]
  },

  // Courses Section
  courses: {
    title: "Courses and Certifications",
    items: [
      {
        title: "Oracle Certified Associate",
        description: "An Oracle Certified Associate has a technical background and a strong understanding of Oracle technologies. An Associate certification is intended for candidates who can use their knowledge and experience to apply Oracle’s recommended best practices in the respective domain. Prepares you for these roles: - Administrator - Implementer - Developer - Architect - Data scientist/business analyst. Recognizes these skills: - Foundational and intermediate knowledge and skills",
        image: "/oracle.png",
        tags: ["OCI", "Oracle Cloud Infrastructure", "Status: Completed"],
        cert: "/eCertificate.pdf"
      },
      {
        title: "SQLite Database",
        description: "Course completed on the Origamid platform, focused on SQLite, where I learned data types, pragma, CRUD operations, SQLite environment setup, limitations, use cases, functions, views, triggers, and a CRM project as the course’s final assignment. In this project, I was able to get hands-on experience and build an SQLite database that will later be used in the upcoming Node.js course on the same platform.",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original-wordmark.svg",
        tags: ["CRUD ops", "Pragma", "Strict", "SQLite CLI", "JSON", "Views, Triggers", "Data Types", "Status: Completed"],
        cert: "https://www.origamid.com/certificate/1a913b0f"
      },
      { 
        title: "Kubernetes Essentials",
        description: "In this course, I learned more about the Kubernetes engine, how it runs on top of Docker through Minikube for local learning, and I also learned concepts such as the control plane, pods, YAML manifests, resource limitations, crash loopback and how to fix it, deploying web images and operating system images like Ubuntu, and web servers such as Nginx. In addition, I also learned more about the history of how the Kubernetes project emerged and the companies behind its maintenance and development.",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
        tags: ["Kubernetes", "Pods", "Yaml", "Shell", "Control Plane", "Status: Completed"],
        cert: "/certificate-kubernetes-essentials.pdf"
      },
      {
        title: "Complete Javascript ES6",
        description: "In this course, you will learn everything necessary to master JavaScript. The course goes from basic to advanced, and by the end of it you will have a full understanding of the language, its main methods, and its syntax. The focus is on learning the language, but its primary area of application will be on the web, through DOM manipulation and requests using the Fetch API. This is not a course for those looking for something quick, but for those who want to truly master the language. The code taught uses all the latest features of modern JavaScript versions, such as arrow functions, promises, and more.",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        tags: ["Javascript ES6", "Promisses", "Data Types", "Arrow Functions", "DOM Manipulation", "Status: in progress"],
        cert: "#"
      },
      {
        title: "Complete React",
        description: "In this course, you will learn how to use React from scratch for building reactive web applications. You will learn how to create a web application with features similar to social networks like Instagram. The focus of the course is on gaining a complete understanding of React, so almost everything will be built from scratch, without relying on external packages.",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        tags: ["React", "Components", "Hooks", "Components Lifecycle", "Promisses", "Status: in progress"],
        cert: "#"
      },
       {
        title: "CSS Flexbox, CSS Grid Layout, UI Advanced Design",
        description: "A set of CSS courses where I was able to learn, at a more low-level approach, how to manually handle different behaviors of web styling. I also learned, in the Advanced UI Design course, more robust Figma features, building on what I had already learned in the Web Design course from the same platform.",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        tags: ["CSS Flex Layout", "Flexbox Properties", "Grid Conventions and Properties", "Intermediary Figma", "Complete web design from scratch", "Status: Completed"],
        cert: "https://www.origamid.com/certificate/47eb71a7",
      }
    ]
  },
  
  // Contact Section
  contact: {
    title: "Get In Touch",
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    email: "guimarsondpgarcia@gmail.com",
    social: {
      github: "https://github.com/guilhermemdpg",
      linkedin: "https://linkedin.com/in/guilherme-marson-b18b241b5",
      gitlab: "https://gitlab.com/gmdpg98"
    }
  }
};
