"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import type { Project } from "../data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, rotateX: "-2deg", rotateY: "2deg" }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-[#0b0620]/70 backdrop-blur-xl transition-colors duration-300 ${
        project.featured
          ? "border-violet-400/40 shadow-[0_0_50px_rgba(139,92,246,0.25)] hover:border-violet-300/70"
          : "border-white/10 hover:border-violet-400/40 hover:shadow-[0_20px_60px_rgba(139,92,246,0.2)]"
      }`}
    >
      {/* Featured badge */}
      {project.featured && (
        <span className="glass absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border-violet-300/40 px-3.5 py-1.5 text-xs font-semibold text-violet-100 shadow-[0_0_24px_rgba(139,92,246,0.5)]">
          <Star className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
          Featured
        </span>
      )}

      {/* Cover */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.name} live demo`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-[#0b0620] via-transparent to-transparent opacity-80" />
        <span className="glass absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-white/0 transition-all duration-300 group-hover:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </a>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-violet-300/25 bg-violet-500/10 px-3 py-1 text-[11px] font-medium text-violet-200/90"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="font-display mt-4 text-[22px] font-bold tracking-tight text-white">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{project.oneliner}</p>

        <div className="mt-5 flex items-center justify-between">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex items-center gap-2 text-[15px] font-semibold text-violet-400 transition-colors hover:text-violet-200"
          >
            View Project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} source code on GitHub`}
            title="Source code"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-400/40 text-violet-200 transition-all duration-300 hover:border-violet-300 hover:bg-violet-500/20 hover:text-white hover:shadow-[0_0_24px_rgba(139,92,246,0.5)]"
          >
            <ArrowRight className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
