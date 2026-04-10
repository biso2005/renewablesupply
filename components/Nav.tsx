"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0F2A4A] px-8 py-5 sticky top-0 z-50 no-print">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-white font-bold text-xl tracking-tight">
          RenewableSupply<span className="text-[#00B4A6]">.com</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-slate-300 text-sm font-medium hover:text-white transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-slate-300 text-sm font-medium hover:text-white transition"
          >
            Contact
          </Link>
          <Link
            href="/#guide"
            className="bg-[#00B4A6] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#00d4c4] transition"
          >
            Get Free Guide
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4 space-y-4">
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-slate-300 text-sm font-medium hover:text-white transition px-2"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-slate-300 text-sm font-medium hover:text-white transition px-2"
          >
            Contact
          </Link>
          <Link
            href="/#guide"
            onClick={() => setMenuOpen(false)}
            className="block bg-[#00B4A6] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#00d4c4] transition text-center"
          >
            Get Free Guide
          </Link>
        </div>
      )}
    </nav>
  );
}
