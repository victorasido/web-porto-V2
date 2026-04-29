export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  infrastructure?: string[];
  githubLink?: string;
  demoLink?: string;
  featured: boolean;
  date: string;
  architecture?: string;
  challenges?: string;
  mermaidDiagram?: string;
}

export const projects: Project[] = [
  {
    slug: "vehicle-inspection-platform",
    title: "Vehicle Inspection Platform",
    description: "A comprehensive AI-driven 'Data Flywheel' platform for vehicle damage analysis, similarity scoring, and automated dataset collection for YOLO training.",
    techStack: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "React", "Expo"],
    infrastructure: ["Docker", "Nginx Proxy", "Cloudflare R2 / S3", "Sentry"],
    githubLink: "https://github.com/victorasido/car-detection-ai",
    featured: true,
    date: "2026-04-10",
    architecture: "Asynchronous Inspection Engine (V2) utilizing Celery for fan-out/fan-in task orchestration. Features a 'Human-in-the-Loop' annotation bridge to transition from GPT-4o to local YOLOv8 models.",
    challenges: "Architecting a seamless sync queue for offline-first mobile data collection and implementing an atomic 'Ground Truth' export pipeline for model training.",
    mermaidDiagram: `graph TD
    subgraph Clients
        A[Mobile App - Expo] -->|Media Upload| C
        B[Admin Web - React] -->|Review / Correct| G
    end

    subgraph Backend Services
        C(FastAPI Gateway) -->|Enqueue Task| D{Redis Broker}
        D --> E[Celery Workers]
    end

    subgraph Storage & AI
        E -->|AI Inference| I[GPT-4o / YOLOv8]
        I -->|Results| G[(PostgreSQL)]
        E -->|Object Storage| H[(S3 / Cloudflare R2)]
        G -->|Export Dataset| J[YOLOv8 Training Bridge]
    end`,
  },
  {
    slug: "word-signer-bot",
    title: "Word Signer: Headless Bot",
    description: "A high-performance automated document signing system (Word & PDF) featuring 'Smart Layout Intelligence' for precise, context-aware signature placement.",
    techStack: ["Python", "Asyncio", "PyMuPDF", "LibreOffice", "SQLite", "Docker"],
    infrastructure: ["Docker (Resource Limited)", "Nginx Webhook", "Ubuntu Server"],
    githubLink: "https://github.com/victorasido/WPS",
    featured: false,
    date: "2026-01-20",
    architecture: "Implemented using Clean Architecture (App, Core, Infra, Shared layers). Features a hybrid session management system (In-memory RAM + SQLite BLOB) and a Semaphore-controlled conversion queue.",
    challenges: "Developing 'Horizontal Raycasting' for perfect signature centering and managing heavy LibreOffice subprocesses within strict Docker RAM limits (1GB) to prevent OOM crashes.",
    mermaidDiagram: `stateDiagram-v2
    [*] --> WAIT_DOCX: /sign
    WAIT_DOCX --> WAIT_SIGN: Send .docx / .pdf
    WAIT_SIGN --> WAIT_ZONE_SELECT: Send Signature Image
    WAIT_ZONE_SELECT --> Processing: Select Coordinate
    state Processing {
        direction LR
        Queue --> Conversion
        Conversion --> Injection
    }
    Processing --> [*]: Send Signed PDF
    AnyState --> [*]: /cancel`,
  },
  {
    slug: "ml-coach-bot",
    title: "MLBB AI Coach",
    description: "A professional MLBB strategist telegram bot leveraging GPT-4o and a local hero database to provide real-time drafting advice, counter-hero analysis, and meta-tier lists.",
    techStack: ["Python", "Aiogram 3.x", "OpenAI GPT-4o", "Pandas", "FuzzyWuzzy"],
    infrastructure: ["VPS (Ubuntu)", "Systemd Service", "JSON Caching"],
    githubLink: "https://github.com/victorasido/tele-bot-v4",
    featured: true,
    date: "2026-04-28",
    architecture: "Hybrid system combining local high-performance data with AI fallbacks. Implements a typo-tolerant search engine using FuzzyWuzzy and an AI Caching Layer to optimize API costs and response speed.",
    challenges: "Maintaining a synchronized local-to-AI meta tier list and engineering complex prompts for multi-hero synergy analysis that fits within Telegram's message limits.",
    mermaidDiagram: `flowchart TD
    A[User Hero Query] --> B{Fuzzy Search}
    B -->|Found| C{Check AI Cache}
    B -->|Not Found| Z[Request Clarification]
    C -->|Hit| D[Instant Response]
    C -->|Miss| E[GPT-4o Analysis]
    E --> F[Update Cache]
    F --> D`,
  },
];

