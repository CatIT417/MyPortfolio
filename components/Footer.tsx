"use client";

import { motion } from "framer-motion";
import { Activity, ArrowRight, ArrowUpRight, Heart, Mail, Sparkle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LINKS } from "./Navbar";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const EASE = [0.22, 1, 0.36, 1] as const;

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Gugilla-Aakash", Icon: GithubIcon, iconClass: "text-white" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gugilla-aakash", Icon: LinkedinIcon, iconClass: "text-[#4ea1f3]" },
];

const OTHERS = [
  { label: "GitHub", href: "https://github.com/Gugilla-Aakash" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gugilla-aakash" },
];

const DIVIDER = "min-w-0 lg:border-l lg:border-white/10 lg:pl-10";

export default function Footer() {
  // On pages other than home (e.g. /privacy), hash links must route back to /#...
  // to keep Quick Links working site-wide. Home behavior is unchanged.
  const pathname = usePathname();
  const onHome = pathname === "/";
  const homeHash = (hash: string) => (onHome ? hash : `/${hash}`);
  const isPrivacy = pathname === "/privacy";

  return (
    <footer className="relative overflow-hidden">
      {/* Full-bleed cinematic background — footer.png */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/footer.webp" alt="" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#05010f]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05010f]/85 via-[#05010f]/25 to-[#05010f]/60" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#05010f] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-8 pt-14 sm:px-8 lg:px-10 lg:pt-16">
        {/* ================= Top block ================= */}
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-5 py-2 font-mono text-[11px] tracking-[0.32em] text-white/70 backdrop-blur-md"
          >
            {"// END OF THE JOURNEY"}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="font-display mt-6 text-[clamp(2.4rem,3.6vw,3.4rem)] font-extrabold leading-[1.1] tracking-tight text-white"
          >
            Thanks for <span className="text-gradient-tomorrow">Visiting!</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-4 max-w-[580px] text-[16.5px] leading-[1.6] text-white/70 sm:text-[17px]"
          >
            Let&apos;s build something amazing together. Stay curious, keep building, and
            I&apos;ll see you around the internet!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.85 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.26, ease: EASE }}
            className="mt-8 flex w-full max-w-[620px] items-center gap-4"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/25" />
            <Sparkle className="h-4 w-4 shrink-0 fill-violet-400 text-violet-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/25" />
          </motion.div>
        </div>

        {/* ================= Four-column grid ================= */}
        <div className="mt-8 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:mt-10 lg:grid-cols-[1.5fr_1fr_1fr_1.15fr] lg:gap-x-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.05, ease: EASE }}
            className="min-w-0"
          >
            <div className="flex items-center gap-3">
              <span className="relative block h-11 w-11 overflow-hidden rounded-xl">
                <Image
                  src="/logo.webp"
                  alt="Aakash logo"
                  width={88}
                  height={88}
                  className="h-full w-full scale-125 object-cover mix-blend-screen"
                />
              </span>
              <span className="font-display text-2xl font-semibold tracking-tight text-white">
                Aakash
              </span>
            </div>
            <p className="mt-3.5 max-w-[290px] text-[15px] leading-relaxed text-white/60">
              Building ideas into reality through code, creativity, and curiosity.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-md transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/12 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                >
                  <s.Icon className={`h-[18px] w-[18px] ${s.iconClass}`} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.12, ease: EASE }}
            className={DIVIDER}
          >
            <h4 className="font-display text-[17px] font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={homeHash(l.href)}
                    className="group flex items-center justify-between gap-6 py-0.5 text-[15px] text-white/65 transition-colors hover:text-white"
                  >
                    <span>{l.label}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-violet-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Other Places */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.19, ease: EASE }}
            className={DIVIDER}
          >
            <h4 className="font-display text-[17px] font-semibold text-white">Other Places</h4>
            <ul className="mt-4 space-y-2.5">
              {OTHERS.map((o) => (
                <li key={o.label}>
                  <a
                    href={o.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-6 py-0.5 text-[15px] text-white/65 transition-colors hover:text-white"
                  >
                    <span>{o.label}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-violet-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Let's Connect */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.26, ease: EASE }}
            className={DIVIDER}
          >
            <h4 className="font-display text-[17px] font-semibold text-white">
              Let&apos;s Connect
            </h4>
            <p className="mt-3 max-w-[280px] text-[15px] leading-relaxed text-white/60">
              Open to collaborations, interesting projects, and exciting opportunities.
            </p>
            <a
              href={homeHash("#contact")}
              className="group mt-5 inline-flex h-12 items-center gap-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-6 text-[15px] font-semibold text-white shadow-[0_0_30px_rgba(109,80,246,0.45)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_40px_rgba(124,58,237,0.65)] active:scale-[0.99]"
            >
              <Mail className="h-4 w-4" />
              Send a Message
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* ================= Bottom bar ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="mt-10 flex flex-col items-center gap-2.5 rounded-xl border border-white/10 bg-[#0a051c]/70 px-5 py-3.5 backdrop-blur-md sm:flex-row sm:justify-between sm:gap-4 lg:mt-14"
        >
          <p className="text-center text-[13.5px] text-white/55 sm:text-left">
            © 2026 Aakash. All rights reserved.
            <span className="mx-1.5 text-white/25">|</span>
            <Link
              href="/privacy"
              aria-current={isPrivacy ? "page" : undefined}
              className={`underline-offset-4 transition-colors hover:underline ${
                isPrivacy
                  ? "text-violet-300 hover:text-violet-200"
                  : "hover:text-white"
              }`}
            >
              Privacy
            </Link>
          </p>
          <div className="hidden items-center gap-2.5 md:flex">
            <Activity className="h-3.5 w-3.5 text-violet-400" />
            <span className="font-mono text-[11.5px] tracking-[0.28em] text-white/60">
              IDEAS <span className="text-white/30">✕</span> CODE{" "}
              <span className="text-white/30">✕</span> IMPACT
            </span>
          </div>
          <p className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-center text-[13.5px] text-white/55">
            Made with <Heart className="h-3.5 w-3.5 fill-[#ff5c8a] text-[#ff5c8a]" /> in India
            <span className="mx-1 text-white/25">|</span>
            Keep Building <ArrowRight className="h-3.5 w-3.5" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
