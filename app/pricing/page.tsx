// app/pricing/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Support Plans | TechBiota",
  description:
    "Three white-glove healthcare IT support plans—Core, Growth, and Professional—designed for regulated care environments.",
};

const brand = {
  primary: "#163a60",
  secondary: "#1d695f",
  accent: "#228e60",
  light: "#f4f7fb",
};

type PlanKey = "core" | "growth" | "pro";

type Plan = {
  key: PlanKey;
  name: string;
  label: string;
  summary: string;
  bestFor: string;
};

const plans: Plan[] = [
  {
    key: "core",
    name: "Core",
    label: "Essentials",
    summary: "Stable day-to-day operations with business-hours support.",
    bestFor: "Smaller practices and clinics getting their IT house in order.",
  },
  {
    key: "growth",
    name: "Growth",
    label: "Proactive Protection",
    summary:
      "Extended coverage, proactive monitoring, and advisory support.",
    bestFor:
      "Growing groups and multi-site practices that need stronger guardrails.",
  },
  {
    key: "pro",
    name: "Professional",
    label: "Compliance",
    summary:
      "All-inclusive support paired with advanced cybersecurity and governance.",
    bestFor:
      "Hospitals, larger groups, and highly regulated environments.",
  },
];

type RowValue = {
  core: string;
  growth: string;
  pro: string;
};

type FeatureRow = {
  label: string;
  note?: string;
  values: RowValue;
};

type Section = {
  title: string;
  subtitle?: string;
  rows: FeatureRow[];
};

const sections: Section[] = [
  {
    title: "White Glove Support",
    subtitle: "How your clinicians and staff get help day-to-day.",
    rows: [
      {
        label: "Primary support hours",
        values: {
          core: "9am–5pm, Mon–Fri",
          growth: "9am–5pm, Mon–Sun",
          pro: "24/7/365",
        },
      },
      {
        label: "Target response time",
        values: {
          core: "Standard",
          growth: "Priority",
          pro: "“90-second” target",
        },
      },
      {
        label: "Remote support",
        values: {
          core: "Included",
          growth: "Included",
          pro: "Included",
        },
      },
      {
        label: "Onsite support",
        values: {
          core: "As needed, billable",
          growth: "VIP rates",
          pro: "Included",
        },
      },
      {
        label: "New workstation setup",
        values: {
          core: "Billable",
          growth: "VIP rates",
          pro: "Included",
        },
      },
      {
        label: "Projects & LOB upgrades",
        values: {
          core: "VIP rates",
          growth: "VIP rates",
          pro: "VIP rates",
        },
      },
      {
        label: "Bespoke support portal",
        values: {
          core: "Included",
          growth: "Included",
          pro: "Included",
        },
      },
    ],
  },
  {
    title: "Expert Management",
    subtitle: "Fractional leadership and governance for your IT program.",
    rows: [
      {
        label: "IT documentation & runbooks",
        values: {
          core: "Included",
          growth: "Included",
          pro: "Included",
        },
      },
      {
        label: "Executive reporting",
        values: {
          core: "Quarterly summary",
          growth: "Monthly light report",
          pro: "Monthly executive report",
        },
      },
      {
        label: "Vendor management",
        values: {
          core: "VIP rates",
          growth: "Limited",
          pro: "Included",
        },
      },
      {
        label: "Technology business review",
        values: {
          core: "Quarterly",
          growth: "Quarterly",
          pro: "Quarterly / as needed",
        },
      },
      {
        label: "Fractional CIO / CTO",
        values: {
          core: "Available, hourly",
          growth: "Available, hourly",
          pro: "Included hours",
        },
      },
      {
        label: "Business continuity planning",
        values: {
          core: "Available, project-based",
          growth: "Available, project-based",
          pro: "Included",
        },
      },
    ],
  },
  {
    title: "Cybersecurity Suite",
    subtitle: "Controls mapped to HIPAA, GLBA, PCI-DSS and insurer minimums.",
    rows: [
      {
        label: "Zero-Trust network design (ZTNA)",
        values: {
          core: "Basic standards",
          growth: "Proactive rollout",
          pro: "Compliance-grade",
        },
      },
      {
        label: "Managed premium network hardware",
        values: {
          core: "Available",
          growth: "Recommended",
          pro: "Included",
        },
      },
      {
        label: "Next-gen AV / anti-malware",
        values: {
          core: "Included",
          growth: "Included",
          pro: "Included",
        },
      },
      {
        label: "EDR / XDR & threat hunting",
        values: {
          core: "Available",
          growth: "Add-on",
          pro: "Included",
        },
      },
      {
        label: "24/7/365 SOC monitoring",
        values: {
          core: "N/A",
          growth: "Optional",
          pro: "Included",
        },
      },
      {
        label: "Dark web monitoring & password management",
        values: {
          core: "Optional",
          growth: "Included",
          pro: "Included",
        },
      },
      {
        label: "Simulated phishing & security awareness training",
        values: {
          core: "Available",
          growth: "Monthly / quarterly",
          pro: "Program-driven",
        },
      },
      {
        label: "Vulnerability management & risk assessment",
        values: {
          core: "Periodic",
          growth: "Annual",
          pro: "Ongoing program",
        },
      },
    ],
  },
  {
    title: "Training & Services",
    subtitle: "Keeping clinicians productive and systems recoverable.",
    rows: [
      {
        label: "End-user training & enablement sessions",
        values: {
          core: "Billable",
          growth: "Group sessions",
          pro: "Program-based",
        },
      },
      {
        label: "M365 licensing & backups",
        values: {
          core: "Included",
          growth: "Included",
          pro: "Included",
        },
      },
      {
        label: "Backup & BDR testing",
        values: {
          core: "Billable",
          growth: "VIP rates",
          pro: "Included cadence",
        },
      },
      {
        label: "Bring-Your-Own-Device support",
        values: {
          core: "Best-effort",
          growth: "Guided",
          pro: "Policy-driven",
        },
      },
    ],
  },
];

function PlanHeaderRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between text-xs text-slate-600">
      <span>{label}</span>
      <span className="ml-2 font-medium text-slate-900">{value}</span>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: `linear-gradient(180deg, ${brand.light} 0%, #ffffff 100%)`,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 space-y-10">
        {/* Hero */}
        <section className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Healthcare-only • Managed IT & Security
          </p>
          <h1
            className="mt-2 text-4xl font-bold leading-tight"
            style={{ color: brand.primary }}
          >
            Healthcare Support Plans —{" "}
            <span style={{ color: brand.accent }}>without one-size-fits-all pricing</span>
          </h1>
          <p className="mt-4 text-slate-700 text-lg leading-7">
            Every practice, group, and hospital runs differently. Instead of
            publishing a flat price that doesn’t quite fit, we structure three
            healthcare-focused plans and tailor scope and fees to your
            environment, risk profile, and growth plans.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Use this page to understand how{" "}
            <span className="font-semibold">Core</span>,{" "}
            <span className="font-semibold">Growth</span>, and{" "}
            <span className="font-semibold">Professional</span> compare. When
            you’re ready, we’ll map the right plan to your environment and
            provide a clear monthly proposal.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="px-5 py-3 rounded-xl font-semibold text-sm"
              style={{ background: brand.accent, color: "white" }}
            >
              Request a Healthcare Quote
            </a>
            <a
              href="#plan-comparison"
              className="px-5 py-3 rounded-xl font-semibold text-sm"
              style={{
                border: `2px solid ${brand.secondary}`,
                color: brand.secondary,
              }}
            >
              View Plan Comparison
            </a>
          </div>
        </section>

        {/* Plan overview cards */}
        <section aria-label="Plan overview" className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className="rounded-2xl bg-white border shadow-sm p-6 flex flex-col"
              style={{ borderColor: "#e6ebf2" }}
            >
              <div className="flex items-baseline justify-between gap-2">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: brand.primary }}
                >
                  {plan.name}
                </h2>
                <span
                  className="text-[11px] font-semibold px-2 py-1 rounded-full uppercase tracking-wide"
                  style={{
                    background: brand.light,
                    color: brand.secondary,
                  }}
                >
                  {plan.label}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-700">{plan.summary}</p>
              <p className="mt-2 text-xs text-slate-500">{plan.bestFor}</p>

              <div className="mt-4 space-y-1">
                {plan.key === "core" && (
                  <>
                    <PlanHeaderRow
                      label="Focus"
                      value="Operational stability & standards"
                    />
                    <PlanHeaderRow
                      label="Ideal for"
                      value="Smaller practices & clinics"
                    />
                  </>
                )}
                {plan.key === "growth" && (
                  <>
                    <PlanHeaderRow
                      label="Focus"
                      value="Proactive protection & visibility"
                    />
                    <PlanHeaderRow
                      label="Ideal for"
                      value="Growing multi-site groups"
                    />
                  </>
                )}
                {plan.key === "pro" && (
                  <>
                    <PlanHeaderRow
                      label="Focus"
                      value="Compliance, governance & resilience"
                    />
                    <PlanHeaderRow
                      label="Ideal for"
                      value="Hospitals & high-risk environments"
                    />
                  </>
                )}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-500">
                Pricing is tailored to your environment.{" "}
                <span className="font-medium text-slate-700">
                  We’ll provide a clear monthly estimate after discovery.
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Feature comparison */}
        <section id="plan-comparison" className="space-y-6">
          <div>
            <h2
              className="text-2xl font-semibold"
              style={{ color: brand.primary }}
            >
              Compare what’s included in each plan
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-3xl">
              The tables below summarise how each plan handles support, expert
              management, cybersecurity, and training. Use them as a guide—during
              our assessment we’ll fine-tune scope and clearly document what’s
              in and out.
            </p>
          </div>

          <div className="space-y-4">
            {sections.map((section) => (
              <details
                key={section.title}
                className="rounded-2xl bg-white border shadow-sm overflow-hidden"
                style={{ borderColor: "#e6ebf2" }}
                open
              >
                <summary className="cursor-pointer list-none px-4 py-4 md:px-6 md:py-5 flex items-center justify-between gap-3">
                  <div>
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: brand.primary }}
                    >
                      {section.title}
                    </h3>
                    {section.subtitle && (
                      <p className="mt-1 text-xs text-slate-600">
                        {section.subtitle}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-slate-500">
                    Click to expand / collapse
                  </span>
                </summary>

                <div className="border-t border-slate-200 bg-slate-50/60">
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-xs md:text-sm">
                      <thead>
                        <tr className="bg-slate-100 text-left">
                          <th className="px-4 md:px-6 py-2 font-semibold text-slate-700">
                            Capability
                          </th>
                          <th className="px-4 md:px-6 py-2 font-semibold text-slate-700">
                            Core
                          </th>
                          <th className="px-4 md:px-6 py-2 font-semibold text-slate-700">
                            Growth
                          </th>
                          <th className="px-4 md:px-6 py-2 font-semibold text-slate-700">
                            Professional
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.rows.map((row, idx) => (
                          <tr
                            key={row.label}
                            className={
                              idx % 2 === 0 ? "bg-white" : "bg-slate-50/80"
                            }
                          >
                            <td className="align-top px-4 md:px-6 py-2 text-slate-800">
                              <div className="font-medium">{row.label}</div>
                              {row.note && (
                                <div className="text-[11px] text-slate-500 mt-0.5">
                                  {row.note}
                                </div>
                              )}
                            </td>
                            <td className="align-top px-4 md:px-6 py-2 text-slate-700">
                              {row.values.core}
                            </td>
                            <td className="align-top px-4 md:px-6 py-2 text-slate-700">
                              {row.values.growth}
                            </td>
                            <td className="align-top px-4 md:px-6 py-2 text-slate-700">
                              {row.values.pro}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-slate-600 max-w-2xl">
              Not sure which plan fits? We’ll start with a brief discovery call,
              review your current stack and risk profile, and then recommend the
              right level of coverage. No pressure, no surprise add-ons.
            </p>
            <a
              href="/contact"
              className="px-5 py-3 rounded-xl font-semibold text-sm text-center"
              style={{ background: brand.primary, color: "white" }}
            >
              Talk through the plans with us
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}