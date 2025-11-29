"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const brand = {
  primary: "#163a60",
  secondary: "#1d695f",
};

// 👇 New: env-based toggle (show when "1", hide otherwise)
const SHOW_MEET = process.env.NEXT_PUBLIC_SHOW_MEET === "1";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      <a onClick={onClick} href="/services"  className="hover:underline" style={{ color: brand.primary }}>Services</a>
      <a onClick={onClick} href="/healthcare" className="hover:underline" style={{ color: brand.primary }}>Healthcare</a>
      <a onClick={onClick} href="/industries" className="hover:underline" style={{ color: brand.primary }}>Industries</a>
      <a onClick={onClick} href="/resources" className="hover:underline" style={{ color: brand.primary }}>Resources</a>
      <a onClick={onClick} href="/pricing" className="hover:underline" style={{ color: brand.primary }}>Pricing</a>

      {/* 👇 New: conditionally render Meet TechBiota */}
      {SHOW_MEET && (
        <a onClick={onClick} href="/meet-techbiota" className="hover:underline" style={{ color: brand.primary }}>
          Meet TechBiota
        </a>
      )}
      <a onClick={onClick} href="/about"     className="hover:underline" style={{ color: brand.primary }}>About</a>
      <a onClick={onClick} href="/contact"   className="hover:underline" style={{ color: brand.primary }}>Contact</a>
    </>
  );

  return (
    <header className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Brand logo */}
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/TechBiota-01.png"
            alt="TechBiota"
            width={220}
            height={70}
            priority
            className="h-auto w-32 sm:w-40 md:w-48 lg:w-56"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm">
          <NavLinks />
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="/contact" className="items-center gap-2 px-4 py-2 rounded-xl font-medium flex"
             style={{ background: brand.primary, color: "white" }}>
            <Phone size={16} /> Get a Consultation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm"
          aria-label="Open menu"
          style={{ borderColor: "#e6ebf2", color: brand.primary }}
        >
          <Menu size={18} /> Menu
        </button>
      </div>

      {/* Mobile slide-over */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/30 md:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-72 bg-white shadow-xl md:hidden"
              initial={{ x: 320 }} animate={{ x: 0 }} exit={{ x: 320 }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <div className="p-6 flex flex-col gap-4 h-full">
                <button onClick={() => setOpen(false)} className="self-end rounded-lg px-3 py-1 text-sm border">
                  Close <X size={14} className="inline ml-1" />
                </button>

                <nav className="flex flex-col text-sm">
                  <NavLinks onClick={() => setOpen(false)} />
                </nav>

                <a onClick={() => setOpen(false)} href="/contact"
                   className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium"
                   style={{ background: brand.primary, color: "white" }}>
                  <Phone size={16} /> Get a Consultation
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}