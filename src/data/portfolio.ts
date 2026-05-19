export const site = {
  name: "Shaurya Dixit",
  title: "Software Developer",
  tagline: "I build scalable systems and ship products that actually work.",
  email: "shauryad224@gmail.com",
  phone: "+91 87870 53173",
  location: "Delhi / Chennai, India",
  resumeUrl: "/resume.pdf",
} as const;

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const social = [
  {
    label: "GitHub",
    href: "https://github.com/ShauryaDixit123",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shaurya-dixit-007/",
  },
  {
    label: "Email",
    href: "mailto:shauryad224@gmail.com",
  },
] as const;

export const about = {
  paragraphs: [
    "I'm a software developer with experience leading teams, owning projects end-to-end, and building reliable applications from the ground up. I care about clean architecture, measurable impact, and shipping features that hold up under real traffic.",
    "Currently at OneMind Services, I'm improving the JAMS CRM platform—stability, performance, and disaster recovery across AWS, Kubernetes, and Terraform. Before that, I spent two years at Wiz Freight building SaaS products used at serious scale.",
    "My stack spans TypeScript, Go, Python, React/Next.js, and cloud-native tooling. I enjoy the overlap between backend systems, developer experience, and polished interfaces.",
    "When I'm not coding, you'll find me exploring new tech, contributing to side projects, or plotting the next thing to automate.",
  ],
} as const;

export const experience = [
  {
    period: "2024 — Present",
    title: "Software Development Engineer II",
    company: "OneMind Services LLC",
    location: "Remote",
    href: undefined,
    description: [
      "Improving the JAMS CRM application for stability, performance, and core functionality across the product.",
      "Contributed to disaster recovery planning and infrastructure design using AWS, Kubernetes, and Terraform.",
      "Integrated Allure test reporting into AWS CodeBuild pipelines for better pre-merge visibility in environment branches.",
      "Helped stand up a new dev environment on EKS with IAM, CodePipeline, CodeBuild, RDS, ECR, VPC, and related AWS services.",
    ],
    tech: [
      "TypeScript",
      "AWS",
      "Kubernetes",
      "Terraform",
      "CodeBuild",
      "Allure",
    ],
  },
  {
    period: "2022 — 2024",
    title: "Software Development Engineer I",
    company: "Wiz Freight",
    location: "Chennai, India",
    href: undefined,
    description: [
      "Led requirement analysis and design work that cut system errors by 33%, improved app performance by 28%, and reduced support tickets by 69%.",
      "Integrated Razorpay, Chargebee, i-Fact, and Google/Microsoft sign-in with JWT-based authentication.",
      "Shipped features across Elyxr CRM, Wiz Freight, Elyxr Docs, and Elyxr OMS for a SaaS platform serving millions of users.",
      "Modeled data and built REST APIs optimized for high concurrency—3M users and 10K RPS in early growth stages.",
      "Designed and deployed a real-time shipment tracking cloud service from scratch.",
      "Co-built a dynamic document generation web app that cut bill generation time by 47%.",
    ],
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "MongoDB",
      "Razorpay",
      "JWT",
      "AWS",
    ],
  },
  {
    period: "2021 — 2022",
    title: "Project Coordinator",
    company: "S.S.B.I Group of Companies",
    location: "Remote, India",
    href: undefined,
    description: [
      "Handled support tickets, anomaly detection, and bug resolution with clear tracking and follow-through.",
      "Supervised development of a REST API for streamlined communication across the network.",
      "Worked with Golang, AWS, Hyperledger Fabric, Docker, Fluree, and CouchDB on distributed systems.",
    ],
    tech: ["Golang", "AWS", "Hyperledger Fabric", "Docker", "CouchDB"],
  },
] as const;

export const education = {
  period: "2017 — 2021",
  degree: "B.Tech · Electronics & Communication Engineering",
  school: "University Institute of Engineering and Technology",
  location: "Kanpur, India",
  note: "Campus Ambassador (2019) · Rendezvous IIT Delhi, Ensemble, XLRI Jamshedpur",
} as const;

export type Project = {
  title: string;
  description: string;
  tech: readonly string[];
  githubUrl?: string;
  deployedUrl?: string;
};

export const industryProjects: readonly Project[] = [
  {
    title: "JAMS CRM Platform",
    description:
      "Enterprise CRM improvements spanning performance, reliability, and disaster recovery—Kubernetes-native infra on AWS with Terraform and automated test reporting in CI.",
    tech: ["AWS", "EKS", "Terraform", "Kubernetes", "TypeScript"],
  },
  {
    title: "Real-Time Shipment Tracking",
    description:
      "Cloud service enabling users to track freight shipments in real time—designed, built, and deployed end-to-end for Wiz Freight's logistics stack.",
    tech: ["REST APIs", "AWS", "PostgreSQL", "React"],
  },
  {
    title: "Elyxr Document Generator",
    description:
      "Web app for dynamic document generation inside SaaS products—built from scratch and reduced bill generation time by 47%.",
    tech: ["Next.js", "React", "Node.js", "PDF Generation"],
  },
  {
    title: "SaaS Platform Integrations",
    description:
      "Payment and auth integrations across Elyxr CRM, Wiz Freight, Elyxr Docs, and Elyxr OMS—Razorpay, Chargebee, OAuth, and JWT flows at scale.",
    tech: ["Razorpay", "Chargebee", "JWT", "REST", "MongoDB"],
  },
];

export const personalProjects: readonly Project[] = [
  {
    title: "RNA Sequence Analysis Chat",
    description:
      "Compare DNA/RNA sequences from FASTA files through a chat UI—upload files, run pairwise dynamic programming or dot-product analysis in parallel, and explore score matrices as interactive Plotly scatter plots.",
    tech: ["Go", "Gin", "Plotly.js", "FASTA", "Goroutines"],
    githubUrl: "https://github.com/ShauryaDixit123/seq-analysis-chat",
    deployedUrl: "https://seq-analysis-chat.vercel.app/",
  },
  {
    title: "Developer Portfolio",
    description:
      "Personal portfolio site with a Brittany Chiang–inspired layout—responsive, accessible, and built with the T3 stack patterns.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/ShauryaDixit123/pf",
  },
];

export const skills = [
  "JavaScript / TypeScript / ES6",
  "Golang / Gin / Goose",
  "Python / Django",
  "Next.js / React / HTML / CSS",
  "MySQL / PostgreSQL / MongoDB",
  "Docker / Kafka / AWS",
  "REST APIs / OOP / Integration Testing",
  "Elasticsearch / Grafana",
  "LangGraph / LangChain",
  "Temporal",
  "Distributed Systems",
  "Machine Learning / PyTorch",
  "Statistics",
] as const;
