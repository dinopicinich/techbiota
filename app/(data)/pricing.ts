// app/(data)/pricing.ts

export type LineItemKey = "endpoints" | "servers" | "sites";

export type TierId = "core" | "enhanced" | "enterprise";

export type Tier = {
  id: TierId;
  name: string;
  tagline: string;
  color: string;           // accent for buttons/headers
  baseMonthly: number;     // flat monthly fee
  includes: {
    endpoints: number;     // included qty at $0
    servers: number;
    sites: number;
  };
  rates: {
    endpoints: number;     // $/unit beyond included
    servers: number;
    sites: number;
  };
  features: string[];
};

export const pricingTiers: Tier[] = [
  {
    id: "core",
    name: "Core",
    tagline: "Foundational coverage for smaller clinics",
    color: "#1d695f",
    baseMonthly: 750,                // flat
    includes: { endpoints: 25, servers: 1, sites: 1 },
    rates:    { endpoints: 18, servers: 160, sites: 120 },
    features: [
      "Managed endpoints & patching",
      "Ticketing & remote support (business hours)",
      "Encrypted backups + recovery testing",
      "HIPAA baseline (policies, audit trails)",
    ],
  },
  {
    id: "enhanced",
    name: "Enhanced",
    tagline: "Co-managed support with stronger security",
    color: "#228e60",
    baseMonthly: 1800,
    includes: { endpoints: 50, servers: 2, sites: 2 },
    rates:    { endpoints: 16, servers: 150, sites: 110 },
    features: [
      "Everything in Core",
      "MDR/SIEM + identity protection",
      "EHR workload protection playbooks",
      "Monthly reporting & compliance evidence",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "24/7 operations, advanced security & SLAs",
    color: "#163a60",
    baseMonthly: 4200,
    includes: { endpoints: 120, servers: 4, sites: 3 },
    rates:    { endpoints: 14, servers: 140, sites: 100 },
    features: [
      "Everything in Enhanced",
      "24/7 NOC/SOC with advanced telemetry",
      "IoMT microsegmentation guidance",
      "EHR/Imaging BCDR with RTO/RPO SLAs",
    ],
  },
];

// sensible defaults for the calculator UI
export const defaultQuantities = {
  endpoints: 40,
  servers: 2,
  sites: 1,
} satisfies Record<LineItemKey, number>;