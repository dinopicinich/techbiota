export const metadata = { title: "Terms of Use | TechBiota" };

export default function TermsPage() {
  const brand = { primary: "#163a60", light: "#f4f7fb" };
  return (
    <main className="min-h-screen" style={{ background: `linear-gradient(180deg, ${brand.light} 0%, #fff 100%)` }}>
      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: brand.primary }}>Terms of Use</h1>
        <p className="text-slate-700">
          By using this site you agree not to submit PHI and to use the content for informational purposes only.
          Services are provided under separate agreements.
        </p>
      </div>
    </main>
  );
}