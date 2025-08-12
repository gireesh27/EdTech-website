"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-black-900 text-gray-300 px-8 py-10 max-w-screen-xl mx-auto w-full rounded-t-lg border-t border-gray-700 
      flex flex-col md:flex-row md:justify-between md:items-start gap-y-8 md:gap-y-0"
    >
      {/* Left side: copyright and contact */}
      <div className="flex flex-col gap-4 max-w-sm">
        <p className="text-sm sm:text-base text-gray-400">
          © 2024 Gireesh Kasa. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm text-gray-500">
          Contact:{" "}
          <Link
            href="mailto:contact@gireeshkasa.com"
            className="underline hover:text-white"
          >
            contact@gireeshkasa.com
          </Link>
        </p>
        <p className="text-xs sm:text-sm text-gray-500">
          Phone:{" "}
          <Link
            href="tel:+919876543210"
            className="underline hover:text-white"
          >
            +91 98765 43210
          </Link>
        </p>
      </div>

      {/* Middle: Links */}
      <nav className="flex flex-col md:flex-row gap-4 md:gap-12 text-sm sm:text-base">
        <Link
          href="/terms-of-use"
          className="hover:text-white transition-colors duration-200"
        >
          Terms & Conditions
        </Link>
        <Link
          href="/privacy-policy"
          className="hover:text-white transition-colors duration-200"
        >
          Privacy Policy
        </Link>
        <Link
          href="/about"
          className="hover:text-white transition-colors duration-200"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="hover:text-white transition-colors duration-200"
        >
          Contact
        </Link>
      </nav>

     

      {/* Bottom social icons */}
      <div className="mt-10 w-full flex justify-center space-x-6 text-gray-500">
        <Link
          href="https://twitter.com/gireeshkasa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-indigo-500 transition-colors duration-200"
        >
          <Twitter className="w-6 h-6" />
        </Link>
        <Link
          href="https://github.com/gireeshkasa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-indigo-500 transition-colors duration-200"
        >
          <Github className="w-6 h-6" />
        </Link>
        <Link
          href="https://linkedin.com/in/gireeshkasa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-indigo-500 transition-colors duration-200"
        >
          <Linkedin className="w-6 h-6" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
