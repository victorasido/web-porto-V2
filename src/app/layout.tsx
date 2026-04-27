import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor | Backend Engineer",
  description: "Portfolio of Victor, a Backend Engineer specializing in scalable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} min-h-screen flex flex-col bg-[#0a0a0a] text-gray-200 antialiased`}>
        <header className="w-full border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="font-semibold text-lg tracking-tight hover:text-white transition-colors">
              victor.dev
            </Link>
            <nav className="flex gap-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow w-full max-w-4xl mx-auto px-6 py-12">
          {children}
        </main>

        <footer className="w-full border-t border-gray-800 mt-auto">
          <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Victor. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="https://github.com/victor" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/victor" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
