// components folder is where our react components will be stored (ex: navbar, footer). this lets us use them wherever throughout the project
"use client"; // Tells Next.js this component runs in the browser

import Link from "next/link"; // Used for navigation between pages

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 bg-transparent text-white z-50">
      {/* Left section: Bloom logo */}
      <div className="flex items-center gap-2 text-lg font-bold">
        <span className="text-[#202b21] text-2xl">🌎</span>
        <Link href="/" className="hover:opacity-80">
          Bloom
        </Link>
      </div>

      {/* Center section: Navigation links */}
      <div className="hidden md:flex gap-12 text-sm uppercase tracking-wider">
        <Link
          href="/community"
          className="hover:text-[#202b21] transition-colors"
        >
          Community
        </Link>
        <Link href="/news" className="hover:text-[#202b21] transition-colors">
          News
        </Link>
        <Link href="/about" className="hover:text-[#202b21] transition-colors">
          About Us
        </Link>
      </div>

      {/* Right section: decorative icon */}
      <div className="text-[#202b21] text-3xl font-bold">✺</div>
    </nav>
  );
}

