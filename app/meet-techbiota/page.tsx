import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet TechBiota | TechBiota",
  description:
    "Founders of TechBiota—healthcare-first MSP blending clinical operations, security, and modern cloud practices.",
  openGraph: {
    title: "Meet TechBiota | TechBiota",
    description:
      "Healthcare-first MSP blending clinical ops, security, and cloud. Meet the founders behind TechBiota.",
    url: "https://techbiota.com/meet-techbiota", // update if your canonical URL differs
    siteName: "TechBiota",
    images: [
      {
        url: "/TechBiota-01.jpg", // ideally replace with a team/card collage (1200x630)
        width: 1200,
        height: 630,
        alt: "TechBiota",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet TechBiota | TechBiota",
    description:
      "Healthcare-first MSP blending clinical ops, security, and cloud. Meet the founders behind TechBiota.",
    images: ["/TechBiota-01.jpg"],
  },
};

type Member = {
  name: string;
  role: string;
  photo: string; // path under /public
  bio: string;
  highlights?: string[];
};

export default function MeetTechBiotaPage() {
  // brand is still useful for inline uses; most colors use Tailwind to get dark-mode for free
  const brand = { primary: "#163a60", secondary: "#1d695f", light: "#f4f7fb" };

  // ——— Edit this list to maintain your team ———
  const team: Member[] = [
    {
      name: "Dino Picinich",
      role: "Founder & CEO",
      photo: "/team/dino.jpg",
      bio:
        "Dino brings 25 years of hands-on IT and security leadership. He specializes in business continuity, secure cloud architectures, and building reliable, monitored systems that just work.",
      highlights: ["Epic/Cerner BCDR", "IoMT segmentation", "SOC 2-aligned processes"],
    },
    {
      name: "Olivia Davila",
      role: "Co-Founder & President, Sales & Business Development",
      photo: "/team/olivia.jpg",
      bio:
        "Olivia brings 15 years of experience helping businesses align technology with growth. She leads GTM strategy, partnerships, and a customer experience that’s clear and results-driven.",
      highlights: ["Epic/Cerner BCDR", "IoMT segmentation", "SOC 2-aligned processes"],
    },
  ];
  // ————————————————————————————————————————

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f4f7fb] to-white dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-12 text-slate-900 dark:text-slate-100">
        <header className="mb-8">
          <h1 className="text-4xl font-bold" style={{ color: brand.primary }}>
            Meet TechBiota
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wide">
            Founders | Healthcare IT Innovators
          </p>
          <p className="mt-3 text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
            TechBiota was founded by two industry veterans who believe healthcare IT should empower,
            not overwhelm. Together, we bring decades of experience in secure network architecture,
            hospital systems, and modern cloud practices—helping organizations focus on patient care,
            not technical chaos.
          </p>
        </header>

        <section className="grid gap-8 sm:gap-10 md:grid-cols-2">
          {team.map((m) => (
            <article
              key={m.name}
              className="
                group rounded-2xl bg-white dark:bg-slate-900
                border border-slate-200 dark:border-slate-800
                shadow-sm p-6 flex flex-col
                transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg
              "
            >
              <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden rounded-xl">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  className="object-contain bg-white dark:bg-slate-950 transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={m.name === "Dino Picinich"} // optionally prioritize first image
                />
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold" style={{ color: brand.primary }}>
                  {m.name}
                </h3>
                <div className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  {m.role}
                </div>

                <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                  {m.bio}
                </p>

                {m.highlights && m.highlights.length > 0 && (
                  <ul className="mt-3 text-sm text-slate-700 dark:text-slate-300 list-disc list-inside space-y-1">
                    {m.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}