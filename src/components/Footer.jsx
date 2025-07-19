"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0C0332] text-white font-['Avenir'] w-full">
      <div className="max-w-7xl mx-auto px-5 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex space-x-8 text-base font-medium mb-4 md:mb-0">
            <a href="/" className="text-[#72AE1C] hover:text-[#72AE1C]">Home</a>
            <a href="/services" className="hover:text-[#72AE1C]">Services</a>
            <a href="/about" className="hover:text-[#72AE1C]">About US</a>
            <a href="/blog" className="hover:text-[#72AE1C]">Blog</a>
          </div>
          <img
            src="/logo.png"
            alt="Smart Farms Logo"
            className="w-20 h-auto"
            draggable={false}
          />
        </div>

        <div className="border-t-4 border-blue-500 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p className="mb-4 md:mb-0">Copyright © 2025 Smart Farms. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center space-x-2 hover:text-blue-400">
              <FaLinkedinIn />
              <span>linkedin</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-blue-400">
              <FaFacebookF />
              <span>facebook</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-pink-400">
              <FaInstagram />
              <span>instagram</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-blue-300">
              <FaTwitter />
              <span>twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
