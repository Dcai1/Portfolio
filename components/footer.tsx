"use client";

import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
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
      </div>

      {/* Fading divider */}
      <div className="w-full h-px my-4 bg-gradient-to-r from-transparent via-snow to-transparent"></div>

      {/* Bottom row */}
      <div className="flex justify-center my-auto mb-4">
        <Link
          href="https://github.com/Dcai1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/github-mark-white.svg"
            alt="GitHub"
            title="Access my Github here"
            width={30}
            height={30}
            className="transition hover:opacity-80 hover:scale-120 active:scale-95"
          />
        </Link>
      </div>
      <p className="text-sm text-center">
        © 2025 David Cai. All rights reserved.
      </p>
    </footer>
  );
};
