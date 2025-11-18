"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { links } from "@/data/links";

const items = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#27272a]" : "bg-transparent"
    }`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="#top" className="group flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
            <span className="text-white font-bold text-sm">MNA</span>
          </div>
          <span className="font-semibold text-lg hidden sm:block">Mohamad Nur Arifin</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {items.map((it) => (
            <a 
              key={it.href} 
              href={it.href} 
              className="px-4 py-2 rounded-lg text-sm text-[#a1a1aa] hover:text-white hover:bg-[#18181b] transition-all duration-200"
            >
              {it.label}
            </a>
          ))}
        </nav>

        {/* Desktop Download Button */}
        <a 
          href={links.cv} 
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40" 
          download
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download CV
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-[#18181b] transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#27272a] bg-[#0a0a0a]/95 backdrop-blur-xl">
          <nav className="px-4 py-4 space-y-1">
            {items.map((it) => (
              <a 
                key={it.href} 
                href={it.href} 
                className="block px-4 py-3 rounded-lg text-[#a1a1aa] hover:text-white hover:bg-[#18181b] transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {it.label}
              </a>
            ))}
            <a 
              href={links.cv} 
              className="block px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-center mt-2"
              download
              onClick={() => setIsOpen(false)}
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

