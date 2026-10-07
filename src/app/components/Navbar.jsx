// app/components/Navbar.jsx
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
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <Image
              src={`${BASE_URL}/icacit-logo.svg`}
              alt="ICACIT 2027"
              width={160}
              height={40}
              className="h-12 w-auto object-contain cursor-pointer"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-gray-800 font-semibold text-sm hover:text-[#2295BA] transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-gray-800 font-semibold text-sm cursor-pointer hover:text-[#2295BA] transition-colors">
                    {item.name}
                  </span>
                )}

                {item.submenu && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-50">
                    <div className="bg-white border border-gray-200 py-2 w-56">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#2295BA]"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-5 py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block text-gray-800 font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div className="text-gray-800 font-semibold">{item.name}</div>
                )}

                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block text-gray-600 text-sm"
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
