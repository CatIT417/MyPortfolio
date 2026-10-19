"use client";

import { motion } from "framer-motion";
import type { Skill } from "../data/skills";

export default function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const { Icon } = skill;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative flex min-w-0 flex-col rounded-2xl border border-white/10 bg-[#0b0620]/70 p-4 backdrop-blur-xl transition-colors duration-300 hover:border-violet-400/40 hover:shadow-[0_16px_50px_rgba(139,92,246,0.22)]"
    >
      {/* Icon */}
      <span
        style={{ color: skill.iconColor }}
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] transition-colors duration-300 group-hover:bg-white/[0.07]"
      >
        <Icon className="h-6 w-6" />
      </span>

      {/* Name + percent — wraps instead of overflowing */}
      <span className="mt-3 flex items-start justify-between gap-2">
        <span title={skill.name} className="min-w-0 flex-1 text-[13px] font-semibold leading-snug text-white [overflow-wrap:anywhere]">
          {skill.name}
        </span>
        <span className="shrink-0 font-mono text-xs text-white/60">{skill.percent}%</span>
      </span>

      {/* Progress bar */}
      <span className="mt-2 block h-1 w-full overflow-hidden rounded-full bg-white/10">
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percent}%` }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 1, delay: 0.2 + (index % 8) * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="block h-full rounded-full bg-gradient-to-r from-violet-500 via-violet-400 to-indigo-400 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
        />
      </span>

      {/* Category */}
      <span className="mt-2 block text-[11px] text-white/60">{skill.category}</span>
    </motion.div>
  );
}
