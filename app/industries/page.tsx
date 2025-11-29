// app/industries/page.tsx

import { Metadata } from "next";
import { Stethoscope, Activity, Shield, Beaker } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | TechBiota",
  description:
    "TechBiota focuses exclusively on healthcare — hospitals, practices, ambulatory networks, biotech, and research organizations.",
};

const brand = {
  primary: "#163a60",
  secondary: "#1d695f",
  accent: "#228e60",
  dark: "#0a0f14",
  light: "#f4f7fb",
};

export default function IndustriesPage() {
  return (
    <main
      className="min-h-screen pb-16"
      style={{ background: `linear-gradient(180deg, ${brand.light} 0%, #ffffff 100%)` }}
    >
      {/* Page header */}
      <section className="pt-10 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: brand.primary }}
          >
            Industries We Serve
          </h1>
          <p className="max-w-3xl text-slate-700 leading-7">
            We focus exclusively on healthcare—hospitals, practices, ambulatory networks,
            biotech, and research organizations—where security, compliance, and reliability
            are non-negotiable. Explore how we tailor managed IT and cybersecurity to each
            domain&apos;s realities.
          </p>
        </div>
      </section>

      {/* Two main industry cards */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 lg:grid-cols-2">
          {/* LEFT: Healthcare card (fixed, clean layout) */}
          <article className="rounded-3xl border shadow-sm bg-white overflow-hidden flex flex-col md:flex-row">
            {/* Left content */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <p
                  className="text-[11px] font-semibold tracking-wide uppercase mb-2"
                  style={{ color: brand.secondary }}
                >
                  Protects life and data
                </p>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-3"
                  style={{ color: brand.primary }}
                >
                  Healthcare
                </h2>
                <p className="text-sm md:text-base text-slate-700 leading-6 mb-4 max-w-md">
                  We manage, secure, and optimize IT for hospitals, practices, biotech, and
                  research organizations—so you can focus on patients, not systems.
                </p>

                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <Shield
                      size={18}
                      className="mt-0.5"
                      style={{ color: brand.secondary }}
                    />
                    <span>HIPAA + HITECH + SOC 2-aligned operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Activity
                      size={18}
                      className="mt-0.5"
                      style={{ color: brand.secondary }}
                    />
                    <span>24/7 clinical helpdesk and EHR resilience (Epic / Cerner)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Stethoscope
                      size={18}
                      className="mt-0.5"
                      style={{ color: brand.secondary }}
                    />
                    <span>IoMT segmentation and endpoint hygiene across clinical devices</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5">
                <a
                  href="/healthcare"
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: brand.secondary }}
                >
                  Learn more →
                </a>
              </div>
            </div>

            {/* Optional visual stripe on the right to keep layout stable */}
            <div
              className="hidden md:block md:w-48 lg:w-56"
              style={{
                background: `radial-gradient(circle at top, ${brand.accent}11 0, transparent 55%), linear-gradient(180deg, ${brand.primary} 0%, ${brand.secondary} 100%)`,
              }}
            />
          </article>

          {/* RIGHT: Biotech & Research card */}
          <article className="rounded-3xl border shadow-sm bg-white overflow-hidden flex flex-col">
            <div
              className="px-6 pt-6 pb-4"
              style={{ background: `linear-gradient(135deg, ${brand.secondary}, ${brand.accent})` }}
            >
              <h2 className="text-2xl font-bold text-white mb-1">Biotech &amp; Research</h2>
              <p className="text-sm text-white/90 max-w-xl">
                Managing, securing, and optimizing IT for biotech labs, research institutes,
                and life-science organizations.
              </p>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="p-2 rounded-xl"
                    style={{ background: brand.light }}
                  >
                    <Beaker size={18} style={{ color: brand.secondary }} />
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: brand.primary }}
                  >
                    Biotech &amp; Research
                  </span>
                </div>

                <p className="text-sm md:text-base text-slate-700 leading-6 mb-4">
                  Secure, compliant infrastructure for labs and research environments—
                  supporting scientific workloads, sensitive datasets, and collaboration with
                  hospital partners.
                </p>

                <ul className="space-y-2 text-sm text-slate-700">
                  <li>Secure hosting for lab and research applications</li>
                  <li>Data protection and retention aligned to HIPAA and sponsor requirements</li>
                  <li>
                    Identity, access, and network controls for multi-site research programs
                  </li>
                </ul>
              </div>

              <div className="mt-5">
                <a
                  href="/healthcare#biotech"
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: brand.secondary }}
                >
                  Learn more →
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Small capability chips */}
      <section>
        <div className="mx-auto max-w-7xl px-6">
          <div
            className="mt-4 rounded-2xl px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-xs md:text-sm font-medium"
            style={{ background: brand.light }}
          >
            <span style={{ color: brand.primary }}>HIPAA / PCI Aware</span>
            <span style={{ color: brand.primary }}>Cloud-Native</span>
            <span style={{ color: brand.primary }}>24/7 Support</span>
            <span style={{ color: brand.primary }}>SOC 2-Aligned</span>
          </div>
        </div>
      </section>
    </main>
  );
}