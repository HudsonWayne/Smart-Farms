"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0C0332] text-white w-full z-50 top-0 shadow-md font-['Avenir']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo with negative left margin */}
          <div className="-ml-5">
            <Link href="/">
              <img
                src="/logo.png"
                alt="Smart Farms Logo"
                className="h-10 w-auto cursor-pointer"
                draggable={false}
              />
            </Link>
          </div>

          {/* Desktop Links with left padding */}
          <div className="hidden md:flex items-center space-x-8 pl-5">
            {links.map(({ name, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={name}
                  href={href}
                  className={`font-semibold px-3 py-2 rounded-md transition-colors ${
                    isActive ? "text-[#72AE1C]" : "text-white hover:text-[#72AE1C]"
                  }`}
                >
                  {name}
                </Link>
              );
            })}

            {/* Contact Us button */}
            <Link href="/contact">
              <button
                type="button"
                className="ml-4 rounded-md bg-white px-4 py-2 font-semibold text-[#0C0332] hover:bg-gray-200 transition"
              >
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#72AE1C]"
            >
              {menuOpen ? (
                <svg
                  className="h-8 w-8 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0C0332] mt-2 rounded-b-md flex flex-col px-4 pb-4">
            {links.map(({ name, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={name}
                  href={href}
                  className={`block px-4 py-3 font-semibold transition-colors ${
                    isActive ? "text-[#72AE1C]" : "text-white hover:text-[#72AE1C]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </Link>
              );
            })}

            {/* Mobile Contact Us button */}
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <button
                type="button"
                className="mt-2 w-full rounded-md bg-white px-4 py-2 font-semibold text-[#0C0332] hover:bg-gray-200 transition"
              >
                Contact Us
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
