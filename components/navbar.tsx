"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export const Navbar = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOuterClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOuterClick);
    } else {
      document.removeEventListener("mousedown", handleOuterClick);
    }
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 text-lg shadow-lg bg-night opacity-90 sm:text-xl shadow-white">
      {/* Container */}
      <div
        className="flex items-center justify-between max-w-6xl px-4 mx-auto h-14"
        ref={menuRef}
      >
        {/* Logo */}
        <div className="items-center justify-center mb-3">
          <Link href="/">
            <Image
              src="/images/name.png"
              alt="David's Portfolio"
              width={250}
              height={250}
              className="hover:scale-105 transition"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="text-white sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Simple hamburger icon */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex sm:space-x-4 absolute sm:static top-16 left-0 w-full sm:w-auto bg-black sm:bg-transparent p-4 sm:p-0`}
        >
          <NavLink path={path} href="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink
            path={path}
            href="/projects"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink path={path} href="/about" onClick={() => setIsOpen(false)}>
            About Me
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

// Small reusable link component
const NavLink = ({
  path,
  href,
  children,
  onClick,
}: {
  path: string;
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    className={`block py-2 sm:py-0 hover:scale-105 transition ${
      path === href
        ? "font-bold italic text-white"
        : "hover:underline underline-offset-4 text-gray-300"
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
);
