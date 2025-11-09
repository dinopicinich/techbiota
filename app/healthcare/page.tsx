import Image from "next/image";
import type { Metadata } from "next";
import { Stethoscope, Shield, Activity, Cloud } from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare IT Services | TechBiota",
  description:
    "Managed IT and cybersecurity for hospitals, practices, biotech, and research orgs. HIPAA-ready, EHR-aware, and built for clinical uptime.",
};

export default function HealthcarePage() {
  const brand = {
    primary: "#163a60",
    secondary: "#1d695f",
    accent: "#228e60",
    light: "#f4f7fb",
  } as const;

  return (
    <main
      className="min-h-screen"
      style={{ background: `linear-gradient(180deg, ${brand.light} 0%, #ffffff 100%)` }}
    >
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: brand.primary }}>
              Healthcare IT that <span style={{ color: brand.accent }}>protects</span> life and data
            </h1>
            <p className="mt-5 text-slate-700 text-lg leading-7">
              We manage, secure, and optimize IT for hospitals, practices, biotech, and research
              organizations—so you can focus on patients, not systems.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="/contact"
                className="px-5 py-3 rounded-xl font-semibold"
                style={{ background: brand.accent, color: "white" }}
              >
                Get Started
              </a>
              <a
                href="/assessment"
                className="px-5 py-3 rounded-xl font-semibold"
                style={{ border: `2px solid ${brand.secondary}`, color: brand.secondary }}
              >
                Free HIPAA Readiness Check
              </a>
            </div>

            <div className="mt-6 text-xs uppercase tracking-wide" style={{ color: brand.secondary }}>
              HIPAA • HITECH • SOC 2-aligned processes
            </div>
          </div>

          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: "#e6ebf2" }}>
            <Image
              src="/healthcare-hero.jpg"
              alt="Healthcare IT operations and clinical technology"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className="rounded-2xl p-5 grid grid-cols-2 md:grid-cols-4 gap-4 items-center"
            style={{ background: brand.light }}
          >
            {[
              "HIPAA & HITECH Expertise",
              "24/7 Clinical Helpdesk",
              "IoMT Device Security",
              "EHR Resilience (Epic / Cerner)",
            ].map((item) => (
              <div key={item} className="text-center text-sm font-medium" style={{ color: brand.primary }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service buckets */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold mb-6" style={{ color: brand.primary }}>
            Services for Healthcare & Life Sciences
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            <Card
              brand={brand}
              icon={Shield}
              title="HIPAA-Grade Cybersecurity"
              desc="Defense-in-depth, MDR/SIEM, identity hardening, and compliance reporting tailored to PHI and IoMT risk."
            />
            <Card
              brand={brand}
              icon={Stethoscope}
              title="Managed IT for Healthcare"
              desc="Proactive monitoring, patching, and co-managed support built for clinical uptime and regulatory needs."
            />
            <Card
              brand={brand}
              icon={Cloud}
              title="Cloud & Telehealth"
              desc="Azure/AWS healthcare architectures, remote care performance, and secure data exchange (HL7/FHIR)."
            />
          </div>
        </div>
      </section>

      {/* Outcome highlights */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-3" style={{ color: brand.primary }}>
              Built exclusively for healthcare
            </h3>
            <p className="text-slate-700">
              Hospitals, physician groups, biotech, CROs—we align IT with clinical workflows and
              compliance realities. Our playbooks accelerate security and interoperability without
              disrupting care.
            </p>
            <ul className="mt-5 space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <Activity className="mt-1" size={18} style={{ color: brand.secondary }} />
                BCDR for EHR workloads and imaging systems
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-1" size={18} style={{ color: brand.secondary }} />
                IoMT segmentation and endpoint hygiene across clinical devices
              </li>
              <li className="flex items-start gap-2">
                <Stethoscope className="mt-1" size={18} style={{ color: brand.secondary }} />
                HIPAA readiness, risk assessment, and audit-friendly documentation
              </li>
            </ul>

            <a
              href="/contact"
              className="mt-6 inline-flex px-5 py-3 rounded-xl font-semibold"
              style={{ background: brand.primary, color: "white" }}
            >
              Talk to a Healthcare IT Architect
            </a>
          </div>

          <div className="rounded-2xl p-6 border shadow-sm bg-white" style={{ borderColor: "#e6ebf2" }}>
            <h3 className="text-xl font-semibold mb-3" style={{ color: brand.primary }}>
              Outcome highlights
            </h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <Metric brand={brand} value="99.95%" label="Clinical Uptime" />
              <Metric brand={brand} value="-42%" label="Security Incidents" />
              <Metric brand={brand} value="+28%" label="IT Ticket SLA" />
              <Metric brand={brand} value="7d → 2d" label="Onboarding Time" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ——— Small presentational helpers ——— */

function Card({
  brand,
  icon: Icon,
  title,
  desc,
}: {
  brand: { primary: string; secondary: string; light: string };
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl p-6 shadow-sm border bg-white" style={{ borderColor: "#e6ebf2" }}>
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-xl" style={{ background: brand.light }}>
          <Icon size={22} style={{ color: brand.secondary }} />
        </div>
        <h3 className="text-lg font-semibold" style={{ color: brand.primary }}>
          {title}
        </h3>
      </div>
      <p className="text-sm leading-6 text-slate-700">{desc}</p>
    </div>
  );
}

function Metric({ brand, value, label }: { brand: any; value: string; label: string }) {
  return (
    <div className="rounded-xl p-4" style={{ background: brand.light }}>
      <div className="text-3xl font-bold" style={{ color: brand.primary }}>
        {value}
      </div>
      <div className="text-xs uppercase tracking-wide text-slate-600">{label}</div>
    </div>
  );
}