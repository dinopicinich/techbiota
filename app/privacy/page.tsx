export const metadata = { title: "Privacy Policy | TechBiota" };

export default function PrivacyPage() {
  const brand = { primary: "#163a60", light: "#f4f7fb" };
  return (
    <main className="min-h-screen" style={{ background: `linear-gradient(180deg, ${brand.light} 0%, #fff 100%)` }}>
      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: brand.primary }}>Privacy Policy</h1>
        <p className="text-slate-700">
          We collect business contact details to respond to inquiries and deliver services. We don’t request or store PHI via our website.
          Do not submit PHI through forms or scheduling notes. See our HIPAA Notice for more details.
        </p>
      </div>
    </main>
  );
}