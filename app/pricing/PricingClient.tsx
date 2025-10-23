"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { pricingTiers, defaultQuantities, type Tier, type LineItemKey } from "../(data)/pricing";

export default function PricingClient() {
  const brand = { primary: "#163a60", secondary: "#1d695f", light: "#f4f7fb", accent: "#228e60" };

  const [active, setActive] = useState<Tier["id"]>("enhanced");
  const [qty, setQty] = useState<Record<LineItemKey, number>>(defaultQuantities);
  const [annual, setAnnual] = useState(false);

  const tier = useMemo(() => pricingTiers.find(t => t.id === active)!, [active]);

  const rows: { key: LineItemKey; label: string; help: string }[] = [
    { key: "endpoints", label: "Clinical endpoints / computers", help: "Windows/macOS endpoints covered" },
    { key: "servers",   label: "Servers (on-prem or cloud)",     help: "Windows/Linux workloads" },
    { key: "sites",     label: "Sites / locations",               help: "Physical clinics/offices" },
  ];

  function calcLine(key: LineItemKey, q: number) {
    const included = tier.includes[key];
    const overage = Math.max(0, q - included);
    const cost = overage * tier.rates[key];
    return { included, overage, cost };
  }

  const breakdown = rows.map(r => ({ ...r, ...calcLine(r.key, qty[r.key]) }));
  const monthly = tier.baseMonthly + breakdown.reduce((sum, r) => sum + r.cost, 0);
  const total = annual ? Math.round(monthly * 12 * 0.9) : Math.round(monthly); // 10% annual prepay incentive

  return (
    <main className="min-h-screen" style={{ background: `linear-gradient(180deg, ${brand.light} 0%, #fff 100%)` }}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold" style={{ color: brand.primary }}>Pricing</h1>
          <p className="mt-3 text-slate-700 max-w-3xl">
            Choose a package that matches your clinical footprint. Adjust quantities to estimate your monthly managed IT cost.
          </p>
        </header>

        {/* Tier selector */}
        <div className="flex flex-wrap gap-3 mb-6">
          {pricingTiers.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-4 py-2 rounded-xl font-medium border ${active === t.id ? "text-white" : ""}`}
              style={{
                background: active === t.id ? t.color : "white",
                borderColor: active === t.id ? t.color : "#e6ebf2",
                color: active === t.id ? "white" : brand.primary,
              }}
            >
              {t.name}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2 text-sm">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={annual} onChange={(e) => setAnnual(e.target.checked)} />
              <span>Annual prepay (10% off)</span>
            </label>
          </div>
        </div>

        {/* Tier card + calculator */}
        <section className="grid lg:grid-cols-3 gap-6">
          {/* Package overview */}
          <div className="rounded-2xl bg-white border p-6 shadow-sm" style={{ borderColor: "#e6ebf2" }}>
            <h2 className="text-2xl font-bold" style={{ color: tier.color }}>{tier.name}</h2>
            <p className="text-slate-700 mt-1">{tier.tagline}</p>
            <div className="mt-4 text-sm text-slate-700">
              <div className="font-semibold mb-2">What’s included</div>
              <ul className="space-y-2 list-disc list-inside">
                {tier.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
            <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm">
              <div className="font-semibold">Base monthly fee</div>
              <div>${tier.baseMonthly.toLocaleString()}</div>
              <div className="text-slate-600 mt-1">
                Includes {tier.includes.endpoints} endpoints, {tier.includes.servers} server{tier.includes.servers!==1?"s":""}, {tier.includes.sites} site{tier.includes.sites!==1?"s":""}
              </div>
            </div>
            <a
              href={`/contact`}
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium"
              style={{ background: brand.primary, color: "white" }}
            >
              Talk to Sales <ArrowRight size={16} />
            </a>
          </div>

          {/* Calculator */}
          <div className="rounded-2xl bg-white border p-6 shadow-sm lg:col-span-2" style={{ borderColor: "#e6ebf2" }}>
            <h3 className="text-lg font-semibold" style={{ color: brand.primary }}>Interactive Estimate</h3>
            <p className="text-sm text-slate-600 mb-4">Adjust your quantities. This is a non-binding estimate (no PHI).</p>

            <div className="grid md:grid-cols-3 gap-4">
              {rows.map(r => (
                <div key={r.key} className="rounded-xl border p-4 bg-white" style={{ borderColor: "#e6ebf2" }}>
                  <div className="text-sm font-medium" style={{ color: brand.primary }}>{r.label}</div>
                  <input
                    type="number"
                    min={0}
                    value={qty[r.key]}
                    onChange={(e) => setQty({ ...qty, [r.key]: Math.max(0, Number(e.target.value)) })}
                    className="mt-2 w-full rounded-lg border px-3 py-2"
                  />
                  <div className="text-xs text-slate-600 mt-2">{r.help}</div>
                </div>
              ))}
            </div>

            {/* Breakdown */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-600">
                    <th className="py-2">Line</th>
                    <th className="py-2">Qty</th>
                    <th className="py-2">Included</th>
                    <th className="py-2">Overage</th>
                    <th className="py-2">Rate</th>
                    <th className="py-2 text-right">Line Total</th>
                  </tr>
                </thead>
                <tbody>
                  {breakdown.map(r => (
                    <tr key={r.key} className="border-t" style={{ borderColor: "#e6ebf2" }}>
                      <td className="py-2">{r.label}</td>
                      <td className="py-2">{qty[r.key]}</td>
                      <td className="py-2">{r.included}</td>
                      <td className="py-2">{r.overage}</td>
                      <td className="py-2">${tier.rates[r.key]}/unit</td>
                      <td className="py-2 text-right">${r.cost.toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr className="border-t" style={{ borderColor: "#e6ebf2" }}>
                    <td className="py-2 font-medium">Base monthly fee</td>
                    <td colSpan={4}></td>
                    <td className="py-2 text-right">${tier.baseMonthly.toLocaleString()}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border-t" style={{ borderColor: "#e6ebf2" }}>
                    <td className="py-3 font-semibold">Estimated {annual ? "Annual (10% off)" : "Monthly"} Total</td>
                    <td colSpan={4}></td>
                    <td className="py-3 text-right text-lg font-bold" style={{ color: tier.color }}>
                      ${total.toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="mt-4 text-xs text-slate-500">
              Final pricing may vary based on assessment, security posture, and integrations. Do not include PHI in any messages or scheduling notes.
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`/contact`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium"
                style={{ background: brand.accent, color: "white" }}
              >
                Request a Formal Quote
              </a>
              <a
                href={`${process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-calendly/intro-call"}?utm_source=pricing&utm_tier=${tier.id}&endpoints=${qty.endpoints}&servers=${qty.servers}&sites=${qty.sites}&annual=${annual}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium"
                style={{ border: `2px solid ${brand.secondary}`, color: brand.secondary }}
              >
                Book a Call
              </a>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold mb-4" style={{ color: brand.primary }}>
            Package Comparison
          </h3>
          <div className="overflow-x-auto bg-white rounded-2xl border" style={{ borderColor: "#e6ebf2" }}>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="p-4">Feature</th>
                  {pricingTiers.map(t => (
                    <th key={t.id} className="p-4" style={{ color: t.color }}>{t.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  "Managed endpoints & patching",
                  "Encrypted backups + recovery testing",
                  "HIPAA baseline (policies, audit trails)",
                  "MDR/SIEM + identity protection",
                  "EHR workload protection playbooks",
                  "24/7 NOC/SOC with advanced telemetry",
                ].map(feat => (
                  <tr key={feat} className="border-t" style={{ borderColor: "#e6ebf2" }}>
                    <td className="p-4">{feat}</td>
                    {pricingTiers.map(t => (
                      <td key={t.id} className="p-4">
                        {t.features.includes(feat) ? "✓" : "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}