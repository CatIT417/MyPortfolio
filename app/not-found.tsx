import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#05010f] px-5 text-center">
      {/* subtle brand glow, matching the site's section backgrounds */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <div className="relative z-10">
        <p className="font-mono text-[13px] tracking-[0.35em] text-white/70">
          {"// 404"}
        </p>
        <h1 className="font-display mt-6 text-[clamp(2.75rem,8vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-white">
          Page <span className="text-gradient-tomorrow">Not Found</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-white/70">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-primary-glow inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-500 px-7 py-3.5 text-[15px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]"
          >
            Back Home
          </Link>
          <Link
            href="/#projects"
            className="glass inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-7 py-3.5 text-[15px] font-semibold text-white/85 backdrop-blur-md transition hover:border-violet-400/45 hover:text-white"
          >
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
