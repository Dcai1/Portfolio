"use client";

import Link from "next/link";
import { FooterImage } from "./footerimage";
import { useRef, useEffect } from "react";

export const Footer = () => {
  const currentYear = useRef(new Date().getFullYear());

  useEffect(() => {
    currentYear.current = new Date().getFullYear();
  }, []);

  return (
    <footer className="w-full py-6 text-white border-t border-snow bg-night/70">
      {/* Top row */}
      <div className="flex justify-center gap-6 mb-4 text-lg">
        {/* Contact */}
        <div className="flex flex-col items-center justify-center">
          <Link
            href={"mailto:dcai1.3828@gmail.com"}
            className="transition hover:underline hover:scale-105 active:scale-95 hover:text-fulvous"
          >
            Contact Me
          </Link>
          <p className="text-sm italic">dcai1.3828@gmail.com</p>
        </div>
        <Link
          href="/about"
          className="transition hover:underline hover:scale-105 active:scale-95 hover:text-fulvous"
        >
          About
        </Link>
        {/* Resume */}
        <Link
          href="/resume.pdf"
          className="transition hover:underline hover:scale-105 active:scale-95 hover:text-fulvous"
          target="_blank"
        >
          My Resume
        </Link>
      </div>

      {/* Fading divider */}
      <div className="w-full h-px my-4 bg-gradient-to-r from-transparent via-snow to-transparent"></div>

      {/* Bottom row */}
      <div className="flex justify-center my-auto mb-4 gap-2">
        <FooterImage
          href="https://github.com/Dcai1"
          src="/images/github-mark-white.svg"
          alt="GitHub"
          title="Visit my Github Profile here!"
        />
        <FooterImage
          href="https://www.linkedin.com/in/david-cai-24b08427b/"
          src="/images/linkedin.svg"
          alt="LinkedIn"
          title="Visit my LinkedIn!"
        />
      </div>
      <p className="text-sm text-center">
        © {currentYear.current} David Cai. All rights reserved.
      </p>
    </footer>
  );
};
