"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Our Team", href: "/our-team" },
  { name: "Operations", href: "/operations" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`${poppins.className} bg-[#0C0332] text-white w-full z-50 top-0 shadow-md`}
      style={{
        fontFamily: "var(--font-poppins), sans-serif",
        fontSize: "calc(1rem - 6px)", // base font size reduced by 6px
        letterSpacing: "0.5px",
      }}
    >
      {/* Navbar container */}
      <div className="py-4 flex justify-between items-center w-full px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <Link href="/">
          <img
            src="/logo.png"
            alt="Smart Farms Logo"
            className="h-10 w-auto cursor-pointer border-none bg-transparent"
            draggable={false}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={name}
                href={href}
                className={`font-semibold px-3 py-2 rounded-md transition-colors ${
                  isActive ? "text-[#72AE1C]" : "text-white hover:text-[#72AE1C]"
                }`}
                style={{ fontSize: "calc(1rem - 6px)", letterSpacing: "0.5px" }}
              >
                {name}
              </Link>
            );
          })}
          <Link href="/contact">
            <button
              className="ml-4 rounded-md bg-white px-4 py-2 font-semibold text-[#0C0332] hover:bg-gray-200 transition"
              style={{ fontSize: "calc(1rem - 6px)", letterSpacing: "0.5px" }}
            >
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            {menuOpen ? (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-[#0C0332]">
          {links.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={name}
                href={href}
                className={`block py-3 font-semibold ${
                  isActive ? "text-[#72AE1C]" : "text-white hover:text-[#72AE1C]"
                }`}
                onClick={() => setMenuOpen(false)}
                style={{ fontSize: "calc(1rem - 6px)", letterSpacing: "0.5px" }}
              >
                {name}
              </Link>
            );
          })}
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <button
              className="mt-2 w-full rounded-md bg-white px-4 py-2 font-semibold text-[#0C0332] hover:bg-gray-200 transition"
              style={{ fontSize: "calc(1rem - 6px)", letterSpacing: "0.5px" }}
            >
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
