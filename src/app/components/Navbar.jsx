"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { BASE_URL } from "../util/constant/common";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Conference Tracks", href: "/#tracks" },
    { name: "Important Dates", href: "/#important-dates" },

    {
      name: "Submission",
      submenu: [
        { name: "Author Guidelines", href: "/submission/author-guidelines" },
        { name: "Submit Paper", href: "/submission/submit-paper" },
      ],
    },

    { name: "Registration", href: "/registration" },

    { name: "Committee", href: "/committee" },

    { name: "Journal", href: "/journal" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <Image
              src={`${BASE_URL}/icacit-logo.svg`}
              alt="Logo"
              width={160}
              height={40}
              className="h-12 w-auto object-contain cursor-pointer"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {/* Item */}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-black font-semibold text-sm hover:text-[#2295BA] relative pb-1"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#2295BA] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ) : (
                  <span className="text-black font-semibold text-sm cursor-pointer relative pb-1">
                    {item.name}
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#2295BA] group-hover:w-full transition-all duration-300"></span>
                  </span>
                )}

                {/* Simple Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 bg-white shadow-lg border opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50 py-2 w-56">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#2295BA]"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {/* Main item */}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block text-black font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div className="text-black font-semibold">{item.name}</div>
                )}

                {/* Dropdown */}
                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block text-gray-700 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
