"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  RadioTower,
  Send,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const EASE = [0.22, 1, 0.36, 1] as const;

type Card = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href: string;
  external: boolean;
  iconClass: string;
  glowClass: string;
};

const CARDS: Card[] = [
  {
    icon: Mail,
    title: "Email",
    value: "aakashgugilla559@gmail.com",
    href: "mailto:aakashgugilla559@gmail.com",
    external: false,
    iconClass: "bg-gradient-to-br from-violet-500 to-indigo-600 text-white",
    glowClass: "shadow-[0_0_30px_rgba(124,58,237,0.22)]",
  },
  {
    icon: GithubIcon,
    title: "GitHub",
    value: "github.com/Gugilla-Aakash",
    href: "https://github.com/Gugilla-Aakash",
    external: true,
    iconClass: "bg-white/10 text-white",
    glowClass: "shadow-[0_0_30px_rgba(59,130,246,0.2)]",
  },
  {
    icon: LinkedinIcon,
    title: "LinkedIn",
    value: "linkedin.com/in/gugilla-aakash",
    href: "https://www.linkedin.com/in/gugilla-aakash",
    external: true,
    iconClass: "bg-[#0A66C2] text-white",
    glowClass: "shadow-[0_0_30px_rgba(37,99,235,0.22)]",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Hyderabad, India",
    href: "https://www.google.com/maps/place/Hyderabad",
    external: true,
    iconClass: "bg-gradient-to-br from-violet-500 to-indigo-600 text-white",
    glowClass: "shadow-[0_0_30px_rgba(124,58,237,0.22)]",
  },
];

type Pill = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  iconClass: string;
};

const PILLS: Pill[] = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/Gugilla-Aakash", iconClass: "text-white" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/gugilla-aakash", iconClass: "text-[#4ea1f3]" },
];

const SUBJECT_OPTIONS = [
  "Project Collaboration",
  "Job Opportunity",
  "Freelance Work",
  "General Question",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const inFlight = useRef(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inFlight.current) return;
    inFlight.current = true;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      inFlight.current = false;
    }
  };

  const inputClass =
    "mt-2 h-10 w-full rounded-lg border border-white/10 bg-black/40 px-3 text-[14px] text-white placeholder:text-white/35 outline-none transition focus:border-violet-400/60 focus:bg-black/55 focus:ring-1 focus:ring-violet-400/30 lg:px-3.5";
  const labelClass = "block text-[13.5px] font-medium text-white/75";

  return (
    <section
      id="contact"
      className="relative z-10 flex min-h-screen scroll-mt-20 flex-col overflow-hidden"
    >
      {/* Full-bleed cinematic background — contact.mp4 with contact.png fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          aria-hidden="true"
          className="block h-full w-full object-cover max-[736px]:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/contact.webp"
        >
          <source src="/contact.mp4" type="video/mp4" />
        </video>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/contact.webp"
          alt=""
          className="hidden h-full w-full object-cover max-[736px]:block"
        />
        {/* Subtle readability overlays — scene stays visible */}
        <div className="absolute inset-0 bg-[#05010f]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05010f]/45 via-[#05010f]/5 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#05010f] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05010f] to-transparent" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
          <div className="flex flex-col gap-y-12 md:flex-row md:items-start md:justify-between md:gap-x-10">
            {/* ================= LEFT — intro, cards, quote ================= */}
            <div className="min-w-0 md:w-[47%] lg:w-[38%] lg:max-w-[560px]">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-mono text-[13px] tracking-[0.35em] text-white/70"
              >
                {"// 04. CONTACT"}
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                className="font-display mt-6 text-[clamp(2rem,3.5vw,3.1rem)] font-extrabold leading-[1.08] tracking-tight text-white"
              >
                Let&apos;s Build
                <br />
                Something
                <br />
                Amazing <span className="text-gradient-tomorrow">Together.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="mt-4 max-w-[475px] text-[16.5px] leading-[1.62] text-white/75 sm:text-[17px]"
              >
                Have a project idea, collaboration opportunity, or just want to connect? I&apos;d
                love to hear from you. Whether it&apos;s about AI, web development, or something
                exciting — let&apos;s turn ideas into reality.
              </motion.p>

              {/* 2 × 2 contact cards */}
              <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
                {CARDS.map((c, i) => (
                  <motion.a
                    key={c.title}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noreferrer" : undefined}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.55, delay: 0.25 + i * 0.1, ease: EASE }}
                    className={`group relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-3.5 backdrop-blur-md transition-all duration-300 hover:border-violet-400/45 hover:bg-violet-500/10 sm:gap-3.5 sm:p-4 ${c.glowClass} hover:shadow-[0_0_38px_rgba(139,92,246,0.3)]`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:h-10 sm:w-10 ${c.iconClass}`}
                    >
                      <c.icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block pr-6 text-[14px] font-bold text-white sm:text-[15px]">
                        {c.title}
                      </span>
                      <span className="mt-0.5 block break-words text-[12px] text-white/55 sm:text-[13px]">
                        {c.value}
                      </span>
                    </span>
                    <ArrowUpRight className="absolute right-3 top-3 h-4 w-4 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-200" />
                  </motion.a>
                ))}
              </div>

              {/* Handwritten quote — part of the composition */}
              <motion.figure
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                className="mt-8 lg:mt-10"
              >
                <blockquote className="font-hand text-[28px] leading-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)] sm:text-[32px] lg:text-[34px]">
                  &ldquo;Let&apos;s turn ideas into reality.&rdquo;
                </blockquote>
                <footer className="mt-2 font-mono text-[11px] tracking-[0.3em] text-white/55">
                  — AAKASH
                </footer>
              </motion.figure>
            </div>

            {/* ================= RIGHT — glass form panel ================= */}
            <motion.div
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="min-w-0 md:w-[49%] lg:w-[49%] lg:max-w-[725px] lg:pt-9"
            >
              <form
                onSubmit={handleSubmit}
                className="mx-auto w-full max-w-[535px] rounded-3xl border border-violet-300/15 bg-[#0a051c]/75 p-6 shadow-[0_0_70px_-15px_rgba(139,92,246,0.4)] backdrop-blur-xl sm:p-8"
              >
                {/* Panel header */}
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300 shadow-[0_0_16px_rgba(139,92,246,0.4)]">
                    <RadioTower className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-mono text-[11.5px] tracking-[0.3em] text-white/70">
                    SEND A MESSAGE
                  </span>
                </div>

                <h3 className="font-display mt-3 text-[clamp(1.85rem,2.6vw,2.6rem)] font-extrabold leading-tight tracking-tight text-white">
                  I&apos;m all <span className="text-gradient-tomorrow">ears!</span>
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-white/60">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </p>

                {/* Form fields */}
                <div className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelClass}>
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className={labelClass}>
                      Subject
                    </label>
                    <div className="relative">
                      <select
                        id="contact-subject"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className={`${inputClass} appearance-none pr-10 ${
                          subject ? "text-white" : "text-white/60"
                        }`}
                      >
                        <option value="" disabled>
                          Project Collaboration
                        </option>
                        {SUBJECT_OPTIONS.map((s) => (
                          <option key={s} value={s} className="bg-[#0a051c] text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      minLength={10}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your idea, project, or just say hi!"
                      className={`${inputClass} h-[92px] resize-none py-2.5`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-5 flex h-11 w-full items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-[15px] font-semibold text-white shadow-[0_0_30px_rgba(109,80,246,0.45)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_40px_rgba(124,58,237,0.65)] active:scale-[0.99] disabled:pointer-events-none"
                >
                  <Send className="h-4 w-4" />
                  {status === "submitting" ? "Sending..." : "Send Message"}
                  <ArrowRight className="h-4 w-4" />
                </button>

                {status === "success" && (
                  <p role="status" className="mt-3 text-center text-[13px] text-emerald-300/90">
                    Message sent successfully.
                  </p>
                )}
                {status === "error" && (
                  <p role="status" className="mt-3 text-center text-[13px] text-red-300/90">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>

              {/* Social pills below the panel */}
              <div className="mt-8 w-full">
                <p className="font-mono text-[11.5px] tracking-[0.3em] text-white/60">
                  OTHER WAYS TO CONNECT
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {PILLS.map((p) => (
                    <a
                      key={p.label}
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex h-[42px] items-center gap-2.5 rounded-full border border-white/10 bg-[#0b0716]/65 px-5 text-[14px] font-medium text-white/85 backdrop-blur-md transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/12 hover:text-white hover:shadow-[0_0_24px_rgba(139,92,246,0.25)]"
                    >
                      <p.icon className={`h-4 w-4 ${p.iconClass}`} />
                      <span>{p.label}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-white/45 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
