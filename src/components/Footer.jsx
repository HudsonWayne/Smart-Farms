"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0C0332] text-white font-['Avenir'] w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Top section with nav links and logo */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 text-base font-medium mb-4 md:mb-0">
            <a href="/" className="text-[#72AE1C] hover:text-[#72AE1C]">
              Home
            </a>
            <a href="/services" className="hover:text-[#72AE1C]">
              Services
            </a>
            <a href="/about" className="hover:text-[#72AE1C]">
              About Us
            </a>
            <a href="/our-team" className="hover:text-[#72AE1C]">
              Our Team
            </a>
            <a href="/operations" className="hover:text-[#72AE1C]">
              Operations
            </a>
          </nav>
          <img
            src="/logo.png"
            alt="Smart Farms Logo"
            className="w-20 h-auto"
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
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p className="mb-4 md:mb-0 text-center md:text-left w-full md:w-auto">
            Copyright © 2025 Smart Farms. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start items-center space-x-6 w-full md:w-auto">
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
            {/* <a
              href="https://twitter.com/SmartFarmsTech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400"
            >
              <FaTwitter />
              <span>Twitter</span>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
