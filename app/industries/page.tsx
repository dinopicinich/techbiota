// app/industries/page.tsx
import Link from "next/link";
import Image from "next/image";
import { industries } from "../(data)/industries";

export const metadata = { title: "Industries | TechBiota" };

export default function IndustriesIndex() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f4f7fb] to-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold text-[#163a60]">Industries</h1>
        <p className="mt-3 text-slate-700 max-w-3xl">
          We lead with healthcare—and bring the same rigor to adjacent verticals.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {industries.map((i) => (
            <Link
              key={i.slug}
              href={`/industries/${i.slug}`}
              className="rounded-2xl border shadow-sm overflow-hidden group"
              style={{ borderColor: "#e6ebf2" }}
            >
              <div className="relative h-40">
                {i.heroImage && (
                  <Image
                    src={i.heroImage}
                    alt={i.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#163a60]">{i.name}</h3>
                <p className="mt-2 text-slate-700 line-clamp-2">{i.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}