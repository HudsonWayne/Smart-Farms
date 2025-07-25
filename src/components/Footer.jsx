"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className={`${poppins.className} bg-[#0C0332] text-white w-full`}
      style={{
        fontFamily: "var(--font-poppins), sans-serif",
        letterSpacing: "0.5px", // keep letter spacing here
      }}
    >
      {/* Full width container with padding like Navbar */}
      <div className="w-full px-4 md:px-8 lg:px-16 py-8">
        {/* Top section with nav links and logo */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <nav className="flex flex-wrap justify-center md:justify-start space-x-2 sm:space-x-4 md:space-x-8 font-semibold mb-4 md:mb-0 text-sm sm:text-base md:text-lg">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-[#72AE1C]" : "hover:text-[#72AE1C]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`${
                pathname === "/services" ? "text-[#72AE1C]" : "hover:text-[#72AE1C]"
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === "/about" ? "text-[#72AE1C]" : "hover:text-[#72AE1C]"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/our-team"
              className={`${
                pathname === "/our-team" ? "text-[#72AE1C]" : "hover:text-[#72AE1C]"
              }`}
            >
              Our Team
            </Link>
            <Link
              href="/operations"
              className={`${
                pathname === "/operations" ? "text-[#72AE1C]" : "hover:text-[#72AE1C]"
              }`}
            >
              Operations
            </Link>
          </nav>
          <img
            src="/logo.png"
            alt="Smart Farms Logo"
            className="w-16 sm:w-20 h-auto"
            draggable={false}
          />
        </div>

        {/* Gradient line */}
        <div className="mb-6">
          <div
            className="h-1 rounded-full w-full"
            style={{
              background: "linear-gradient(to right, #72AE1C, #22D3EE)",
            }}
          />
        </div>

        {/* Bottom section with copyright and social icons */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-xs sm:text-sm md:text-base">
          <p className="mb-4 md:mb-0 text-center md:text-left w-full md:w-auto">
            Copyright © 2025 Smart Farms. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start items-center space-x-4 sm:space-x-6 w-full md:w-auto text-sm sm:text-base">
            <a
              href="https://www.linkedin.com/company/smart-farms-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400"
            >
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.facebook.com/share/1GWHfCdWvJ/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400"
            >
              <FaFacebookF />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/smart_farms_tech?igsh=OTNoMzlpdWVvbGZk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-pink-400"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
