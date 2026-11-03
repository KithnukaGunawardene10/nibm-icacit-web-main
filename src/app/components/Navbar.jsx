// app/components/Navbar.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { BASE_URL } from "../util/constant/common";
import GlassSurface from "./GlassSurface";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const pathname = usePathname();
  const submenuTimeout = useRef(null);

  const isHome = pathname === "/";
  const useLightText = !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  const openMenu = (name) => {
    if (submenuTimeout.current) clearTimeout(submenuTimeout.current);
    setOpenSubmenu(name);
  };

  const closeMenu = () => {
    // Small delay so the cursor can move into the dropdown
    submenuTimeout.current = setTimeout(() => setOpenSubmenu(null), 150);
  };

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

  const linkClass = `
    px-3 py-2 rounded-xl font-semibold text-sm transition-all duration-200
    inline-flex items-center gap-1
    ${
      useLightText
        ? "text-white hover:text-white hover:bg-white/15"
        : "text-gray-900/90 hover:text-[#2295BA] hover:bg-white/40"
    }
  `;

  const mobileLinkClass = `
    block px-3 py-2.5 rounded-xl font-semibold text-sm transition-colors
    ${
      useLightText
        ? "text-white hover:bg-white/15"
        : "text-gray-900 hover:bg-white/40 hover:text-[#2295BA]"
    }
  `;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        {/* overflow-visible so dropdown is not clipped */}
        <div className="relative overflow-visible">
          <GlassSurface
            width="100%"
            height={mobileMenuOpen ? "auto" : 64}
            borderRadius={20}
            borderWidth={0.07}
            brightness={useLightText ? 30 : 50}
            opacity={useLightText ? 0.85 : 0.93}
            blur={11}
            displace={0}
            backgroundOpacity={useLightText ? 0.05 : 0.1}
            saturation={1.2}
            distortionScale={-180}
            redOffset={0}
            greenOffset={10}
            blueOffset={20}
            xChannel="R"
            yChannel="G"
            mixBlendMode="difference"
            className="w-full overflow-visible"
            style={{
              minHeight: 64,
              height: mobileMenuOpen ? "auto" : 64,
              overflow: "visible",
            }}
          >
            <div className="w-full px-4 sm:px-6 overflow-visible">
              <div className="flex items-center justify-between h-14 sm:h-16">
                {/* Logo */}
                <Link href="/" className="shrink-0">
                  <Image
                    src={`${BASE_URL}/icacit-logo.svg`}
                    alt="ICACIT 2027"
                    width={160}
                    height={40}
                    className={`h-10 sm:h-12 w-auto object-contain transition-all duration-300 ${
                      useLightText ? "brightness-0 invert" : ""
                    }`}
                    priority
                  />
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
                  {navItems.map((item) => (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => item.submenu && openMenu(item.name)}
                      onMouseLeave={() => item.submenu && closeMenu()}
                    >
                      {item.href ? (
                        <Link href={item.href} className={linkClass}>
                          {item.name}
                        </Link>
                      ) : (
                        <button type="button" className={linkClass}>
                          {item.name}
                          {item.submenu && (
                            <ChevronDown
                              size={14}
                              className={`transition-transform duration-200 ${
                                openSubmenu === item.name ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </button>
                      )}

                      {/* Dropdown – rendered outside GlassSurface clipping */}
                      {item.submenu && openSubmenu === item.name && (
                        <div
                          className="absolute left-0 top-full z-[100] pt-2"
                          onMouseEnter={() => openMenu(item.name)}
                          onMouseLeave={closeMenu}
                        >
                          <div className="min-w-[230px] rounded-xl bg-white shadow-xl border border-gray-200 py-2">
                            {item.submenu.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="block px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-[#2295BA]/10 hover:text-[#2295BA] transition-colors"
                                onClick={() => setOpenSubmenu(null)}
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

                {/* Mobile toggle */}
                <button
                  className={`md:hidden p-2 rounded-xl transition-colors ${
                    useLightText
                      ? "text-white hover:bg-white/15"
                      : "text-gray-900 hover:bg-white/40"
                  }`}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              {/* Mobile menu */}
              {mobileMenuOpen && (
                <div className="md:hidden border-t border-white/20 pb-3 pt-1">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className={mobileLinkClass}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <button
                          type="button"
                          className={`${mobileLinkClass} w-full text-left flex items-center justify-between`}
                          onClick={() =>
                            setOpenSubmenu(
                              openSubmenu === item.name ? null : item.name
                            )
                          }
                        >
                          {item.name}
                          {item.submenu && (
                            <ChevronDown
                              size={16}
                              className={`transition-transform ${
                                openSubmenu === item.name ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </button>
                      )}

                      {item.submenu && openSubmenu === item.name && (
                        <div className="ml-3 border-l border-gray-200 pl-3 space-y-0.5 mb-1">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-[#2295BA]/10 hover:text-[#2295BA] transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setOpenSubmenu(null);
                              }}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </GlassSurface>
        </div>
      </div>
    </nav>
  );
}