export default function AboutPage() {
  const brand = { primary: "#163a60", secondary: "#1d695f", light: "#f4f7fb" };
  return (
    <main className="min-h-screen" style={{ background: `linear-gradient(180deg, ${brand.light} 0%, #fff 100%)` }}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-2" style={{ color: brand.primary }}>About TechBiota</h1>
        <p className="text-slate-700 max-w-3xl">
          We’re an MSP focused solely on healthcare & life sciences. Our mission is to protect patient care and data
          through reliable operations, strong security, and compliance-ready processes.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="rounded-2xl p-6 border bg-white">
            <div className="text-3xl font-bold" style={{ color: brand.primary }}>99.95%</div>
            <div className="text-slate-600">Clinical uptime targeted</div>
          </div>
          <div className="rounded-2xl p-6 border bg-white">
            <div className="text-3xl font-bold" style={{ color: brand.primary }}>24/7</div>
            <div className="text-slate-600">Helpdesk & on-call</div>
          </div>
          <div className="rounded-2xl p-6 border bg-white">
            <div className="text-3xl font-bold" style={{ color: brand.primary }}>HIPAA</div>
            <div className="text-slate-600">Audit-ready playbooks</div>
          </div>
        </div>
      </div>
    </main>
  );
}