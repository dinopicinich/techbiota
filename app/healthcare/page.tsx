export default function HealthcarePage() {
  const brand = { primary: "#163a60", secondary: "#1d695f", light: "#f4f7fb" };
  return (
    <main className="min-h-screen" style={{ background: `linear-gradient(180deg, ${brand.light} 0%, #fff 100%)` }}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-2" style={{ color: brand.primary }}>Healthcare Focus</h1>
        <p className="text-slate-700 mb-8">
          Purpose-built for hospitals, practices, biotech, and research orgs. We align IT with clinical workflows and compliance realities.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <section className="rounded-2xl p-6 border bg-white">
            <h2 className="text-xl font-semibold mb-2" style={{ color: brand.primary }}>Clinical Operations</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>EHR uptime (Epic/Cerner/Athena) & runbooks</li>
              <li>BCDR for imaging and EHR workloads</li>
              <li>IoMT device hygiene & segmentation</li>
            </ul>
          </section>
          <section className="rounded-2xl p-6 border bg-white">
            <h2 className="text-xl font-semibold mb-2" style={{ color: brand.primary }}>Compliance</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>HIPAA readiness & risk assessments</li>
              <li>Audit-friendly logging & reports</li>
              <li>Policies, training, incident response</li>
            </ul>
          </section>
        </div>

        <div className="mt-10">
          <a href="/contact" className="inline-flex px-5 py-3 rounded-xl font-semibold text-white" style={{ background: brand.primary }}>
            Talk to a Healthcare IT Architect
          </a>
        </div>
      </div>
    </main>
  );
}