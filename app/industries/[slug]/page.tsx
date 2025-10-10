// app/industries/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { industries } from "../../(data)/industries";

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const ind = industries.find((i) => i.slug === params.slug);
  return {
    title: ind?.seo?.title ?? `${ind?.name} | TechBiota`,
    description: ind?.seo?.description,
    openGraph: { title: ind?.name, type: "article" },
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const brand = { primary: "#163a60", secondary: "#1d695f", light: "#f4f7fb" };
  const ind = industries.find((i) => i.slug === params.slug);
  if (!ind) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold" style={{ color: brand.primary }}>
            {ind.name}
          </h1>
          <p className="mt-3 text-slate-700">{ind.tagline}</p>
          <ul className="mt-5 space-y-2 text-slate-700">
            {ind.highlights.map((h) => (
              <li key={h}>• {h}</li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            {ind.badges?.map((b) => (
              <span
                key={b}
                className="rounded-full px-3 py-1 text-sm"
                style={{ background: brand.light, color: brand.secondary }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {ind.heroImage && (
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src={ind.heroImage}
              alt={ind.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 grid md:grid-cols-2 gap-6">
        {ind.servicesMap.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border p-6 shadow-sm"
            style={{ borderColor: "#e6ebf2" }}
          >
            <h3 className="text-lg font-semibold" style={{ color: brand.primary }}>
              {s.title}
            </h3>
            <p className="mt-2 text-slate-700">{s.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}