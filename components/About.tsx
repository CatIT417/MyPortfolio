"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Boxes,
  Brain,
  CalendarDays,
  Code2,
  GraduationCap,
  Layers,
  MapPin,
  Palette,
  Rocket,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const BADGES = [
  {
    icon: GraduationCap,
    value: "B.Tech CSE (AI/ML)",
    label: "Mahatma Gandhi Institute of Technology (MGIT)",
  },
  { icon: MapPin, value: "Hyderabad, India", label: "Based In" },
  { icon: CalendarDays, value: "Expected 2029", label: "Undergraduate" },
];

const ENJOY = [
  { icon: Brain, label: "AI & Machine Learning" },
  { icon: Code2, label: "Web Development" },
  { icon: Target, label: "Problem Solving" },
  { icon: Palette, label: "Design & Creativity" },
  { icon: Rocket, label: "Exploring Technology" },
  { icon: Boxes, label: "Building Real Projects" },
];

const ABOUT_STATS = [
  { icon: Star, value: "5+", label: "Major Projects" },
  { icon: BookOpen, value: "2+", label: "Years of Learning" },
  { icon: Layers, value: "5+", label: "Technologies" },
  { icon: Users, value: "Always", label: "Curious" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 flex min-h-[100vh] scroll-mt-20 flex-col lg:min-h-[110vh]"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-14 pt-32 sm:px-8 lg:pt-40">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT — label, heading, intro, info row, handwritten quote */}
          <div className="min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-mono text-[13px] tracking-[0.35em] text-white/70"
            >
              {"// 01. ABOUT ME"}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="font-display mt-5 text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white"
            >
              More than
              <br className="hidden sm:inline" /> just a{" "}
              <span className="text-gradient-tomorrow">developer.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
            >
              I&apos;m Aakash, a Computer Science student (AI/ML) who loves turning ideas into
              real-world applications. I enjoy exploring technology, learning new things, and
              building solutions that create impact.
            </motion.p>

            {/* Row of 3 info blocks */}
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {BADGES.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: EASE }}
                  className="glass rounded-2xl px-4 py-3.5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white/85">
                    <b.icon className="h-[18px] w-[18px]" />
                  </span>
                  <p className="mt-3 text-[15px] font-bold leading-tight text-white">{b.value}</p>
                  <p className="mt-1 text-xs leading-snug text-white/50">{b.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.figure
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
              className="mt-9"
            >
              <blockquote className="font-hand text-[30px] leading-tight text-white lg:text-[34px]">
                &ldquo;Turning curiosity into meaningful technology.&rdquo;
              </blockquote>
            </motion.figure>
          </div>

          {/* RIGHT — What I Enjoy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="glass w-full max-w-md rounded-3xl p-5 shadow-[0_24px_70px_rgba(0,0,0,0.45)] lg:ml-auto lg:p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white sm:text-xl">What I Enjoy</h3>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 shadow-[0_0_16px_rgba(139,92,246,0.3)]">
                <Sparkles className="h-4 w-4" />
              </span>
            </div>
            <ul className="mt-4 space-y-2.5">
              {ENJOY.map((e, i) => (
                <motion.li
                  key={e.label}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.08, ease: EASE }}
                  className="group flex items-center gap-3.5 rounded-xl border border-white/[0.07] bg-white/[0.04] px-3.5 py-2.5 transition-all duration-300 hover:border-violet-400/45 hover:bg-violet-500/10 hover:shadow-[0_0_26px_rgba(139,92,246,0.18)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300 shadow-[0_0_14px_rgba(139,92,246,0.3)] transition-all duration-300 group-hover:bg-violet-500/25 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                    <e.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-white/85 sm:text-[15px]">
                    {e.label}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom — horizontal glass statistics bar */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="glass mt-14 rounded-2xl px-5 py-4 shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:px-6"
        >
          <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
            {ABOUT_STATS.map((s) => (
              <div
                key={s.label}
                className="flex min-w-0 items-center gap-3 px-1 sm:px-5 sm:first:pl-0"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white/85">
                  <s.icon className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0">
                  <span className="font-display block text-xl font-bold leading-tight text-white sm:text-2xl">
                    {s.value}
                  </span>
                  <span className="block break-words text-xs text-white/50">{s.label}</span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
