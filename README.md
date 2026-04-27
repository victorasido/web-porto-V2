# Victor's Portfolio | Backend Engineer

A minimalist, high-performance personal portfolio built with Next.js 15 and Tailwind CSS 4. This portfolio is specifically designed for Backend Engineers to showcase technical depth, system architecture, and infrastructure expertise.

## 🚀 Features

- **Static-First Architecture**: Built using Next.js App Router with Server Components for instant loading and perfect SEO scores.
- **System Design Showcase**: Integrated **Mermaid.js** for rendering live architecture diagrams directly in project details.
- **Backend-Focused Content**: Structured project sections focusing on *Infrastructure*, *Architecture*, and *Key Challenges*.
- **Modern UI**: A premium dark-themed aesthetic built with Tailwind CSS 4 and fluid typography.
- **Fully Responsive**: Optimized for all screen sizes from mobile to wide-screen desktops.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Diagrams**: Mermaid.js
- **Icons**: Lucide-inspired custom SVG icons

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd porto
   ```

2. **Check System Requirements**:
   Ensure you have at least **1.0 GB of free disk space** for `node_modules`.

3. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📂 Project Structure

- `src/app/`: App Router pages and layouts.
- `src/components/`: Reusable UI components (ProjectCard, MermaidViewer).
- `src/data/`: Single source of truth for project information (`projects.ts`).
- `src/lib/`: Helper functions for data fetching and filtering.
- `public/`: Static assets like `resume.pdf`.

## 📄 License

MIT © Victor
