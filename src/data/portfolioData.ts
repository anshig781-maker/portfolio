export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  type: 'concept' | 'competition' | 'conference' | 'cocurricular';
  role: string;
  period?: string;
  summary: string;
  bullets: string[];
  tags: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  skillsGained: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  grade?: string;
  focus: string;
}

export const PERSONAL_INFO = {
  name: "Aanshi Gupta",
  titles: [
    "BBA Student (Finance & Marketing)",
    "Business & Market Research Enthusiast",
    "Aspiring Business Professional",
  ],
  tagline: "Learning Business. Exploring Innovation. Creating Impact.",
  location: "Kanpur, Uttar Pradesh, India",
  college: "Allenhouse Business School, Kanpur",
  degree: "Bachelor of Business Administration (BBA)",
  year: "Second Year",
  score: "8.30 / 10 CGPA (First Year)",
  specialization: "Finance and Marketing",
  email: "anshig781@gmail.com",
  linkedin: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
  github: "https://github.com/anshig781-maker",
  objective:
    "A BBA student specializing in Finance and Marketing, seeking opportunities to apply academic knowledge in financial documentation, MS Excel, business research, and marketing. Experienced in CA-firm office administration, KYC documentation, and teamwork through national-level business competitions.",
  aboutText: [
    "I am currently pursuing my Bachelor of Business Administration at Allenhouse Business School, Kanpur, with a dual specialization in Finance and Marketing.",
    "My core academic and professional interests encompass financial documentation, business research, market analysis, organizational management, and emerging technologies.",
    "Through my hands-on internship experience at a Chartered Accountancy firm and active leadership in national-level business idea competitions, I have built practical exposure to office administration, KYC workflows, teamwork, executive presentations, and strategic business planning.",
    "I believe in continuous learning and exploring how disciplined business management combined with modern technology can solve real-world problems in regional and rural economies.",
  ],
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Business Administration (B.B.A.)",
    institution: "Allenhouse Business School",
    location: "Kanpur, Uttar Pradesh",
    year: "Second Year (Pursuing)",
    grade: "8.30 / 10 (1st Year Academic Score)",
    focus: "Specializing in Finance & Marketing. Coursework includes Financial Management, Marketing Strategies, Organizational Behavior, Business Law, and Quantitative Techniques.",
  },
  {
    degree: "Class XII – CBSE Commerce",
    institution: "Kendriya Vidyalaya No. 1, AFS Chakeri",
    location: "Kanpur, Uttar Pradesh",
    year: "Completed",
    focus: "Senior Secondary Commerce stream with focus on Accountancy, Business Studies, Economics, and Applied Mathematics.",
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Office Assistant Intern",
    company: "Vivek K.B. Gupta & Co. – Chartered Accountancy Firm",
    location: "Kanpur, Uttar Pradesh",
    period: "May 2026 – July 2026",
    responsibilities: [
      "Managed comprehensive KYC documentation workflows, reviewing and cataloging Aadhaar, PAN, and TAN compliance submissions.",
      "Maintained and organized over 200+ physical and digital client files with rigorous confidentiality and indexing accuracy.",
      "Conducted data entry, sorting, validation, and tabular reconciliation utilizing MS Excel to support senior audit assistants.",
      "Assisted daily office administration routines, statutory filing tracking, and client documentation handoffs.",
      "Structured physical archival systems to streamline retrieval of prior assessment year documents.",
    ],
    skillsGained: [
      "Financial Documentation",
      "KYC Processes",
      "MS Excel",
      "Office Administration",
      "Record Management",
    ],
  },
];

export const SKILLS_DATA = [
  {
    category: "Finance & Administration",
    description: "Foundational audit assistance, regulatory documentation, and compliance workflows.",
    skills: [
      "Financial Documentation",
      "KYC Compliance",
      "Record Maintenance",
      "Financial Planning Basics",
    ],
  },
  {
    category: "Marketing & Business",
    description: "Market research, user demand discovery, and strategic product positioning.",
    skills: [
      "Product Research",
      "Market Perspective",
      "Business Research",
      "Go-to-Market Strategy",
    ],
  },
  {
    category: "Technical Tools",
    description: "Data handling, executive pitch decks, and modern AI productivity workflows.",
    skills: [
      "MS Excel",
      "Basic Excel Formulas",
      "MS PowerPoint",
      "Generative AI Tools",
      "Prompt Engineering Basics",
    ],
  },
  {
    category: "Professional & Leadership",
    description: "Team leadership, cross-functional collaboration, and public speaking.",
    skills: [
      "Effective Communication",
      "Presentation Skills",
      "Team Leadership",
      "Teamwork",
      "Problem-Solving",
    ],
  },
];

export const GRAM_TECH_STUDIO = {
  title: "Gram-Tech Studio",
  subtitle: "Rural Supply-Chain & Hyperlocal Management Hub",
  category: "Social Innovation · Rural Entrepreneurship · Supply Chain Management",
  badge: "Proposed Social Innovation Concept",
  quotes: [
    {
      text: "जब हुनर को गांव में ही ठहराव मिलेगा, तभी ग्रामीण भारत की प्रगति को नया आसमान मिलेगा।",
      attribution: "Core Guiding Philosophy",
      isHindi: true,
    },
    {
      text: "True innovation does not lie in migrating the village to the city; it lies in bringing the global supply chain to the village.",
      attribution: "Project Vision Statement",
      isHindi: false,
    },
  ],
  problem: {
    title: "The Problem",
    description:
      "Rural youth often struggle to find sustainable non-agricultural employment within their villages. Seasonal agricultural income, volatile market rates, and limited local business infrastructure compel talented youth to migrate to overcrowded urban centers for low-wage entry jobs.",
  },
  solution: {
    title: "The Proposed Solution",
    description:
      "Gram-Tech Studio is a proposed shared-infrastructure business management hub situated inside village clusters. It acts as an operational bridge connecting agricultural producers, Farmer Producer Organisations (FPOs), and rural MSMEs directly with urban retail buyers and e-commerce platforms. The studio manages end-to-end digital listings, branding, quality grading, inventory, and logistics without requiring heavy individual capital investments.",
  },
  divisions: [
    {
      id: "sales",
      number: "01",
      name: "Sales & Digital Listing",
      focus: "Client communication, wholesale orders, digital product listings, catalog creation, and B2B WhatsApp business operations.",
    },
    {
      id: "branding",
      number: "02",
      name: "Branding & Packaging",
      focus: "Product photography, regional brand identity, biodegradable packaging design, and localized promotional collateral.",
    },
    {
      id: "quality",
      number: "03",
      name: "Quality Testing",
      focus: "Grain moisture checks, visual grading, product sorting, quality assurance benchmarks, and food hygiene compliance.",
    },
    {
      id: "logistics",
      number: "04",
      name: "Collection & Agri-Logistics",
      focus: "Farmer cluster coordination, scheduled farmgate produce collection, route optimization, and localized cold/dry transit.",
    },
    {
      id: "billing",
      number: "05",
      name: "Billing & Stock Management",
      focus: "Real-time inventory logging, MS Excel and Tally-based invoicing, farmer payment reconciliation, and ledger upkeep.",
    },
  ],
  beneficiaries: [
    {
      title: "Rural Youth (Ages 18–30)",
      detail: "Aspiring young professionals gaining corporate supply-chain skills and dignified employment close to their families.",
    },
    {
      title: "Farmer Producer Organisations (FPOs)",
      detail: "Collective farmer groups accessing modern grading, aggregation, and direct bulk urban buyers.",
    },
    {
      title: "Rural Micro & Small Enterprises",
      detail: "Cottage food processors, handloom producers, and artisan workshops gaining digital marketing and packaging support.",
    },
    {
      title: "Local Agricultural Producers",
      detail: "Individual smallholders receiving fair transparent prices and timely payment settlements at the village hub.",
    },
  ],
  recruitmentModel: [
    {
      step: "01",
      name: "Gram Skill Mela",
      duration: "7-Day Community Camp",
      desc: "An intensive grassroots awareness and skill orientation camp organized within village panchayats, introducing youth to modern e-commerce, digital catalogs, and supply-chain basics.",
    },
    {
      step: "02",
      name: "Practical Rotational Demo",
      duration: "7-Day Free Exploration",
      desc: "Candidates practically cycle through all five operational departments (Sales, Packaging, Quality, Logistics, Billing) to identify their individual strengths before role assignment.",
    },
    {
      step: "03",
      name: "Hub Induction & Placement",
      duration: "Continuous Apprenticeship",
      desc: "Successful candidates are matched with specific operational roles in the village studio hub with continuous peer mentorship and performance milestones.",
    },
  ],
  expectedImpact: [
    "Reduces forced economic distress migration by creating non-farm local careers.",
    "Brings fair, transparent pricing and market access to agricultural producers.",
    "Retains economic circulation and spending within the local village ecosystem.",
    "Builds practical business administration, digital literacy, and supply-chain capability in rural communities.",
    "Financial model projection: Estimates that up to ~70% of earned income could be saved or reinvested locally due to significantly lower rural living costs (projected model estimate).",
  ],
  marketChannelsNote:
    "Potential market channels examined in study include modern e-grocery platforms such as BigBasket and enterprise supply ecosystems like Tata Digital (identified as conceptual target channels, not existing commercial partnerships).",
  disclaimer:
    "Gram-Tech Studio is an academic business model and social innovation concept developed to study rural economic enablement and decentralized supply chains.",
};

export const OTHER_PROJECTS: ProjectItem[] = [
  {
    id: "aarambh",
    title: "Aarambh 2.0 – National-Level Business Idea Competition",
    category: "Business Strategy & Innovation",
    type: "competition",
    role: "Team Leader",
    summary:
      "Spearheaded a multi-member student team in a prestigious national business competition, formulating an end-to-end commercialization plan for an innovative consumer proposition.",
    bullets: [
      "Led team coordination, milestone scheduling, and inter-departmental delegation.",
      "Conducted extensive product research and consumer demographic analysis.",
      "Contributed to core financial planning, break-even estimations, and pricing models.",
      "Explored functional packaging strategies balancing unit economics and sustainability.",
      "Formulated a targeted Go-to-Market (GTM) roadmap for regional launch.",
    ],
    tags: ["Team Leadership", "Product Research", "Financial Planning", "Go-to-Market Strategy"],
  },
  {
    id: "ai-conference",
    title: "International Conference on AI-Driven Economy",
    category: "Academic Research & Presentation",
    type: "conference",
    role: "Team Leader",
    summary:
      "Represented Allenhouse Business School at an international academic conference, leading discussions on how workforce dynamics transform within AI-augmented business environments.",
    bullets: [
      "Analyzed behavioral and operational adaptations of corporate employees transitioning into AI-assisted workflows.",
      "Synthesized viewpoints across team members into a cohesive, structured academic perspective.",
      "Examined macroeconomic intersections between Generative AI productivity tools and enterprise business agility.",
      "Delivered team presentations before an evaluation panel of academicians and industry professionals.",
    ],
    tags: ["AI & Economy", "Business Presentation", "Team Leadership", "Industry Analysis"],
  },
  {
    id: "hr-event",
    title: "HR Event – Ideal Organizational Culture",
    category: "Human Resource Management",
    type: "competition",
    role: "Team Leader",
    summary:
      "Led an organizational behavior case analysis delineating the core structural pillars necessary for building psychologically safe, high-performance workplace cultures.",
    bullets: [
      "Researched key determinants of employee engagement, transparency, and retention.",
      "Framed collaborative communication protocols to enhance cross-functional team synergy.",
      "Presented leadership principles that balance business deliverables with empathetic employee support.",
    ],
    tags: ["Organizational Culture", "HR Strategy", "Team Leadership", "Communication"],
  },
  {
    id: "reeth",
    title: "REETH – Performing Arts & Cultural Event",
    category: "Co-Curricular & Stage Arts",
    type: "cocurricular",
    role: "Participant",
    summary:
      "Actively represented cohort in a prestigious collegiate vocal performing arts event, nurturing poise, stage confidence, and public delivery.",
    bullets: [
      "Cultivated stage presence, performance discipline, and emotional delivery before a large collegiate audience.",
      "Fostered synchronization, vocal coordination, and time management alongside academic commitments.",
      "Demonstrated holistic extracurricular engagement reinforcing confidence in public presentations.",
    ],
    tags: ["Stage Presence", "Public Performance", "Coordination", "Co-Curricular"],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Team Leader – Aarambh 2.0",
    event: "National-Level Business Idea Competition",
    description: "Led team through comprehensive product research, financial planning, and go-to-market formulation.",
    highlight: "National Competition Leadership",
  },
  {
    title: "Team Leader – International AI Conference",
    event: "International Conference on AI-Driven Economy",
    description: "Presented research synthesis on employee workforce adaptation in AI-enabled corporate environments.",
    highlight: "Academic Research Presentation",
  },
  {
    title: "Team Leader – HR Case Event",
    event: "Collegiate Organizational Culture Forum",
    description: "Formulated strategic frameworks for workplace communication, trust, and ideal team dynamics.",
    highlight: "Organizational Management",
  },
  {
    title: "Participant – REETH Vocal Event",
    event: "Collegiate Performing Arts Showcase",
    description: "Demonstrated creative poise, public performance discipline, and confidence on stage.",
    highlight: "Cultural & Stage Confidence",
  },
];

export const CAREER_INTERESTS = [
  {
    title: "Finance & Financial Management",
    desc: "Financial documentation, budgeting fundamentals, cash-flow discipline, and cost analysis for emerging business initiatives.",
    icon: "BadgeIndianRupee",
  },
  {
    title: "Marketing & Market Research",
    desc: "Consumer insight discovery, demographic segmentation, competitive benchmarking, and brand storytelling.",
    icon: "TrendingUp",
  },
  {
    title: "Business Development",
    desc: "Exploring partnership avenues, pipeline building, customer outreach, and regional distribution networks.",
    icon: "Compass",
  },
  {
    title: "Supply Chain & Logistics",
    desc: "Hyperlocal inventory flow, farmgate aggregation, cold-chain scheduling, and rural-to-urban market linkages.",
    icon: "Truck",
  },
  {
    title: "Human Resource Management",
    desc: "Organizational culture, team motivation, onboarding workflows, and transparent corporate communication.",
    icon: "Users",
  },
  {
    title: "Business Operations",
    desc: "SOP standardization, administrative workflows, compliance tracking, and documentation excellence.",
    icon: "Layers",
  },
  {
    title: "AI & Business Innovation",
    desc: "Leveraging modern AI tools and prompt workflows to automate office administration, accelerate market research, and boost team productivity.",
    icon: "Sparkles",
  },
];
