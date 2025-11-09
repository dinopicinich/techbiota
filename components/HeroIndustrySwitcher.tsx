"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type Industry = "healthcare" | "fintech";

const brand = {
  primary: "#163a60",
  secondary: "#1d695f",
  accent: "#228e60",
  fintechAccent: "#0ea5e9", // light blue accent for fintech (Tailwind cyan-ish)
  light: "#f4f7fb",
};

export default function HeroIndustrySwitcher() {
  const [active, setActive] = useState<Industry>("healthcare");

  const isHealthcare = active === "healthcare";

  const copy = isHealthcare
    ? {
        h1: (
          <>
            Healthcare IT that <span style={{ color: brand.accent }}>protects</span> life and data
          </>
        ),
        p: "We manage, secure, and optimize IT for hospitals, practices, biotech, and research organizations—so you can focus on patients, not systems.",
        cta1: { href: "/contact", label: "Get Started" },
        cta2: { href: "/assessment", label: "Free HIPAA Readiness Check" },
        badge: "HIPAA • HITECH • SOC 2-aligned",
        image: "/healthcare-hero.jpg",
      }
    : {
        h1: (
          <>
            FinTech infrastructure that <span style={{ color: brand.fintechAccent }}>scales</span>{" "}
            with compliance
          </>
        ),
        p: "We build and support secure, high-availability environments for payments, trading, and digital banking—PCI-aware, SOC 2-friendly, and cloud-native.",
        cta1: { href: "/contact", label: "Talk to a FinTech Architect" },
        cta2: { href: "/fintech", label: "See FinTech Services" },
        badge: "PCI DSS • SOC 2 • Cloud-native patterns",
        image: "/fintech-hero.jpg",
      };

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-14 grid md:grid-cols-2 gap-10 items-center">
        {/* Left copy */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          {/* Toggle */}
          <div className="mb-4 inline-flex rounded-xl border p-1 bg-white shadow-sm" style={{ borderColor: "#e6ebf2" }}>
            <button
              onClick={() => setActive("healthcare")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                isHealthcare ? "bg-[#e8f4ef] text-[#1d695f]" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Healthcare
            </button>
            <button
              onClick={() => setActive("fintech")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                !isHealthcare ? "bg-[#e8f2fb] text-[#0ea5e9]" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              FinTech
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: brand.primary }}>
            {copy.h1}
          </h1>

          <p className="mt-5 text-slate-700 text-lg leading-7">{copy.p}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={copy.cta1.href}
              className="px-5 py-3 rounded-xl font-semibold"
              style={{
                background: isHealthcare ? brand.accent : brand.fintechAccent,
                color: "white",
              }}
            >
              {copy.cta1.label}
            </a>

            <a
              href={copy.cta2.href}
              className="px-5 py-3 rounded-xl font-semibold"
              style={{
                border: `2px solid ${brand.secondary}`,
                color: brand.secondary,
              }}
            >
              {copy.cta2.label}
            </a>
          </div>

          <div className="mt-6 text-xs uppercase tracking-wide" style={{ color: brand.secondary }}>
            {copy.badge}
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          key={`${active}-image`}
          className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-sm border"
          style={{ borderColor: "#e6ebf2" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <Image
            src={copy.image}
            alt={isHealthcare ? "Healthcare technology" : "FinTech infrastructure"}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}