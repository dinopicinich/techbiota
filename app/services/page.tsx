export default function ServicesPage() {
  const brand = { primary: "#163a60", secondary: "#1d695f", light: "#f4f7fb" };
  return (
    <main className="min-h-screen" style={{ background: `linear-gradient(180deg, ${brand.light} 0%, #fff 100%)` }}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-2" style={{ color: brand.primary }}>Services</h1>
        <p className="text-slate-700 mb-8">Managed IT and security built for healthcare & life sciences.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <section className="rounded-2xl p-6 border bg-white">
            <h2 className="text-xl font-semibold mb-2" style={{ color: brand.primary }}>Managed IT for Healthcare</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Clinical endpoint management & patching</li>
              <li>Service desk with clinical workflows</li>
              <li>Backups + recovery testing</li>
            </ul>
          </section>

          <section className="rounded-2xl p-6 border bg-white">
            <h2 className="text-xl font-semibold mb-2" style={{ color: brand.primary }}>HIPAA-Grade Cybersecurity</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>MDR/SIEM & identity protection</li>
              <li>Audit-ready logging & reporting</li>
              <li>Security awareness & phishing drills</li>
            </ul>
          </section>

          <section className="rounded-2xl p-6 border bg-white">
            <h2 className="text-xl font-semibold mb-2" style={{ color: brand.primary }}>Cloud & Telehealth</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Azure/AWS healthcare architectures</li>
              <li>HL7/FHIR secure exchange</li>
              <li>Telehealth performance & reliability</li>
            </ul>
          </section>
        </div>

        <div className="mt-10">
          <a href="/contact" className="inline-flex px-5 py-3 rounded-xl font-semibold text-white" style={{ background: brand.primary }}>
            Get a consultation
          </a>
        </div>
      </div>
    </main>
  );
}