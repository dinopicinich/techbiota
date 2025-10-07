export const metadata = { title: "HIPAA Notice | TechBiota" };

export default function HipaaNoticePage() {
  const brand = { primary: "#163a60", light: "#f4f7fb" };
  return (
    <main className="min-h-screen" style={{ background: `linear-gradient(180deg, ${brand.light} 0%, #fff 100%)` }}>
      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: brand.primary }}>HIPAA Notice</h1>
        <p className="text-slate-700">
          TechBiota provides HIPAA-aligned IT services. This website and our standard email are not for
          transmitting Protected Health Information (PHI). Please do not submit PHI via any web form,
          file upload, or scheduling notes.
        </p>
        <p className="text-slate-700 mt-4">
          If your message might include PHI, contact us by phone to discuss appropriate channels. We do
          not accept patient PHI through this site.
        </p>
      </div>
    </main>
  );
}