import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor | Backend Engineer",
  description: "Portfolio of Victor, a Backend Engineer specializing in scalable distributed systems and robust APIs.",
};

import { AnimatedLogo } from "@/components/AnimatedLogo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} min-h-screen flex flex-col bg-[#0a0a0a] text-gray-200 antialiased`}>
        <header className="w-full border-b border-gray-800 sticky top-0 z-10 bg-[#0a0a0a]/80 backdrop-blur-sm">
          <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 py-6 flex justify-between items-center">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <AnimatedLogo />
            </Link>
            <nav className="flex gap-8 text-sm font-medium text-gray-400">
              <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
              <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            </nav>
          </div>
        </header>

        <main className="flex-grow w-full px-6 md:px-16 lg:px-24 xl:px-32 py-12 md:py-24">
          {children}
        </main>

        <footer id="contact" className="w-full border-t border-gray-800 bg-[#0d0d0d] pt-24 pb-12">
          <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <p className="text-emerald-400 font-mono font-bold tracking-[0.3em] uppercase">
                  Let&apos;s build the future
                </p>
                <h2 className="text-5xl md:text-8xl font-bold font-mono text-gray-100 tracking-tighter">
                  READY TO <span className="text-emerald-400">CONNECT?</span>
                </h2>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <div className="flex flex-col gap-6">
                  <p className="max-w-md text-xl text-gray-400 leading-relaxed">
                    Open to backend engineering roles, distributed systems design, and high-performance API consulting.
                  </p>
                  <a 
                    href="mailto:victorasidotambunan@gmail.com" 
                    className="text-2xl md:text-3xl font-mono font-bold text-gray-100 hover:text-emerald-400 transition-colors underline underline-offset-8 decoration-emerald-500/20 hover:decoration-emerald-400"
                  >
                    victorasidotambunan@gmail.com
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-8 text-lg font-mono font-bold">
                  <a href="https://github.com/victorasido" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors uppercase tracking-widest">GitHub</a>
                  <a href="https://linkedin.com/in/victorasido" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors uppercase tracking-widest">LinkedIn</a>
                  <a href="/CV_Victor_Asido_T.pdf" download className="text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-widest">Resume</a>
                </div>
              </div>
              
              <div className="pt-16 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 font-mono gap-4">
                <p>&copy; {new Date().getFullYear()} Victor. Built for performance.</p>
                <p>STATUS: SYSTEM_READY</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
