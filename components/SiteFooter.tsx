export default function SiteFooter() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-6 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-600">© {new Date().getFullYear()} TechBiota. All rights reserved.</div>
        <div className="flex gap-6 text-slate-600">
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/terms" className="hover:underline">Terms</a>
          <a href="/hipaa-notice" className="hover:underline">HIPAA Notice</a>
        </div>
      </div>
    </footer>
  );
}