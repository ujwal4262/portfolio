export const portfolioData = {
  personal: {
    name: "Ujwal Yadav",
    initials: "UY",
    title: "Computer Science Graduate & Full-Stack Developer",
    headline: "Building Modern Web & Mobile Applications",
    smallIntro: "Hello, I'm Ujwal Yadav",
    supportingText:
      "I build modern web and mobile applications with clean architecture, intuitive interfaces, and scalable backend systems.",
    aboutIntro:
      "I’m a Computer Science & Engineering graduate passionate about building software that solves real-world problems. My interests span full-stack web development, mobile applications, backend systems, and modern software architecture.",
    roles: [
      "Full-Stack Developer",
      "Web Developer",
      "App Developer",
      "Software Engineer",
      "Problem Solver"
    ],
    location: "Rupani-01, Saptari, Nepal",
    social: {
      phone: "+977 9811777551",
      github: "https://github.com/ujwal4262",
      linkedin: "https://linkedin.com",
      email: "mailto:callmeuzwal@gmail.com",
      resume: "/resume.pdf"
    },
    heroCodeVisual: {
      filename: "developer.js",
      code: `const developer = {
  name: "Ujwal Yadav",
  role: "Full-Stack Developer",
  technologies: [
    "React",
    "Node.js",
    "Python",
    "MongoDB",
    "Figma"
  ],
  passion: "Building useful products"
};`
    },
    floatingBadges: ["React", "JavaScript", "Node.js", "Python", "MongoDB", "Figma"]
  },

  aboutCards: [
    {
      id: "edu",
      title: "Education",
      subtitle: "Computer Science & Engineering",
      icon: "GraduationCap",
      description: "B.Tech candidate at KIIT University with focus on software engineering fundamentals."
    },
    {
      id: "focus",
      title: "Focus",
      subtitle: "Full-Stack Development",
      icon: "Code2",
      description: "End-to-end web & mobile applications with modern JS/TS, Python, and UI design stacks."
    },
    {
      id: "interests",
      title: "Interests",
      subtitle: "Web • Mobile • Backend • AI • UI/UX",
      icon: "Sparkles",
      description: "Exploring scalable architectures, microservices, AI workflows, and Figma design systems."
    }
  ],

  skills: {
    programming: [
      { name: "Java", icon: "Coffee" },
      { name: "JavaScript", icon: "FileCode2" },
      { name: "Python", icon: "Terminal" },
      { name: "Kotlin", icon: "Smartphone" },
      { name: "HTML5", icon: "Layout" },
      { name: "CSS3", icon: "Palette" }
    ],
    frontend: [
      { name: "React.js", icon: "Atom" },
      { name: "React Native", icon: "Smartphone" },
      { name: "Tailwind CSS", icon: "Layers" },
      { name: "Figma UI/UX", icon: "Figma" }
    ],
    backend: [
      { name: "Node.js", icon: "Server" },
      { name: "Express.js", icon: "Cpu" },
      { name: "REST APIs", icon: "Network" },
      { name: "JWT", icon: "KeyRound" },
      { name: "Bcrypt", icon: "ShieldCheck" }
    ],
    databases: [
      { name: "MongoDB", icon: "Database" },
      { name: "MySQL", icon: "DatabaseZap" },
      { name: "Firebase Realtime DB", icon: "Flame" },
      { name: "SQLite", icon: "HardDrive" }
    ],
    tools: [
      { name: "Figma", icon: "Figma" },
      { name: "Git", icon: "GitBranch" },
      { name: "GitHub", icon: "Github" },
      { name: "Android Studio", icon: "Smartphone" },
      { name: "VS Code", icon: "Code" },
      { name: "Cisco Packet Tracer", icon: "Network" }
    ],
    concepts: [
      { name: "Computer Networks & Protocols" },
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming" },
      { name: "Responsive Design" },
      { name: "UI/UX Prototyping" },
      { name: "Authentication" },
      { name: "Debugging" },
      { name: "Performance Optimization" },
      { name: "Agile Development" }
    ]
  },

  projects: [
    {
      id: "budget-tracker",
      title: "Budget Tracking Application",
      category: "Full-Stack",
      tagline: "Personal finance and budget management dashboard",
      description:
        "A personal finance application designed to help users track income, expenses, budgets, and spending patterns through an intuitive dashboard.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      features: [
        "User authentication",
        "Income tracking",
        "Expense tracking",
        "Budget management",
        "Dashboard",
        "Financial insights"
      ],
      details: {
        problem:
          "Managing personal finances manually across multiple accounts is tedious and prone to budgeting oversight. Users require a clear, centralized platform to visualize spending habits in real-time.",
        solution:
          "Engineered a full-stack budget tracker featuring secure JWT user authentication, dynamic data visualization for category spending, customizable budget limits, and instant income-versus-expense reporting.",
        architecture:
          "React frontend with interactive chart components connecting to a modular Express RESTful API. User transactions and budget targets are stored in a schema-optimized MongoDB cluster.",
        challenges:
          "Optimizing database aggregation pipelines for instant monthly trend analysis and maintaining smooth UI state synchronized with REST backend responses.",
        futureImprovements:
          "Integrating bank API sync capabilities, automated OCR receipt parsing, and machine learning powered monthly budget recommendations."
      },
      github: "https://github.com/ujwal4262",
      demo: "#",
      featured: true
    },
    {
      id: "clothes-shopping",
      title: "Clothes Shopping Application",
      category: "E-Commerce",
      tagline: "Modern online fashion retail store with seamless checkout flow",
      description:
        "A modern e-commerce application designed to provide users with a smooth and responsive online clothing shopping experience.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Product browsing",
        "Categories",
        "Search",
        "Product details",
        "Shopping cart",
        "Authentication",
        "Responsive UI"
      ],
      details: {
        problem:
          "E-commerce users expect rapid page transitions, instant search filtering, and zero friction when updating cart items on mobile devices.",
        solution:
          "Developed a streamlined apparel shopping application with real-time product filtering, persistent local cart state, dynamic product detail views, and authenticated checkout management.",
        architecture:
          "React Single Page Application utilizing custom context hooks for cart and user state, communicating with an Express server and MongoDB database.",
        challenges:
          "Ensuring cart state persistence across page reloads and handling seamless cart synchronization when guest users log into their accounts.",
        futureImprovements:
          "Adding Stripe payment processing integration, real-time stock inventory web sockets, and customer product review submission flows."
      },
      github: "https://github.com/ujwal4262",
      demo: "#",
      featured: true
    },
    {
      id: "ai-career-assistant",
      title: "AI Career & Mental Health Assistant",
      category: "AI & ML",
      tagline: "Conversational assistant backed by machine learning microservices",
      description:
        "An intelligent assistant combining conversational interaction with machine-learning-powered recommendations.",
      technologies: ["React.js", "Node.js", "Express.js", "Python", "Flask", "Machine Learning"],
      architectureDiagram: "React.js → Node.js + Express.js → Python Flask ML Microservice",
      features: [
        "AI assistant",
        "Career recommendations",
        "ML integration",
        "Authentication",
        "REST APIs",
        "Backend microservice"
      ],
      details: {
        problem:
          "Students and early-career software developers often lack personalized career path recommendations and accessible, supportive guidance for managing academic stress.",
        solution:
          "Architected a multi-service platform combining a responsive React user interface, a Node/Express authentication API, and an isolated Python Flask microservice that runs natural language processing and ML model inference.",
        architecture:
          "Client (React) connects to Gateway (Node.js/Express API). Node API validates authentication and proxies NLP query payloads to the Python Flask ML service for evaluation.",
        challenges:
          "Designing efficient inter-service HTTP communication with low latency and handling error fallbacks when the ML microservice processes complex text prompts.",
        futureImprovements:
          "Fine-tuning specialized LLM models for developer career roadmap generation and adding audio voice conversation capabilities."
      },
      github: "https://github.com/ujwal4262",
      demo: "#",
      featured: true
    },
    {
      id: "heart-disease-prediction",
      title: "Heart Disease Prediction System",
      category: "Machine Learning",
      tagline: "Clinical data analysis & predictive health diagnosis application",
      description:
        "A machine learning application that predicts the likelihood of heart disease based on medical input features.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Flask"],
      features: [
        "Data preprocessing",
        "Machine learning model",
        "Prediction system",
        "Flask API",
        "User interface"
      ],
      details: {
        problem:
          "Cardiovascular disease diagnosis relies on analyzing multiple complex medical indicators where early computational screening can aid clinical evaluation.",
        solution:
          "Trained classification algorithms on clinical health datasets to predict heart disease risk based on patient indicators (age, blood pressure, cholesterol, resting ECG) accessible via a clean web interface.",
        architecture:
          "Python Flask web server wrapping a trained Scikit-learn Pipeline (data scaling + Random Forest classification model) that processes patient parameters submitted from the frontend form.",
        challenges:
          "Ensuring dataset normalization, handling missing values effectively during data preprocessing, and evaluating model metrics to prevent false negative predictions.",
        futureImprovements:
          "Training deep neural networks on larger clinical datasets and implementing automated medical report PDF download export."
      },
      github: "https://github.com/ujwal4262",
      demo: "#",
      featured: true
    },
    {
      id: "figma-uiux-design-system",
      title: "Figma UI/UX & Product Design System",
      category: "UI/UX Design",
      tagline: "Comprehensive Figma component library, wireframes, and design system",
      description:
        "Interactive UI/UX design mockups, wireframes, and component design systems created in Figma for web & mobile software applications.",
      technologies: ["Figma", "UI/UX Design", "Wireframing", "Component Systems", "Prototyping"],
      features: [
        "Design component library",
        "Responsive UI layouts",
        "Interactive prototyping",
        "Design tokens & typography",
        "User flow mapping",
        "Developer handoff specs"
      ],
      details: {
        problem:
          "Software development without pre-planned visual hierarchy and reusable design systems leads to inconsistent UI states and delayed frontend implementation.",
        solution:
          "Designed a modular Figma design system with structured auto-layouts, atomic UI components, dark/light theme variables, and interactive clickable prototypes.",
        architecture:
          "Atomic design methodology: Tokens (colors, typography) → Atoms (buttons, inputs) → Molecules (cards, navbars) → Templates & Full Page Prototypes.",
        challenges:
          "Establishing flexible component properties and auto-layout constraints that adapt seamlessly across mobile (375px) and desktop (1440px) breakpoints.",
        futureImprovements:
          "Connecting Figma Variables directly with Tailwind CSS design tokens for automated design-to-code synchronization."
      },
      github: "https://github.com/ujwal4262",
      demo: "#",
      featured: true
    }
  ],

  experience: [
    {
      id: "exp-1",
      role: "Full-Stack Application Development",
      type: "Academic & Projects",
      period: "2024 - Present",
      description:
        "Designing and constructing end-to-end web applications with React frontend architectures, RESTful APIs, and relational/non-relational database schemas.",
      highlights: [
        "Built responsive client interfaces using React.js, Tailwind CSS, and Framer Motion.",
        "Implemented backend API routes using Node.js, Express, and Python Flask.",
        "Integrated MongoDB & MySQL databases with optimized query indexing."
      ]
    },
    {
      id: "exp-2",
      role: "Backend & API Systems",
      type: "Core Specialization",
      period: "2023 - Present",
      description:
        "Developing secure backend services with structured JSON response standards, authentication security, and clean separation of concerns.",
      highlights: [
        "Configured secure authentication using JWT (JSON Web Tokens) and password hashing with Bcrypt.",
        "Designed microservice integration between Express gateways and Python ML microservices.",
        "Applied software engineering principles and Object-Oriented Design patterns."
      ]
    },
    {
      id: "exp-3",
      role: "Mobile & Machine Learning Integration",
      type: "Specialized Engineering",
      period: "2024 - Present",
      description:
        "Exploring cross-platform mobile interface development and integrating predictive ML models into user-facing web tools.",
      highlights: [
        "Developed cross-platform mobile UI screens using React Native & Kotlin concepts.",
        "Cleaned, preprocessed, and trained predictive models using Scikit-learn, Pandas, and NumPy.",
        "Deployed ML inference endpoints for interactive real-time predictions."
      ]
    }
  ],

  education: {
    degree: "Computer Science & Engineering",
    qualification: "Bachelor of Technology (B.Tech)",
    institution: "KIIT University",
    location: "Bhubaneswar, India",
    period: "2022 – 2026",
    status: "Graduating 2026",
    courses: [
      "Software Development",
      "Data Structures & Algorithms",
      "Computer Networks",
      "Database Management Systems",
      "Cybersecurity Fundamentals",
      "Web Development",
      "Software Engineering & Architecture"
    ]
  },

  certifications: [
    {
      id: "cert-1",
      name: "Introduction to Cybersecurity",
      organization: "Cisco Networking Academy",
      date: "2025",
      credentialUrl: "#",
      description: "Comprehensive training covering network security fundamentals, threat analysis, data privacy principles, and system defense strategies."
    },
    {
      id: "cert-2",
      name: "Cisco Packet Tracer",
      organization: "Cisco Networking Academy",
      date: "2025",
      credentialUrl: "#",
      description: "Hands-on certification in network topology simulation, configuring routers and switches, IPv4/IPv6 addressing, network protocols, and network troubleshooting."
    }
  ],

  philosophy: [
    {
      step: "01",
      title: "Understand",
      description: "Understand the problem before writing code."
    },
    {
      step: "02",
      title: "Design",
      description: "Create a simple and intuitive solution."
    },
    {
      step: "03",
      title: "Build",
      description: "Write clean, maintainable code."
    },
    {
      step: "04",
      title: "Improve",
      description: "Test, debug, optimize, and iterate."
    }
  ]
};
