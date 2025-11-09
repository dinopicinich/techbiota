import Image from "next/image";

export const metadata = {
  title: "FinTech IT Services | TechBiota",
  description:
    "Managed IT, cybersecurity, and compliance for FinTech and financial services—SOC 2, PCI-DSS, GLBA, and cloud governance.",
};

const brand = {
  primary: "#163a60",
  secondary: "#1d695f",
  accent: "#228e60",
  light: "#f4f7fb",
};

type CardProps = { title: string; desc: string };

function Card({ title, desc }: CardProps) {
  return (
    <div className="rounded-2xl p-6 shadow-sm border bg-white" style={{ borderColor: "#e6ebf2" }}>
      <h3 className="text-lg font-semibold" style={{ color: brand.primary }}>{title}</h3>
      <p className="text-sm leading-6 text-slate-700 mt-2">{desc}</p>
    </div>
  );
}

export default function FinTechPage() {
  return (
    <main className="min-h-screen" style={{ background: `linear-gradient(180deg, ${brand.light} 0%, #ffffff 100%)` }}>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-semibold px-2 py-1 rounded-full" style={{ background: brand.light, color: brand.secondary }}>
                Regulated industries
              </span>
              <span className="text-[11px] uppercase tracking-wide text-slate-600">FinTech</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: brand.primary }}>
              Secure IT for FinTech & Financial Services
            </h1>
            <p className="mt-5 text-slate-700 text-lg leading-7">
              From emerging payment platforms to investment firms, we deliver SOC&nbsp;2 and PCI-DSS-ready operations,
              strong identity controls, and cloud governance that builds trust with auditors and customers.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="/pricing" className="px-5 py-3 rounded-xl font-semibold"
                 style={{ border: `2px solid ${brand.secondary}`, color: brand.secondary }}>
                See Pricing
              </a>
              <a href="/contact" className="px-5 py-3 rounded-xl font-semibold"
                 style={{ background: brand.primary, color: "white" }}>
                Talk to an Architect
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-wide">
              <span className="px-2 py-1 rounded-full" style={{ background: brand.light, color: brand.primary }}>SOC 2</span>
              <span className="px-2 py-1 rounded-full" style={{ background: brand.light, color: brand.primary }}>PCI-DSS</span>
              <span className="px-2 py-1 rounded-full" style={{ background: brand.light, color: brand.primary }}>GLBA</span>
              <span className="px-2 py-1 rounded-full" style={{ background: brand.light, color: brand.primary }}>Zero Trust</span>
            </div>
          </div>

          {/* Optional hero visual (add /public/fintech-hero.jpg or swap) */}
          <div className="relative h-56 md:h-72 rounded-3xl overflow-hidden border shadow-sm bg-white/70"
               style={{ borderColor: "#e6ebf2" }}>
            <Image
              src="/fintech-hero.jpg"
              alt="FinTech operations"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold mb-6" style={{ color: brand.primary }}>
            Services for FinTech
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <Card
              title="Managed IT for Financial Systems"
              desc="Proactive monitoring, patching, and co-managed support for trading, payments, and back-office workloads."
            />
            <Card
              title="Security & Compliance"
              desc="SOC 2 controls, PCI-DSS readiness, audit evidence, MDR/SIEM, and least-privilege identity with MFA/SSO."
            />
            <Card
              title="Cloud Governance"
              desc="Landing zones, encryption standards, network segmentation, and cost controls across AWS/Azure."
            />
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl p-6 border shadow-sm bg-white" style={{ borderColor: "#e6ebf2" }}>
            <h3 className="text-xl font-semibold mb-3" style={{ color: brand.primary }}>Outcome highlights</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-xl p-4" style={{ background: brand.light }}>
                <div className="text-3xl font-bold" style={{ color: brand.primary }}>99.99%</div>
                <div className="text-xs uppercase tracking-wide text-slate-600">Uptime</div>
              </div>
              <div className="rounded-xl p-4" style={{ background: brand.light }}>
                <div className="text-3xl font-bold" style={{ color: brand.primary }}>-30%</div>
                <div className="text-xs uppercase tracking-wide text-slate-600">Audit Findings</div>
              </div>
              <div className="rounded-xl p-4" style={{ background: brand.light }}>
                <div className="text-3xl font-bold" style={{ color: brand.primary }}>+40%</div>
                <div className="text-xs uppercase tracking-wide text-slate-600">Onboarding Speed</div>
              </div>
              <div className="rounded-xl p-4" style={{ background: brand.light }}>
                <div className="text-3xl font-bold" style={{ color: brand.primary }}>24/7</div>
                <div className="text-xs uppercase tracking-wide text-slate-600">Monitoring</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold" style={{ color: brand.primary }}>
              Built for audits without slowing shipping
            </h3>
            <p className="mt-3 text-slate-700">
              We align day-to-day operations with SOC&nbsp;2 and PCI-DSS controls, so your product teams can ship while
              auditors get the evidence they need—access reviews, runbooks, and change history.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• CI/CD guardrails and environment separations</li>
              <li>• Endpoint baselines with hardening and EDR</li>
              <li>• Role-based access, SSO/MFA, and regular reviews</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className="px-5 py-3 rounded-xl font-semibold"
                 style={{ background: brand.primary, color: "white" }}>
                Get a FinTech Assessment
              </a>
              <a
                href={`${process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-calendly/intro-call"}?utm_source=fintech`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl font-semibold"
                style={{ border: `2px solid ${brand.secondary}`, color: brand.secondary }}
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resources preview (optional, mirrors home style) */}
      <section className="py-12" style={{ background: brand.light }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold" style={{ color: brand.primary }}>Resources</h2>
            <a href="/resources" className="text-sm font-medium underline" style={{ color: brand.secondary }}>
              See all
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <Card title="SOC 2 for Fast-Moving Teams" desc="How to balance velocity with auditability—controls that won’t slow shipping." />
            <Card title="PCI-DSS Basics for Modern Apps" desc="Practical scoping, tokenization, and compensating controls you can adopt now." />
            <Card title="Zero Trust Quickstart" desc="Identity, device trust, and least privilege—in weeks, not months." />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h3 className="text-2xl font-bold" style={{ color: brand.primary }}>
            Ready to scale securely?
          </h3>
          <p className="mt-2 text-slate-700">
            Let’s align your operations with SOC&nbsp;2 and PCI-DSS—without sacrificing delivery speed.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <a href="/pricing" className="px-5 py-3 rounded-xl font-semibold"
               style={{ border: `2px solid ${brand.secondary}`, color: brand.secondary }}>
              View Pricing
            </a>
            <a href="/contact" className="px-5 py-3 rounded-xl font-semibold"
               style={{ background: brand.accent, color: "white" }}>
              Contact TechBiota
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}