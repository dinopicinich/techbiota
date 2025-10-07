"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Brand = { primary: string; secondary: string; accent: string };

export default function AssessmentCard({
  brand,
  calendlyUrl,
}: {
  brand: Brand;
  calendlyUrl: string;
}) {
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
      Core: "Smaller footprint or early-stage program. Focus on core endpoint management, backups, and HIPAA minimums.",
      Enhanced: "Growing environment and compliance surface. Add MDR/SIEM, identity hardening, and EHR-specific BCDR.",
      Enterprise: "Complex, multi-workload environment. Full-stack ops with 24/7 NOC/SOC, IoMT segmentation, and advanced BCDR.",
    };

    const bullets: Record<typeof tier, string[]> = {
      Core: ["Managed endpoints & patching", "Encrypted backups + recovery testing", "HIPAA baseline (policies, audit trail)"],
      Enhanced: ["MDR + SIEM & identity protection", "EHR workload protection & runbooks", "Network segmentation basics"],
      Enterprise: ["24/7 NOC/SOC & advanced telemetry", "IoMT microsegmentation & CMMS tie-ins", "BCDR for EHR/imaging with RTO/RPO SLAs"],
    };

    setResult({ tier, summary: summaries[tier], bullets: bullets[tier] });
  }

  const disabled = !endpoints || !ehr || !mix || !sec;

  return (
    <div className="rounded-3xl p-6 shadow-lg" style={{ background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.secondary} 100%)` }}>
      <div className="bg-white/95 rounded-2xl p-5">
        <h3 className="text-base font-semibold mb-2" style={{ color: brand.primary }}>Healthcare IT Assessment</h3>
        <p className="text-sm text-slate-700">Answer a few non-PHI questions to estimate your support scope and roadmap.</p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <select className="rounded-xl p-3 border bg-white" value={endpoints} onChange={(e) => setEndpoints(e.target.value as any)}>
            <option value=""># of endpoints</option><option value="under50">Under 50</option><option value="50to250">50–250</option><option value="250plus">250+</option>
          </select>
          <select className="rounded-xl p-3 border bg-white" value={ehr} onChange={(e) => setEhr(e.target.value as any)}>
            <option value="">EHR platform</option><option value="epic">Epic</option><option value="cerner">Cerner</option><option value="athena">Athena/Other Cloud EHR</option><option value="other">Other / Mixed</option><option value="none">No EHR</option>
          </select>
          <select className="rounded-xl p-3 border bg-white" value={mix} onChange={(e) => setMix(e.target.value as any)}>
            <option value="">Cloud/on-prem mix</option><option value="onprem">Mostly on-prem</option><option value="hybrid">Hybrid</option><option value="cloud">Mostly cloud</option>
          </select>
          <select className="rounded-xl p-3 border bg-white" value={sec} onChange={(e) => setSec(e.target.value as any)}>
            <option value="">Security posture</option><option value="basic">Basic</option><option value="moderate">Moderate</option><option value="mature">Mature</option>
          </select>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button onClick={score} disabled={disabled} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed" style={{ background: brand.accent, color: "white" }}>
            Start Assessment <ArrowRight size={16} />
          </button>
          {result && (
            <a href={`${calendlyUrl}?utm_source=assessment&utm_medium=web&endpoints=${endpoints}&ehr=${ehr}&mix=${mix}&sec=${sec}`} target="_blank" rel="noreferrer" className="text-sm underline" style={{ color: brand.secondary }}>
              Book a call with these answers →
            </a>
          )}
        </div>

        {result && (
          <div className="mt-4 rounded-xl border p-4" style={{ borderColor: "#e6ebf2" }}>
            <div className="text-sm font-semibold" style={{ color: brand.primary }}>Suggested package: {result.tier}</div>
            <p className="mt-1 text-sm text-slate-700">{result.summary}</p>
            <ul className="mt-2 list-disc list-inside text-sm text-slate-700 space-y-1">{result.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <a href="/contact" className="inline-flex px-4 py-2 rounded-xl font-medium text-white" style={{ background: brand.primary }}>Talk to an Architect</a>
              <a href={`${calendlyUrl}?utm_source=assessment_button`} target="_blank" rel="noreferrer" className="inline-flex px-4 py-2 rounded-xl font-medium" style={{ border: `2px solid ${brand.secondary}`, color: brand.secondary }}>
                Book a Call
              </a>
            </div>
          </div>
        )}

        <p className="mt-3 text-[11px] text-slate-500">Do not include PHI or patient identifiers in this assessment.</p>
      </div>
    </div>
  );
}