"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Brain, Code2, Globe, LayoutGrid, Wrench } from "lucide-react";
import { useMemo, useState } from "react";
import { FILTERS, PROJECTS, type ProjectCategory } from "../data/projects";
import ProjectCard from "./ProjectCard";

const FILTER_ICONS: Record<string, typeof LayoutGrid> = {
  All: LayoutGrid,
  "Web Apps": Globe,
  "AI / ML": Brain,
  Tools: Wrench,
  "Open Source": Code2,
};

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  const visible = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative z-10 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8">
        {/* Header */}
        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[13px] tracking-[0.35em] text-white/70"
          >
            {"// 02. PROJECTS"}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mx-auto mt-4 max-w-4xl text-center text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-white"
          >
            Projects that solve <span className="text-gradient-tomorrow">real problems.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 text-center text-base text-white/55 sm:text-lg"
          >
            A blend of creativity, technology and purpose.
          </motion.p>

          {/* Neon handwritten note */}
          <span
            aria-hidden="true"
            className="absolute -top-2 right-0 hidden rotate-[8deg] select-none text-right font-mono text-sm italic leading-tight text-violet-400/80 drop-shadow-[0_0_12px_rgba(139,92,246,0.8)] xl:block"
          >
            Ideas
            <br />
            Code
            <br />
            Impact
          </span>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {FILTERS.map((f) => {
            const Icon = FILTER_ICONS[f.value] ?? LayoutGrid;
            const active = filter === f.value;
            return (
              <motion.button
                key={f.value}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.value)}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-2.5 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "btn-primary-glow border-violet-300/60 bg-violet-600/25 text-white"
                    : "border-white/12 bg-white/[0.03] text-white/65 backdrop-blur-md hover:border-violet-400/40 hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                }`}
              >
                <Icon className="h-4 w-4" />
                {f.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 70, rotateX: 10, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={p} index={i} />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom handwritten note */}
        <div className="relative mt-14">
          <span
            aria-hidden="true"
            className="absolute -left-2 -top-10 hidden rotate-[-10deg] select-none font-mono text-sm italic leading-tight text-violet-400/80 drop-shadow-[0_0_12px_rgba(139,92,246,0.8)] xl:block"
          >
            Build
            <br />
            Solve
            <br />
            Grow
          </span>
        </div>
      </div>
    </section>
  );
}
