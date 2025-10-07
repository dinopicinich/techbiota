import Image from "next/image";

export const metadata = { title: "Meet TechBiota | TechBiota" };

type Member = {
  name: string;
  role: string;
  photo: string; // path under /public
  bio: string;
  highlights?: string[];
};

export default function MeetTechBiotaPage() {
  const brand = { primary: "#163a60", secondary: "#1d695f", light: "#f4f7fb" };

  // ── Edit this list with your real team ───────────────────────────────────────
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
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <main
      className="min-h-screen"
      style={{ background: `linear-gradient(180deg, ${brand.light} 0%, #fff 100%)` }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12">
        <header className="mb-8">
        <h1 className="text-4xl font-bold" style={{ color: brand.primary }}>
          Meet TechBiota
        </h1>

        <p className="mt-2 text-slate-500 text-sm uppercase tracking-wide">
           Founders | Healthcare IT Innovators
        </p>

        <p className="mt-3 text-slate-700 max-w-3xl">
            TechBiota was founded by two industry veterans who believe healthcare IT should empower,
            not overwhelm. Together, we bring decades of experience in secure network architecture,
            hospital systems, and modern cloud practices—helping organizations focus on patient care,
            not technical chaos.
        </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {team.map((m) => (
            <article
              key={m.name}
              className="rounded-2xl bg-white border shadow-sm p-6 flex flex-col"
              style={{ borderColor: "#e6ebf2" }}
            >
              <div className="relative h-64 md:h-72 w-full overflow-hidden rounded-xl">
                <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="object-contain bg-white"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold" style={{ color: brand.primary }}>
                  {m.name}
                </h3>
                <div className="text-sm font-medium" style={{ color: brand.secondary }}>
                  {m.role}
                </div>
                <p className="mt-3 text-slate-700">{m.bio}</p>

                {m.highlights && m.highlights.length > 0 && (
                  <ul className="mt-3 text-sm text-slate-700 list-disc list-inside space-y-1">
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