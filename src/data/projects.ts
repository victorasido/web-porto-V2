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
    slug: "aura-neural-engine",
    title: "AURA Neural Engine",
    description: "A highly scalable distributed AI processing pipeline built with FastAPI and Celery to analyze vehicle inspection frames using YOLO models.",
    techStack: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "Docker"],
    infrastructure: ["Docker", "Google Cloud Platform", "Cloud Storage", "Cloud Run"],
    githubLink: "https://github.com/victor/aura-neural-engine",
    featured: true,
    date: "2026-03-15",
    architecture: "Microservices architecture with Celery workers for horizontal scaling. Implemented a task orchestration layer using Redis to manage frame processing priority.",
    challenges: "Handling real-time frame extraction bottlenecks and ensuring atomic updates to damage counters during concurrent task executions.",
    mermaidDiagram: `graph LR
    A[Mobile Client] -->|POST /inspect| B(FastAPI Gateway)
    B -->|Push Task| C{Redis Broker}
    C --> D[Celery Worker 1]
    C --> E[Celery Worker 2]
    C --> F[Celery Worker N]
    D & E & F -->|YOLO Inference| G[AI Model]
    G -->|Write Results| H[(PostgreSQL)]
    G -->|Store Frames| I[(GCS Bucket)]
    H -->|Poll Results| A`,
  },
  {
    slug: "vehicle-inspection-platform",
    title: "Vehicle Inspection Platform",
    description: "Backend architecture for real-time video ingestion, background processing, and similarity scoring for vehicle damages.",
    techStack: ["Go", "gRPC", "PostgreSQL", "Kafka", "Redis"],
    infrastructure: ["Docker", "Kubernetes", "GCP Compute Engine", "Cloud SQL"],
    githubLink: "https://github.com/victor/vehicle-inspection",
    demoLink: "https://inspection.example.com",
    featured: true,
    date: "2026-04-10",
    architecture: "Event-driven system using Kafka for asynchronous message passing between ingestion and analysis services. Used gRPC for low-latency internal communication.",
    challenges: "Optimizing the similarity scoring algorithm to run within sub-second latency across a dataset of millions of historical inspection frames.",
    mermaidDiagram: `graph TD
    A[Mobile App] -->|Upload Video| B(Ingestion Service - Go)
    B -->|Publish Event| C{Kafka Topic: frames}
    C --> D[Frame Extractor Worker]
    D -->|Extracted Frames| E{Kafka Topic: analysis}
    E --> F[Similarity Scorer]
    E --> G[Damage Detector]
    F & G -->|Write| H[(PostgreSQL - Cloud SQL)]
    H -->|Read Results| A`,
  },
  {
    slug: "word-signer-bot",
    title: "Word Signer Bot",
    description: "High-throughput Telegram bot for document processing, utilizing a robust SQLite WAL mode integration and async Telegram API client.",
    techStack: ["Python", "Asyncio", "SQLite", "Telegram API"],
    infrastructure: ["VPS (Ubuntu)", "Systemd Service", "Nginx Reverse Proxy"],
    githubLink: "https://github.com/victor/word-signer-bot",
    featured: false,
    date: "2026-01-20",
    architecture: "Single-process async architecture with persistent session management. Utilizes SQLite WAL mode to support high concurrency during document signing spikes.",
    challenges: `Managing Telegram API rate limits while processing thousands of simultaneous document signing requests required a custom token-bucket throttler. Beyond rate limiting, the most critical edge cases were around input validation and format-specific processing:

**PDF Files:** Must be validated for encryption and password protection before processing. Encrypted PDFs are rejected early with a user-friendly error, preventing downstream failures in the signing pipeline.

**Word (.docx) Files:** Require a separate conversion flow. The bot first sanitizes the document (stripping macros for security), converts it to PDF via LibreOffice in headless mode, then applies the digital signature. Invalid or corrupted .docx files (e.g., broken XML structure) are caught at the conversion stage and returned with a specific error message, keeping the main async loop unblocked.`,
    mermaidDiagram: `flowchart TD
    A[User sends file] --> B{Validate File Type}
    B -->|Invalid type| Z[Return: Unsupported Format]
    B -->|PDF| C{Is PDF Encrypted?}
    B -->|Word .docx| D[Sanitize: Strip Macros]
    C -->|Yes| Y[Return: Encrypted PDF Error]
    C -->|No| E[Sign PDF directly]
    D --> F{Convert to PDF via LibreOffice}
    F -->|Conversion failed| X[Return: Corrupted File Error]
    F -->|Success| E
    E --> G[Write to SQLite WAL]
    G --> H[Send signed file to user]`,
  },
  {
    slug: "distributed-cache",
    title: "Distributed Cache Node",
    description: "A lightweight, in-memory distributed cache built from scratch using Raft consensus algorithm for leader election and log replication.",
    techStack: ["Go", "Raft", "TCP Sockets"],
    infrastructure: ["Bare Metal", "Local Network Cluster"],
    githubLink: "https://github.com/victor/dist-cache",
    featured: false,
    date: "2025-11-05",
    architecture: "Custom implementation of the Raft consensus protocol. Includes leader election, log replication, and safety guarantees.",
    challenges: "Implementing correctly the complex state transitions in the Raft algorithm to prevent split-brain scenarios during network partitions.",
    mermaidDiagram: `graph TD
    subgraph Raft Cluster
        L[Leader Node] -->|Replicate Log| F1[Follower 1]
        L -->|Replicate Log| F2[Follower 2]
        F1 & F2 -->|ACK| L
    end
    C[Client] -->|SET/GET| L
    L -->|Commit Entry| S[(In-Memory Store)]`,
  },
  {
    slug: "auth-service",
    title: "Identity & Access Management",
    description: "Centralized OAuth2 and OIDC compliant authentication service handling JWT issuing, refreshing, and user session management.",
    techStack: ["Node.js", "Express", "TypeScript", "Redis", "PostgreSQL"],
    infrastructure: ["Docker", "Vercel Edge Functions", "Supabase PostgreSQL"],
    featured: true,
    date: "2025-08-22",
    architecture: "Stateless JWT-based authentication with Redis-backed session revocation (blacklisting). Implements standard OIDC flows.",
    challenges: "Ensuring secure token rotation and handling race conditions during refresh token exchange under high load.",
    mermaidDiagram: `sequenceDiagram
    participant C as Client
    participant A as Auth Service
    participant R as Redis
    participant DB as PostgreSQL

    C->>A: POST /auth/login (credentials)
    A->>DB: Validate user
    DB-->>A: User record
    A->>A: Sign Access Token (15m) + Refresh Token (7d)
    A->>R: Store refresh token hash
    A-->>C: { accessToken, refreshToken }
    C->>A: POST /auth/refresh (refreshToken)
    A->>R: Validate & rotate token
    R-->>A: OK
    A-->>C: New { accessToken, refreshToken }`,
  }
];
