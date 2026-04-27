export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
  featured: boolean;
  date: string;
  architecture?: string;
  challenges?: string;
}

export const projects: Project[] = [
  {
    slug: "aura-neural-engine",
    title: "AURA Neural Engine",
    description: "A highly scalable distributed AI processing pipeline built with FastAPI and Celery to analyze vehicle inspection frames using YOLO models.",
    techStack: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "Docker"],
    githubLink: "https://github.com/victor/aura-neural-engine",
    featured: true,
    date: "2026-03-15",
    architecture: "Microservices architecture with Celery workers for horizontal scaling. Implemented a task orchestration layer using Redis to manage frame processing priority.",
    challenges: "Handling real-time frame extraction bottlenecks and ensuring atomic updates to damage counters during concurrent task executions.",
  },
  {
    slug: "vehicle-inspection-platform",
    title: "Vehicle Inspection Platform",
    description: "Backend architecture for real-time video ingestion, background processing, and similarity scoring for vehicle damages.",
    techStack: ["Go", "gRPC", "PostgreSQL", "Kafka", "Redis"],
    githubLink: "https://github.com/victor/vehicle-inspection",
    demoLink: "https://inspection.example.com",
    featured: true,
    date: "2026-04-10",
    architecture: "Event-driven system using Kafka for asynchronous message passing between ingestion and analysis services. Used gRPC for low-latency internal communication.",
    challenges: "Optimizing the similarity scoring algorithm to run within sub-second latency across a dataset of millions of historical inspection frames.",
  },
  {
    slug: "word-signer-bot",
    title: "Word Signer Bot",
    description: "High-throughput Telegram bot for document processing, utilizing a robust SQLite WAL mode integration and async Telegram API client.",
    techStack: ["Python", "Asyncio", "SQLite", "Telegram API"],
    githubLink: "https://github.com/victor/word-signer-bot",
    featured: false,
    date: "2026-01-20",
    architecture: "Single-process async architecture with persistent session management. Utilizes SQLite WAL mode to support high concurrency during document signing spikes.",
    challenges: "Managing Telegram API rate limits while processing thousands of simultaneous PDF signing requests.",
  },
  {
    slug: "distributed-cache",
    title: "Distributed Cache Node",
    description: "A lightweight, in-memory distributed cache built from scratch using Raft consensus algorithm for leader election and log replication.",
    techStack: ["Go", "Raft", "TCP Sockets"],
    githubLink: "https://github.com/victor/dist-cache",
    featured: false,
    date: "2025-11-05",
    architecture: "Custom implementation of the Raft consensus protocol. Includes leader election, log replication, and safety guarantees.",
    challenges: "Implementing correctly the complex state transitions in the Raft algorithm to prevent split-brain scenarios during network partitions.",
  },
  {
    slug: "auth-service",
    title: "Identity & Access Management",
    description: "Centralized OAuth2 and OIDC compliant authentication service handling JWT issuing, refreshing, and user session management.",
    techStack: ["Node.js", "Express", "TypeScript", "Redis", "PostgreSQL"],
    featured: true,
    date: "2025-08-22",
    architecture: "Stateless JWT-based authentication with Redis-backed session revocation (blacklisting). Implements standard OIDC flows.",
    challenges: "Ensuring secure token rotation and handling race conditions during refresh token exchange under high load.",
  }
];
