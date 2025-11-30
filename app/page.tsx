"use client";

import AssessmentCard from "@/components/AssessmentCard";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Stethoscope,
  Activity,
  Cloud,
  Lock,
  Server,
  ArrowRight,
  Building,
} from "lucide-react";

/**
 * TechBiota Homepage Mockup with Calendly + HubSpot (NON-PHI)
 * + Responsive navbar with mobile slide-over drawer
 */

export default function TechBiotaHome() {
  const brand = {
    primary: "#163a60",
    secondary: "#1d695f",
    accent: "#228e60",
    dark: "#0a0f14",
    light: "#f4f7fb",
  } as const;

  /**
   * Calendly inline embed
   */
  const CalendlyInline = ({ url }: { url: string }) => (
    <div
      className="w-full rounded-2xl overflow-hidden border"
      style={{ borderColor: "#e6ebf2" }}
    >
      <iframe
        title="Calendly Scheduling"
        src={`${url}?hide_gdpr_banner=1&background_color=ffffff&text_color=14273d&primary_color=228e60`}
        className="w-full"
        style={{ minHeight: 660 }}
      />
    </div>
  );

  /**
   * HubSpot lead form (NON-PHI)
   * NOTE: If you want server-side validation/CAPTCHA, proxy via /api/hubspot later.
   */
  const HubSpotLeadForm = () => {
    const portalId =
      process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "YOUR_PORTAL_ID";
    const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID || "YOUR_FORM_GUID";

    const action = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    return (
      <form method="POST" action={action} className="space-y-4">
        {/* Hidden context (optional) */}
        <input type="hidden" name="hs_context" value="{}" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium" style={{ color: brand.primary }}>
              First name
            </label>
            <input
              name="firstname"
              required
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="Jane"
            />
          </div>
          <div>
            <label className="text-sm font-medium" style={{ color: brand.primary }}>
              Last name
            </label>
            <input
              name="lastname"
              required
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="Doe"
            />
          </div>
          <div>
            <label className="text-sm font-medium" style={{ color: brand.primary }}>
              Work email
            </label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="jane@hospital.org"
            />
          </div>
          <div>
            <label className="text-sm font-medium" style={{ color: brand.primary }}>
              Company / Org
            </label>
            <input
              name="company"
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="Montefiore"
            />
          </div>
          <div>
            <label className="text-sm font-medium" style={{ color: brand.primary }}>
              Role
            </label>
            <input
              name="jobtitle"
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="CIO / Director / Practice Manager"
            />
          </div>
          <div>
            <label className="text-sm font-medium" style={{ color: brand.primary }}>
              Phone (optional)
            </label>
            <input
              name="phone"
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="(555) 555-5555"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium" style={{ color: brand.primary }}>
            How can we help? (No PHI)
          </label>
          <textarea
            name="message"
            rows={4}
            className="mt-1 w-full rounded-xl border px-3 py-2"
            placeholder="Managed clinical endpoints, HIPAA assessment, IoMT segmentation… (Please do NOT include PHI)"
          />
        </div>

        <div
          className="text-xs text-slate-600 bg-white rounded-xl p-3 border"
          style={{ borderColor: "#e6ebf2" }}
        >
          <p className="mb-2">
  <strong>Privacy & HIPAA:</strong> This form is for business inquiries only.
  Do <em>not</em> include Protected Health Information (PHI). If your message
  may include PHI, please call us—do not submit PHI via this site.
          </p>
          <label className="flex items-start gap-2 mt-2">
            <input type="checkbox" required />
            <span>
              I agree to TechBiota processing my information for the purpose of
              contacting me about services and I understand this form is not for PHI.
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="px-5 py-3 rounded-xl font-semibold"
          style={{ background: brand.primary, color: "white" }}
        >
          Submit
        </button>
      </form>
    );
  };
// --- Healthcare IT Assessment (inline, no PHI) ---
function AssessmentCard({ brand, calendlyUrl }: { brand: any; calendlyUrl: string }) {
  const [endpoints, setEndpoints] = useState<"under50" | "50to250" | "250plus" | "">("");
  const [ehr, setEhr] = useState<"none" | "epic" | "cerner" | "athena" | "other" | "">("");
  const [mix, setMix] = useState<"onprem" | "hybrid" | "cloud" | "">("");
  const [sec, setSec] = useState<"basic" | "moderate" | "mature" | "">("");
  const [result, setResult] = useState<null | {
    tier: "Core" | "Enhanced" | "Enterprise";
    summary: string;
    bullets: string[];
  }>(null);

  function score() {
    // Simple heuristic for a first-pass estimate (no PHI, no org names)
    let s = 0;
    if (endpoints === "50to250") s += 1;
    if (endpoints === "250plus") s += 2;

    if (ehr === "epic" || ehr === "cerner") s += 2;
    else if (ehr === "athena" || ehr === "other") s += 1;

    if (mix === "hybrid") s += 1;
    if (mix === "cloud") s += 2;

    if (sec === "moderate") s += 1;
    if (sec === "mature") s += 2;

    let tier: "Core" | "Enhanced" | "Enterprise" = "Core";
    if (s >= 3 && s <= 5) tier = "Enhanced";
    if (s >= 6) tier = "Enterprise";

    const summaries: Record<typeof tier, string> = {
      Core:
        "Smaller footprint or early-stage program. Focus on core endpoint management, backups, and HIPAA minimums.",
      Enhanced:
        "Growing environment and compliance surface. Add MDR/SIEM, identity hardening, and EHR-specific BCDR.",
      Enterprise:
        "Complex, multi-workload environment. Full-stack ops with 24/7 NOC/SOC, IoMT segmentation, and advanced BCDR.",
    };

    const bullets: Record<typeof tier, string[]> = {
      Core: [
        "Managed endpoints & patching",
        "Encrypted backups + recovery testing",
        "HIPAA baseline (policies, audit trail)",
      ],
      Enhanced: [
        "MDR + SIEM & identity protection",
        "EHR workload protection & runbooks",
        "Network segmentation basics",
      ],
      Enterprise: [
        "24/7 NOC/SOC & advanced telemetry",
        "IoMT microsegmentation & CMMS tie-ins",
        "BCDR for EHR/imaging with RTO/RPO SLAs",
      ],
    };

    setResult({ tier, summary: summaries[tier], bullets: bullets[tier] });
  }

  const disabled = !endpoints || !ehr || !mix || !sec;

  return (
    <div
      className="rounded-3xl p-6 shadow-lg"
      style={{ background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.secondary} 100%)` }}
    >
      <div className="bg-white/95 rounded-2xl p-5">
        <h3 className="text-base font-semibold mb-2" style={{ color: brand.primary }}>
          Healthcare IT Assessment
        </h3>
        <p className="text-sm text-slate-700">
          Answer a few non-PHI questions to estimate your support scope and roadmap.
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          {/* # of endpoints */}
          <select
            className="rounded-xl p-3 border bg-white"
            value={endpoints}
            onChange={(e) => setEndpoints(e.target.value as any)}
          >
            <option value=""># of endpoints</option>
            <option value="under50">Under 50</option>
            <option value="50to250">50–250</option>
            <option value="250plus">250+</option>
          </select>

          {/* EHR */}
          <select
            className="rounded-xl p-3 border bg-white"
            value={ehr}
            onChange={(e) => setEhr(e.target.value as any)}
          >
            <option value="">EHR platform</option>
            <option value="epic">Epic</option>
            <option value="cerner">Cerner</option>
            <option value="athena">Athena/Other Cloud EHR</option>
            <option value="other">Other / Mixed</option>
            <option value="none">No EHR</option>
          </select>

          {/* Cloud/on-prem mix */}
          <select
            className="rounded-xl p-3 border bg-white"
            value={mix}
            onChange={(e) => setMix(e.target.value as any)}
          >
            <option value="">Cloud/on-prem mix</option>
            <option value="onprem">Mostly on-prem</option>
            <option value="hybrid">Hybrid</option>
            <option value="cloud">Mostly cloud</option>
          </select>

          {/* Security posture */}
          <select
            className="rounded-xl p-3 border bg-white"
            value={sec}
            onChange={(e) => setSec(e.target.value as any)}
          >
            <option value="">Security posture</option>
            <option value="basic">Basic</option>
            <option value="moderate">Moderate</option>
            <option value="mature">Mature</option>
          </select>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={score}
            disabled={disabled}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: brand.accent, color: "white" }}
          >
            Start Assessment
            <ArrowRight size={16} />
          </button>

          {/* Open Calendly prefilled with UTM-ish context in the querystring */}
          {result && (
            <a
              href={`${calendlyUrl}?utm_source=assessment&utm_medium=web&utm_campaign=techbiota&endpoints=${endpoints}&ehr=${ehr}&mix=${mix}&sec=${sec}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline"
              style={{ color: brand.secondary }}
            >
              Book a call with these answers →
            </a>
          )}
        </div>

        {/* Result */}
        {result && (
          <div className="mt-4 rounded-xl border p-4" style={{ borderColor: "#e6ebf2" }}>
            <div className="text-sm font-semibold" style={{ color: brand.primary }}>
              Suggested package: {result.tier}
            </div>
            <p className="mt-1 text-sm text-slate-700">{result.summary}</p>
            <ul className="mt-2 list-disc list-inside text-sm text-slate-700 space-y-1">
              {result.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium"
                style={{ background: brand.primary, color: "white" }}
              >
                Talk to an Architect
              </a>
              <a
                href={`${calendlyUrl}?utm_source=assessment_button`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium"
                style={{ border: `2px solid ${brand.secondary}`, color: brand.secondary }}
              >
                Book a Call
              </a>
            </div>
          </div>
        )}

        <p className="mt-3 text-[11px] text-slate-500">
          Do not include PHI or patient identifiers in this assessment.
        </p>
      </div>
    </div>
  );
}
  const Card = ({
    icon: Icon,
    title,
    desc,
  }: {
    icon: any;
    title: string;
    desc: string;
  }) => (
    <div
      className="rounded-2xl p-6 shadow-sm border"
      style={{ borderColor: "#e6ebf2", background: "white" }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-xl" style={{ background: brand.light }}>
          <Icon size={22} style={{ color: brand.secondary }} />
        </div>
        <h3 className="text-lg font-semibold" style={{ color: brand.primary }}>
          {title}
        </h3>
      </div>
      <p className="text-sm leading-6 text-slate-600">{desc}</p>
    </div>
  );

  return (
    <div
      className="min-h-screen"
      style={{ background: `linear-gradient(180deg, ${brand.light} 0%, #ffffff 100%)` }}
    >
      {/* === HERO: Healthcare-only messaging === */}
<section className="relative">
  <div className="mx-auto max-w-7xl px-6 pt-10 pb-14 grid md:grid-cols-2 gap-10 items-center">
    {/* Left: Messaging */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center gap-2 mb-3">
        <span
          className="text-[11px] font-semibold px-2 py-1 rounded-full"
          style={{ background: brand.light, color: brand.secondary }}
        >
          Healthcare IT
        </span>
        <span className="text-[11px] uppercase tracking-wide text-slate-600">
          Hospitals • Practices • Biotech
        </span>
      </div>

      <h1
        className="text-4xl md:text-5xl font-bold leading-tight"
        style={{ color: brand.primary }}
      >
        Secure, compliant IT for{" "}
        <span style={{ color: brand.accent }}>healthcare organizations</span>
      </h1>

      <p className="mt-5 text-slate-700 text-lg leading-7">
        We manage, secure, and optimize IT for hospitals, large practices,
        ambulatory sites, and biotech—bringing HIPAA, HITECH, and SOC&nbsp;2
        rigor to every environment so clinicians can focus on patient care.
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          className="px-5 py-3 rounded-xl font-semibold"
          style={{ background: brand.accent, color: "white" }}
        >
          Get Started
        </a>
        <a
          href="/healthcare"
          className="px-5 py-3 rounded-xl font-semibold"
          style={{ border: `2px solid ${brand.secondary}`, color: brand.secondary }}
        >
          See Healthcare Services
        </a>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-wide">
        <span
          className="px-2 py-1 rounded-full"
          style={{ background: brand.light, color: brand.primary }}
        >
          HIPAA / HITECH
        </span>
        <span
          className="px-2 py-1 rounded-full"
          style={{ background: brand.light, color: brand.primary }}
        >
          EHR Resilience
        </span>
        <span
          className="px-2 py-1 rounded-full"
          style={{ background: brand.light, color: brand.primary }}
        >
          24/7 Clinical Helpdesk
        </span>
        <span
          className="px-2 py-1 rounded-full"
          style={{ background: brand.light, color: brand.primary }}
        >
          Zero Trust
        </span>
      </div>
    </motion.div>

    {/* Right: Assessment card stays the same */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.05 }}
    >
      <AssessmentCard
        brand={brand}
        calendlyUrl={
          process.env.NEXT_PUBLIC_CALENDLY_URL ||
          "https://calendly.com/your-org/intro-call"
        }
      />
    </motion.div>
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
{/* === Industries We Empower (Healthcare subsectors) === */}
<section id="industries" className="py-12">
  <div className="mx-auto max-w-7xl px-6">
    <h2 className="text-3xl font-bold mb-6" style={{ color: brand.primary }}>
      Industries We Empower
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {/* Healthcare card */}
      <a
        href="/healthcare"
        className="group rounded-2xl p-6 shadow-sm border bg-white hover:-translate-y-[2px] hover:shadow-md transition"
        style={{ borderColor: "#e6ebf2" }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-xl" style={{ background: brand.light }}>
            <Stethoscope size={22} style={{ color: brand.secondary }} />
          </div>
          <h3 className="text-xl font-semibold" style={{ color: brand.primary }}>
            Healthcare Delivery
          </h3>
        </div>
        <p className="text-slate-700">
          HIPAA-ready, cyber-resilient operations for hospitals, practices, ambulatory sites,
          and care networks—without disrupting patient care.
        </p>
        <ul className="mt-4 text-sm text-slate-700 space-y-2 list-disc list-inside">
          <li>EHR resilience (Epic / Cerner)</li>
          <li>24/7 clinical helpdesk</li>
          <li>IoMT segmentation & endpoint hygiene</li>
        </ul>
        <span
          className="inline-flex items-center gap-2 mt-4 text-sm font-medium group-hover:underline"
          style={{ color: brand.secondary }}
        >
          Explore Healthcare
          <ArrowRight size={16} />
        </span>
      </a>

      {/* Biotech & Research card (repurposed from FinTech) */}
      <a
        href="/healthcare"
        className="group rounded-2xl p-6 shadow-sm border bg-white hover:-translate-y-[2px] hover:shadow-md transition"
        style={{ borderColor: "#e6ebf2" }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-xl" style={{ background: brand.light }}>
            <Activity size={22} style={{ color: brand.secondary }} />
          </div>
          <h3 className="text-xl font-semibold" style={{ color: brand.primary }}>
            Biotech &amp; Research
          </h3>
        </div>
        <p className="text-slate-700">
          Secure, scalable IT for biotech, clinical research, and life-science organizations—
          supporting lab systems, scientific workloads, and HIPAA-aligned data protection.
        </p>
        <ul className="mt-4 text-sm text-slate-700 space-y-2 list-disc list-inside">
          <li>Lab &amp; research application hosting</li>
          <li>Data protection for PHI &amp; research data</li>
          <li>Secure collaboration with hospital partners</li>
        </ul>
        <span
          className="inline-flex items-center gap-2 mt-4 text-sm font-medium group-hover:underline"
          style={{ color: brand.secondary }}
        >
          Explore Biotech &amp; Research
          <ArrowRight size={16} />
        </span>
      </a>
    </div>
  </div>
</section>

      {/* Services buckets */}
      <section id="services" className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold mb-6" style={{ color: brand.primary }}>
            Services for Healthcare & Life Sciences
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <Card
              icon={Server}
              title="Managed IT for Healthcare"
              desc="Proactive monitoring, patching, and co-managed support built for clinical uptime and regulatory needs."
            />
            <Card
              icon={Lock}
              title="HIPAA-Grade Cybersecurity"
              desc="Defense-in-depth, MDR, and compliance reporting tailored to PHI and IoMT risk profiles."
            />
            <Card
              icon={Cloud}
              title="Cloud & Telehealth"
              desc="Azure/AWS healthcare architectures, remote care performance, and secure data exchange (HL7/FHIR)."
            />
          </div>
        </div>
      </section>

      {/* Healthcare focus */}
      <section id="healthcare" className="py-12">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold" style={{ color: brand.primary }}>
              Built exclusively for healthcare
            </h2>
            <p className="mt-4 text-slate-700">
              Hospitals, physician groups, biotech, CROs—we align IT with clinical workflows and
              compliance realities. Our playbooks accelerate security and interoperability without
              disrupting care.
            </p>
            <ul className="mt-5 space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <Stethoscope className="mt-1" size={18} style={{ color: brand.secondary }} /> HIPAA
                readiness, risk assessment, and audit-friendly documentation
              </li>
              <li className="flex items-start gap-2">
                <Activity className="mt-1" size={18} style={{ color: brand.secondary }} /> BCDR for
                EHR workloads and imaging systems
              </li>
              <li className="flex items-start gap-2">
                <Lock className="mt-1" size={18} style={{ color: brand.secondary }} /> IoMT
                segmentation and endpoint hygiene across clinical devices
              </li>
            </ul>
            <a
              href="#contact"
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
              <div className="rounded-xl p-4" style={{ background: brand.light }}>
                <div className="text-3xl font-bold" style={{ color: brand.primary }}>
                  99.95%
                </div>
                <div className="text-xs uppercase tracking-wide text-slate-600">Clinical Uptime</div>
              </div>
              <div className="rounded-xl p-4" style={{ background: brand.light }}>
                <div className="text-3xl font-bold" style={{ color: brand.primary }}>
                  -42%
                </div>
                <div className="text-xs uppercase tracking-wide text-slate-600">Security Incidents</div>
              </div>
              <div className="rounded-xl p-4" style={{ background: brand.light }}>
                <div className="text-3xl font-bold" style={{ color: brand.primary }}>
                  +28%
                </div>
                <div className="text-xs uppercase tracking-wide text-slate-600">IT Ticket SLA</div>
              </div>
              <div className="rounded-xl p-4" style={{ background: brand.light }}>
                <div className="text-3xl font-bold" style={{ color: brand.primary }}>
                  7d → 2d
                </div>
                <div className="text-xs uppercase tracking-wide text-slate-600">Onboarding Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-12" style={{ background: brand.light }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold" style={{ color: brand.primary }}>
              Resources
            </h2>
            <a href="#" className="text-sm font-medium underline" style={{ color: brand.secondary }}>
              See all
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <Card
              icon={Lock}
              title="2025 Healthcare Cyber Threats"
              desc="A concise guide to ransomware, phishing in clinical settings, and PHI protection baselines."
            />
            <Card
              icon={Cloud}
              title="Telehealth Performance Rx"
              desc="Network and cloud patterns that reduce latency and improve virtual visit reliability."
            />
            <Card
              icon={Server}
              title="HIPAA IT Checklist"
              desc="Technical safeguards, audit trails, and retention policies you can deploy this quarter."
            />
          </div>
        </div>
      </section>

      {/* Contact & Scheduling */}
      <section id="contact" className="py-12">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: HubSpot non-PHI lead form */}
          <div>
            <h2 className="text-3xl font-bold mb-2" style={{ color: brand.primary }}>
              Contact TechBiota
            </h2>
            <p className="text-slate-700 mb-6">
              Tell us about your organization. For any information that could be PHI, please call us—do not submit PHI through this site.
            </p>
            <HubSpotLeadForm />
          </div>

          {/* Right: Calendly */}
          <div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: brand.primary }}>
              Book a Call
            </h3>
            <CalendlyInline
              url={
                process.env.NEXT_PUBLIC_CALENDLY_URL ||
                "https://calendly.com/your-calendly/intro-call"
              }
            />
            <p className="mt-3 text-xs text-slate-500">Do not include PHI in scheduling notes.</p>
          </div>
        </div>
      </section>
    </div>
  );
}