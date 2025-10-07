import AssessmentCard from "@/components/AssessmentCard";

export const metadata = { title: "Healthcare IT Assessment | TechBiota" };

export default function AssessmentPage() {
  const brand = { primary: "#163a60", secondary: "#1d695f", accent: "#228e60", light: "#f4f7fb" };
  const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-org/intro-call";

  return (
    <main className="min-h-screen" style={{ background: `linear-gradient(180deg, ${brand.light} 0%, #fff 100%)` }}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-6" style={{ color: brand.primary }}>Healthcare IT Assessment</h1>
        <p className="text-slate-700 mb-6 max-w-3xl">
          Quick, non-PHI questionnaire to estimate your support scope. You’ll get a suggested service tier with next steps.
        </p>

        <AssessmentCard brand={brand} calendlyUrl={calendly} />
      </div>
    </main>
  );
}