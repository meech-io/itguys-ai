"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Building2, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { businessServices, homeServices } from "@/data/services";
import Button from "../ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl font-bold text-text-primary tracking-tight">
              ITGuys
            </span>
            <span className="text-xl font-bold text-accent">.ai</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`inline-flex items-center gap-1 text-sm transition-colors duration-200 cursor-pointer ${
                      isActive(link.href)
                        ? "text-accent"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mega dropdown */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[540px] bg-surface border border-border rounded-xl shadow-2xl shadow-black/40 overflow-hidden"
                      >
                        <div className="p-1">
                          <Link
                            href="/services"
                            className="block px-4 py-2.5 text-sm text-accent hover:bg-elevated rounded-lg transition-colors font-medium"
                          >
                            All Services Overview
                          </Link>
                        </div>
                        <div className="border-t border-border" />
                        <div className="grid grid-cols-2 gap-0 p-2">
                          {/* Business column */}
                          <div>
                            <Link
                              href="/services/business"
                              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold tracking-wider uppercase text-text-muted hover:text-accent transition-colors"
                            >
                              <Building2 size={14} />
                              Business IT
                            </Link>
                            {businessServices.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/business/${s.slug}`}
                                className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-elevated rounded-lg transition-colors"
                              >
                                {s.title}
                              </Link>
                            ))}
                          </div>

                          {/* Home column */}
                          <div>
                            <Link
                              href="/services/home"
                              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold tracking-wider uppercase text-text-muted hover:text-accent transition-colors"
                            >
                              <Home size={14} />
                              Home Automation
                            </Link>
                            {homeServices.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/home/${s.slug}`}
                                className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-elevated rounded-lg transition-colors"
                              >
                                {s.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Button href="/contact" className="text-xs px-5 py-2">
              Get Started
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 bg-background/98 backdrop-blur-xl md:hidden z-40 overflow-y-auto"
          >
            <div className="flex flex-col items-center py-12 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link
                  href="/"
                  className={`text-2xl font-medium transition-colors ${
                    pathname === "/" ? "text-accent" : "text-text-primary hover:text-accent"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
              </motion.div>

              {/* Services with expandable sub-links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="flex flex-col items-center"
              >
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`text-2xl font-medium transition-colors inline-flex items-center gap-2 cursor-pointer ${
                    isActive("/services")
                      ? "text-accent"
                      : "text-text-primary hover:text-accent"
                  }`}
                >
                  Services
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col items-center gap-3 mt-4 overflow-hidden"
                    >
                      <Link
                        href="/services"
                        className="text-sm text-accent font-medium"
                        onClick={() => setMobileOpen(false)}
                      >
                        All Services
                      </Link>
                      <span className="text-xs uppercase tracking-wider text-text-muted mt-2">
                        Business IT
                      </span>
                      {businessServices.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/business/${s.slug}`}
                          className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.title}
                        </Link>
                      ))}
                      <span className="text-xs uppercase tracking-wider text-text-muted mt-2">
                        Home Automation
                      </span>
                      {homeServices.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/home/${s.slug}`}
                          className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
              >
                <Link
                  href="/about"
                  className={`text-2xl font-medium transition-colors ${
                    isActive("/about") ? "text-accent" : "text-text-primary hover:text-accent"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
              >
                <Link
                  href="/contact"
                  className={`text-2xl font-medium transition-colors ${
                    isActive("/contact") ? "text-accent" : "text-text-primary hover:text-accent"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 }}
              >
                <Button href="/contact" onClick={() => setMobileOpen(false)}>
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
