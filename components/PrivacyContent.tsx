"use client";

import { motion, MotionConfig } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Cloud,
  Cookie,
  ExternalLink,
  Fingerprint,
  Gauge,
  Mail,
  Send,
  Target,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "./Footer";

const EASE = [0.22, 1, 0.36, 1] as const;

type PolicyCard = {
  n: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: ReactNode;
};

const CARDS: PolicyCard[] = [
  {
    n: "01",
    icon: Fingerprint,
    title: "What information is collected?",
    body: (
      <p>
        If you get in touch through the contact form, I receive exactly what you type in:
        your <strong className="font-semibold text-white/90">name</strong>,{" "}
        <strong className="font-semibold text-white/90">email address</strong>,{" "}
        <strong className="font-semibold text-white/90">subject</strong>, and{" "}
        <strong className="font-semibold text-white/90">message</strong> — nothing else.
        Simply browsing the site collects nothing from you; there are no sign-ups and no
        hidden fields.
      </p>
    ),
  },
  {
    n: "02",
    icon: Target,
    title: "How the information is used",
    body: (
      <p>
        For one purpose only: reading your message and replying to you. Your details are
        never added to a mailing list, never used for marketing, and never sold or shared
        with anyone.
      </p>
    ),
  },
  {
    n: "03",
    icon: Send,
    title: "Contact form & Resend",
    body: (
      <p>
        When you press send, your message travels to my inbox through{" "}
        <strong className="font-semibold text-white/90">Resend</strong>, an email delivery
        service, with your address set as the reply-to. This site has no database —
        submissions are not stored anywhere on it.
      </p>
    ),
  },
  {
    n: "04",
    icon: Gauge,
    title: "IP address & spam protection",
    body: (
      <p>
        To limit spam, your IP address is checked against a simple rate limit — at most{" "}
        <strong className="font-semibold text-white/90">5 messages per minute</strong>.
        It is held in server memory only, never written to storage, and forgotten when the
        server restarts.
      </p>
    ),
  },
  {
    n: "05",
    icon: Cloud,
    title: "Hosting & Vercel logs",
    body: (
      <p>
        The site is hosted on <strong className="font-semibold text-white/90">Vercel</strong>
        , which processes standard HTTP request logs as part of running and securing any
        website on its network.
      </p>
    ),
  },
  {
    n: "06",
    icon: Cookie,
    title: "Cookies & analytics",
    body: (
      <p>
        None. This site sets no cookies and runs no analytics, trackers, or advertising
        scripts of any kind. What you see is what runs — no third-party pixels are hiding
        in the code.
      </p>
    ),
  },
  {
    n: "07",
    icon: ExternalLink,
    title: "Third-party links",
    body: (
      <p>
        The site links out to{" "}
        <a
          href="https://github.com/Gugilla-Aakash"
          target="_blank"
          rel="noreferrer"
          className="text-violet-300 underline decoration-violet-400/40 underline-offset-4 transition-colors hover:text-violet-200"
        >
          GitHub
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/gugilla-aakash"
          target="_blank"
          rel="noreferrer"
          className="text-violet-300 underline decoration-violet-400/40 underline-offset-4 transition-colors hover:text-violet-200"
        >
          LinkedIn
        </a>
        , Google Maps, and live project demos. Once you leave this site, their own privacy
        policies apply — I do not control what happens there.
      </p>
    ),
  },
  {
    n: "08",
    icon: Clock,
    title: "Data retention",
    body: (
      <p>
        Messages stay in my inbox only while a conversation is active, then they are
        deleted. There is no database and no backup copies. Rate-limit data lives in memory
        and disappears on restart.
      </p>
    ),
  },
];

export default function PrivacyContent() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#05010f]">
        {/* ================= Hero — privacy.png full-bleed ================= */}
        <section className="relative flex min-h-[600px] items-center overflow-hidden sm:min-h-[640px] lg:min-h-[680px]">
          {/* Background image + readability overlays (same treatment as site sections) */}
          <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/privacy.png"
              alt=""
              className="block h-full w-full object-cover object-[70%_center] xl:object-center"
            />
            <div className="absolute inset-0 bg-[#05010f]/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05010f]/92 via-[#05010f]/55 to-[#05010f]/25" />
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#05010f] via-[#05010f]/70 to-transparent" />
            <div className="noise-overlay absolute inset-0" />
          </div>

          {/* Hero copy — left column, image shield stays visible on the right */}
          <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center px-5 py-28 sm:px-8">
            <div className="w-full max-w-[560px]">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                <Link
                  href="/"
                  className="glass group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-[14px] font-medium text-white/80 backdrop-blur-md transition-all duration-300 hover:border-violet-400/45 hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                  Home
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="font-mono mt-11 text-[13px] tracking-[0.35em] text-white/70"
              >
                {"// PRIVACY"}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.16, ease: EASE }}
                className="font-display mt-5 text-[clamp(2.5rem,7vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white [text-shadow:0_2px_30px_rgba(5,1,15,0.6)]"
              >
                Privacy <span className="text-gradient-tomorrow">Policy</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24 }}
                className="font-mono mt-4 text-[11.5px] tracking-[0.28em] text-white/55"
              >
                LAST UPDATED: OCTOBER 6, 2026
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.32 }}
                className="mt-6 text-[16.5px] leading-[1.7] text-white/75 [text-shadow:0_1px_18px_rgba(5,1,15,0.75)]"
              >
                This is a personal developer portfolio — not a product with accounts or
                dashboards. Here is exactly what happens (and what doesn&apos;t) with your
                information, in plain language.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ================= Details — solid background ================= */}
        <section className="relative bg-[#05010f] px-5 pb-16 pt-4 sm:px-8 sm:pb-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="noise-overlay absolute inset-0" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            {/* Divider + label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center gap-5"
            >
              <span className="font-mono shrink-0 text-[12px] tracking-[0.3em] text-white/55">
                {"// THE DETAILS"}
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-white/25 via-white/12 to-transparent" />
            </motion.div>

            {/* Policy cards */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {CARDS.map((c, i) => (
                <motion.article
                  key={c.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: EASE }}
                  className="glass group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/35 hover:bg-white/[0.06] hover:shadow-[0_0_34px_rgba(139,92,246,0.14)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/15 text-violet-300 transition-all duration-300 group-hover:border-violet-400/45 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                      <c.icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="font-mono rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10.5px] tracking-[0.25em] text-white/45">
                      {c.n}
                    </span>
                  </div>
                  <h2 className="font-display mt-4 text-[19px] font-bold leading-snug tracking-tight text-white">
                    {c.title}
                  </h2>
                  <div className="mt-2.5 space-y-3 text-[15px] leading-[1.7] text-white/65">
                    {c.body}
                  </div>
                </motion.article>
              ))}

              {/* Card 09 — rights & contact, full width accent */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: EASE }}
                className="glass group relative rounded-2xl border border-violet-400/25 bg-violet-500/[0.07] p-6 transition-all duration-300 hover:border-violet-300/45 hover:shadow-[0_0_38px_rgba(139,92,246,0.18)] sm:col-span-2 sm:p-7"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/20 text-violet-200 transition-all duration-300 group-hover:shadow-[0_0_22px_rgba(139,92,246,0.4)]">
                      <Mail className="h-[18px] w-[18px]" />
                    </span>
                    <span className="font-mono rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10.5px] tracking-[0.25em] text-white/45 sm:hidden">
                      09
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <h2 className="font-display text-[19px] font-bold leading-snug tracking-tight text-white">
                        Your privacy rights &amp; contact
                      </h2>
                      <span className="font-mono hidden rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10.5px] tracking-[0.25em] text-white/45 sm:inline-block">
                        09
                      </span>
                    </div>
                    <div className="mt-2.5 space-y-3 text-[15px] leading-[1.7] text-white/70">
                      <p>
                        Questions? Want to know exactly what I hold, or ask me to delete
                        your message? Just reach out — I will get back to you.
                      </p>
                      <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center sm:gap-6">
                        <a
                          href="mailto:aakashgugilla559@gmail.com"
                          className="break-all text-[15px] text-violet-300 underline decoration-violet-400/40 underline-offset-4 transition-colors hover:text-violet-200 sm:text-[15.5px]"
                        >
                          aakashgugilla559@gmail.com
                        </a>
                        <Link
                          href="/#contact"
                          className="text-[15px] text-violet-300 underline decoration-violet-400/40 underline-offset-4 transition-colors hover:text-violet-200 sm:text-[15.5px]"
                        >
                          or use the contact form
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>

            {/* Back home CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mt-14 flex justify-center"
            >
              <Link
                href="/"
                className="btn-primary-glow inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-500 px-7 py-3.5 text-[15px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]"
              >
                Back Home
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Site footer — Privacy marked as current page */}
        <Footer />
      </div>
    </MotionConfig>
  );
}
