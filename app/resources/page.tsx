// app/resources/page.tsx
export default function ResourcesPage() {
  const brand = { primary: "#163a60", secondary: "#1d695f", light: "#f4f7fb" };

  return (
    <main className="min-h-screen" style={{ background: `linear-gradient(180deg, ${brand.light} 0%, #fff 100%)` }}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-2" style={{ color: brand.primary }}>Resources</h1>
        <p className="text-slate-700 mb-8">Guides for secure, compliant, high-performing healthcare IT.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "2025 Healthcare Cyber Threats", d: "Ransomware, phishing in clinical settings, and PHI protection baselines." },
            { t: "Telehealth Performance Rx", d: "Cloud/network patterns that reduce latency and improve visit reliability." },
            { t: "HIPAA IT Checklist", d: "Technical safeguards and audit trails you can deploy this quarter." },
          ].map((x) => (
            <article key={x.t} className="rounded-2xl p-6 border bg-white">
              <h2 className="text-lg font-semibold mb-2" style={{ color: brand.primary }}>{x.t}</h2>
              <p className="text-slate-700">{x.d}</p>
              <a href="#" className="mt-3 inline-block underline" style={{ color: brand.secondary }}>
                Read
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}