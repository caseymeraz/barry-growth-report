"use client";

import { useState } from "react";

const sections = [
  { id: "executive-summary", label: "Summary" },
  { id: "visibility-gap", label: "Visibility Gap" },
  { id: "market-opportunity", label: "Market" },
  { id: "roi-calculator", label: "ROI Calculator" },
  { id: "brand-strategy", label: "Brand Strategy" },
  { id: "why-juris-digital", label: "Why JD" },
  { id: "next-step", label: "Next Step" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex-shrink-0">
            <img
              src="https://jurisdigital.com/wp-content/uploads/logo-dark.svg"
              alt="Juris Digital"
              className="h-8"
            />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3 py-2 text-xs font-medium text-gray-600 hover:text-jd-black rounded-md transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-jd-black hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-3 space-y-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-jd-black hover:bg-gray-50 rounded-md"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
