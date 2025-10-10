// app/(data)/industries.ts
export type Industry = {
  slug: string;
  name: string;
  tagline: string;
  heroImage?: string;             // /industries/<file>.jpg in /public
  highlights: string[];
  servicesMap: { title: string; desc: string }[];
  badges?: string[];              // e.g., HIPAA, SOC 2, HITRUST
  seo?: { title?: string; description?: string };
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline:
      "Clinical uptime, HIPAA, and IoMT security—without disruption.",
    heroImage: "/industries/healthcare.jpg",
    highlights: [
      "EHR resilience (Epic/Cerner)",
      "24/7 clinical helpdesk",
      "IoMT segmentation",
    ],
    servicesMap: [
      { title: "Managed IT for Healthcare", desc: "Proactive monitoring, patching, uptime built around clinical workflows and regulatory needs." },
      { title: "HIPAA-Grade Cybersecurity", desc: "MDR/SIEM, identity protection, audit-friendly reporting and evidence collection." },
      { title: "Cloud & Telehealth", desc: "Secure data exchange (HL7/FHIR), Azure/AWS healthcare architectures, remote care performance." },
    ],
    badges: ["HIPAA", "SOC 2"],
    seo: { title: "Healthcare IT Services | TechBiota" },
  },
  {
    slug: "biotech",
    name: "Biotech",
    tagline:
      "Secure research platforms, compliant data flows, and fast collaboration.",
    heroImage: "/industries/biotech.jpg",
    highlights: [
      "GxP-ready controls",
      "Secure data sharing",
      "Cloud pipelines",
    ],
    servicesMap: [
      { title: "Cloud Platforms for Research", desc: "Secure cloud environments, protected datasets, burst compute, reproducible pipelines." },
      { title: "Security & Compliance", desc: "MDR/SIEM, least-privilege access, audit trails and SOC 2-ready processes." },
    ],
    badges: ["SOC 2"],
    seo: { title: "Biotech IT Services | TechBiota" },
  },
  // Add more industries here…
];