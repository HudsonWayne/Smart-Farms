"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0C0032] text-white px-6 py-8 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Menu and Logo */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Navigation */}
          <div className="flex space-x-8 text-lg font-medium">
            <a href="#" className="text-green-500">Home</a>
            <a href="#" className="hover:text-green-500">Services</a>
            <a href="#" className="hover:text-green-500">About US</a>
            <a href="#" className="hover:text-green-500">Blog</a>
          </div>

          {/* Logo */}
          <img src="/logo.png" alt="Smart Farms Logo" className="w-20 mt-6 md:mt-0" />
        </div>

        {/* Blue Line */}
        <div className="border-t-4 border-blue-500 w-full mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Copyright */}
          <p className="text-gray-300 mb-4 md:mb-0">
            Copyright © 2025 Smart Farms. All rights reserved.
          </p>

          {/* Social Icons */}
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
