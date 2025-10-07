export default function ContactPage() {
  const brand = { primary: "#163a60", secondary: "#1d695f", light: "#f4f7fb" };
  return (
    <main className="min-h-screen" style={{ background: `linear-gradient(180deg, ${brand.light} 0%, #fff 100%)` }}>
      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-2" style={{ color: brand.primary }}>Contact</h1>
        <p className="text-slate-700 mb-6">
  Tell us about your organization. Please do not include PHI—this website is not a channel for PHI.
</p>

        <div className="space-y-3">
          <a href="/#contact" className="inline-flex px-5 py-3 rounded-xl font-semibold text-white" style={{ background: brand.primary }}>
            Open the contact form
          </a>
          <a
            href={(process.env.NEXT_PUBLIC_CALENDLY_URL as string) || "https://calendly.com/your-org/intro-call"}
            className="inline-flex px-5 py-3 rounded-xl font-semibold"
            style={{ border: `2px solid ${brand.secondary}`, color: brand.secondary }}
            target="_blank"
          >
            Book a Calendly call
          </a>
        </div>
      </div>
    </main>
  );
}