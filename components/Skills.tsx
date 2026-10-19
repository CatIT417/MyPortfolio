"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BarChart3, Code2, Heart, Quote, Zap } from "lucide-react";
import { useMemo, useState } from "react";
import { SKILLS, SKILL_FILTERS, type SkillCategory } from "../data/skills";
import SkillCard from "./SkillCard";

const TOOLBOX_STATS = [
  { icon: Code2, value: "10+", label: "Technologies" },
  { icon: Zap, value: "100%", label: "Self Taught" },
  { icon: BarChart3, value: "5+", label: "Major Projects" },
  { icon: Heart, value: "Always", label: "Learning" },
];

export default function Skills() {
  const [filter, setFilter] = useState<SkillCategory | "All">("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? SKILLS.filter((s) => s.featured)
        : SKILLS.filter((s) => s.category === filter),
    [filter]
  );

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="skills" className="relative z-10 scroll-mt-20 overflow-x-clip overflow-y-visible">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-24 sm:px-8">
        {/* Header — sits over the cards column so it never covers the globe */}
        <div className="lg:grid lg:grid-cols-[0.8fr_1.6fr] lg:gap-6">
          <div aria-hidden="true" className="hidden lg:block" />
          <div className="min-w-0 text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3.5 py-1 text-[13px] font-medium text-violet-200"
            >
              <Zap className="h-3.5 w-3.5 fill-violet-400 text-violet-400" />
              My Toolbox
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display mx-auto mt-3 max-w-4xl text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-white"
            >
              Skills that build <span className="text-gradient-tomorrow">possibilities</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-2 max-w-2xl text-sm text-white/55 sm:text-base"
            >
              A curated set of technologies, tools and skills I use to turn ideas into reality.
            </motion.p>
          </div>
        </div>

        {/* Main: left spacer lets the video globe show through untouched */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.6fr]">
          <div aria-hidden="true" className="hidden lg:block" />

          <div className="min-w-0">
            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-2"
              role="tablist"
              aria-label="Filter skills by category"
            >
              {SKILL_FILTERS.map((f) => {
                const active = filter === f.value;
                return (
                  <motion.button
                    key={f.value}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(f.value)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                      active
                        ? "btn-primary-glow border-violet-300/60 bg-gradient-to-r from-violet-600 to-indigo-500 text-white"
                        : "border-white/12 bg-white/[0.03] text-white/65 backdrop-blur-md hover:border-violet-400/40 hover:text-white"
                    }`}
                  >
                    {f.label}
                  </motion.button>
                );
              })}
            </motion.div>
            {filter === "All" && (
              <p className="mt-2.5 text-xs text-white/60">
                Showing {visible.length} of {SKILLS.length} — select a category to explore everything.
              </p>
            )}

            {/* Cards grid */}
            <motion.div layout className="mt-4 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {visible.map((s, i) => (
                  <motion.div
                    key={s.id}
                    layout
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
                    className="min-w-0"
                  >
                    <SkillCard skill={s} index={i} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Bottom: quote + stats + CTA — matches Image 1 */}
        <div className="mt-6 grid items-end gap-4 lg:grid-cols-[1fr_280px]">
          <div className="flex min-w-0 flex-col gap-4">
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative max-w-sm rounded-xl border border-white/10 bg-black/40 px-5 pb-4 pt-6 backdrop-blur-xl"
            >
              <Quote
                aria-hidden="true"
                className="animate-float-slow absolute -top-3 left-4 h-6 w-6 fill-violet-500 text-violet-400 drop-shadow-[0_0_12px_rgba(139,92,246,0.9)]"
              />
              <blockquote className="text-sm leading-relaxed text-white/85">
                Tools are important,
                <br />
                but curiosity builds better developers.
              </blockquote>
              <span
                aria-hidden="true"
                className="mt-2.5 block h-[2px] w-6 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.9)]"
              />
            </motion.figure>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass relative overflow-hidden rounded-2xl px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:px-6"
            >
              {/* lightning sweep across the top edge */}
              <span
                aria-hidden="true"
                className="animate-lightning-sweep absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-violet-200 to-transparent shadow-[0_0_12px_rgba(167,139,250,0.9)]"
              />
              <span
                aria-hidden="true"
                className="animate-spark-blink absolute right-8 top-2.5 text-violet-300"
              >
                <Zap className="h-3 w-3 fill-violet-300 drop-shadow-[0_0_8px_rgba(167,139,250,1)]" />
              </span>
              <span
                aria-hidden="true"
                className="animate-spark-blink absolute bottom-2.5 left-10 text-indigo-300"
                style={{ animationDelay: "1.3s" }}
              >
                <Zap className="h-2.5 w-2.5 fill-indigo-300 drop-shadow-[0_0_8px_rgba(129,140,248,1)]" />
              </span>
              <span className="grid grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-4">
                {TOOLBOX_STATS.map((s, i) => (
                  <span
                    key={s.label}
                    className={`flex min-w-0 items-center gap-3 ${i !== 0 ? "lg:border-l lg:border-white/10 lg:pl-5" : ""}`}
                  >
                    <span className="animate-glow-breathe flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 shadow-[0_0_18px_rgba(139,92,246,0.35)]">
                      <s.icon className="h-4 w-4 drop-shadow-[0_0_6px_rgba(139,92,246,0.8)]" />
                    </span>
                    <span className="min-w-0">
                      <span className="font-display block text-lg font-bold leading-tight text-white">{s.value}</span>
                      <span className="block break-words text-[11px] text-white/50">{s.label}</span>
                    </span>
                  </span>
                ))}
              </span>
            </motion.div>
          </div>

          <motion.a
            href="#projects"
            onClick={scrollToProjects}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="group relative flex min-w-0 items-center justify-between gap-4 overflow-hidden rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-600/25 via-[#0b0620]/80 to-indigo-600/20 p-5 backdrop-blur-xl transition-colors hover:border-violet-300/60 hover:shadow-[0_20px_60px_rgba(139,92,246,0.35)]"
            aria-label="Back to projects"
          >
            <span className="font-hand animate-neon-flicker text-[28px] font-semibold leading-[1.05] text-violet-300">
              Better
              <br />
              Projects
              <br />
              Ahead...
            </span>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-violet-300/50 text-white transition-all duration-300 group-hover:bg-violet-500/25 group-hover:shadow-[0_0_24px_rgba(139,92,246,0.6)]">
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
