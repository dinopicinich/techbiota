import Image from "next/image";
import type { Metadata } from "next";
import { Stethoscope, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries | TechBiota",
  description:
    "We specialize in Healthcare and FinTech—secure, compliant, and cloud-forward managed IT and cybersecurity.",
};

const brand = {
  primary: "#163a60",
  secondary: "#1d695f",
  accent: "#228e60",
  fintechAccent: "#0ea5e9",
  light: "#f4f7fb",
} as const;

export default function IndustriesPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: `linear-gradient(180deg, ${brand.light} 0%, #fff 100%)` }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold" style={{ color: brand.primary }}>
            Industries We Serve
          </h1>
          <p className="mt-3 text-slate-700 max-w-3xl">
            We focus on two high-impact verticals—Healthcare and FinTech—where security, compliance,
            and reliability are non-negotiable. Explore how we tailor managed IT and cybersecurity
            to each domain’s realities.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Healthcare */}
          <a
            href="/healthcare"
            className="rounded-2xl bg-white border shadow-sm overflow-hidden group"
            style={{ borderColor: "#e6ebf2" }}
          >
            <div className="relative h-40 w-full">
              <Image
                src="/healthcare-hero.jpg"
                alt="Healthcare technology"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl" style={{ background: brand.light }}>
                  <Stethoscope size={20} style={{ color: brand.secondary }} />
                </div>
                <h2 className="text-xl font-semibold" style={{ color: brand.primary }}>
                  Healthcare
                </h2>
              </div>
              <p className="text-slate-700">
                HIPAA-grade cybersecurity, 24/7 clinical helpdesk, EHR resilience, and IoMT security
                built for hospitals, practices, biotech, and research.
              </p>
              <ul className="mt-3 text-sm text-slate-700 list-disc list-inside space-y-1">
                <li>HIPAA • HITECH • SOC 2-aligned</li>
                <li>EHR workloads (Epic / Cerner) resilience</li>
                <li>IoMT segmentation & endpoint hygiene</li>
              </ul>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium" style={{ color: brand.secondary }}>
                Learn more →
              </div>
            </div>
          </a>

          {/* FinTech */}
          <a
            href="/fintech"
            className="rounded-2xl bg-white border shadow-sm overflow-hidden group"
            style={{ borderColor: "#e6ebf2" }}
          >
            <div className="relative h-40 w-full">
              <Image
                src="/fintech-hero.jpg"
                alt="FinTech infrastructure"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl" style={{ background: brand.light }}>
                  <CreditCard size={20} style={{ color: brand.fintechAccent }} />
                </div>
                <h2 className="text-xl font-semibold" style={{ color: brand.primary }}>
                  FinTech
                </h2>
              </div>
              <p className="text-slate-700">
                PCI-aware, SOC 2-friendly infrastructure for payments, trading, and digital banking—
                designed for low latency, high uptime, and cloud scale.
              </p>
              <ul className="mt-3 text-sm text-slate-700 list-disc list-inside space-y-1">
                <li>PCI DSS • SOC 2 patterns</li>
                <li>Cloud-native (Azure/AWS) reference designs</li>
                <li>Zero-trust & SIEM/MDR operations</li>
              </ul>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium" style={{ color: brand.secondary }}>
                Learn more →
              </div>
            </div>
          </a>
        </div>

        {/* Benefit band */}
        <section className="mt-12">
          <div className="rounded-2xl p-5 grid grid-cols-2 md:grid-cols-4 gap-4 items-center" style={{ background: brand.light }}>
            {["HIPAA / PCI Aware", "Cloud-Native", "24/7 Support", "SOC 2-Aligned"].map((item) => (
              <div key={item} className="text-center text-sm font-medium" style={{ color: brand.primary }}>
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}