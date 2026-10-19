"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const fadeUp = {
  hidden: { y: 28, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function useTypewriter(text: string, speed = 55, startDelay = 500) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length && interval) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);
  return out;
}

function useISTClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function HeroContent() {
  const typed = useTypewriter("// HELLO, I'M");
  const ist = useISTClock();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div
      className="max-w-2xl"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setTilt({
          x: ((e.clientX - r.left) / r.width - 0.5) * 6,
          y: ((e.clientY - r.top) / r.height - 0.5) * -6,
        });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="mb-3 font-mono text-[13px] tracking-[0.35em] text-violet-300/90"
      >
        {typed}
        <span className="animate-blink ml-1 inline-block h-4 w-[2px] translate-y-[3px] bg-violet-300" />
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
        style={{ transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
        className="transition-transform duration-150 ease-out"
      >
        <h1 className="font-display text-gradient-aakash cursor-default text-[clamp(3.5rem,9vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight">
          Aakash
        </h1>
        <h2 className="font-display mt-3 text-[clamp(1.6rem,4vw,2.6rem)] font-bold leading-[1.08] tracking-tight text-white">
          I build solutions
          <br />
          for a better <span className="text-gradient-tomorrow">tomorrow.</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={2}
        className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 sm:text-base"
      >
        A passionate developer who loves turning ideas into real-world applications. I
        explore, learn, and build with a focus on impact, usability, and innovation.
      </motion.p>

      {/* CTAs */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={3}
        className="mt-7 flex flex-wrap items-center gap-4"
      >
        <a
          href="#projects"
          className="btn-primary-glow shimmer-sweep group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-500 px-7 py-3.5 text-[15px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]"
        >
          View My Work
          <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1.5" />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          title="Open résumé (PDF)"
          className="group inline-flex items-center gap-2.5 rounded-2xl border border-white/20 bg-white/[0.03] px-7 py-3.5 text-[15px] font-medium text-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/60 hover:bg-violet-500/10 hover:text-white hover:shadow-[0_8px_30px_rgba(139,92,246,0.35)]"
        >
          <Download className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-y-0.5" />
          Download Resume
        </a>
      </motion.div>

      {/* Socials */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={4}
        className="mt-6 flex items-center gap-3"
      >
        <SocialButton
          href="https://github.com/Gugilla-Aakash"
          label="GitHub — Gugilla-Aakash"
        >
          <GithubIcon className="h-5 w-5" />
        </SocialButton>
        <SocialButton
          href="https://www.linkedin.com/in/gugilla-aakash"
          label="LinkedIn — gugilla-aakash"
        >
          <LinkedinIcon className="h-5 w-5" />
        </SocialButton>
        <span className="ml-2 hidden items-center gap-2 text-xs text-white/60 sm:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to opportunities
        </span>
      </motion.div>

      {/* Location + live IST */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={5}
        className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-white/50"
      >
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-4 w-4 text-violet-400" />
          Currently in Hyderabad, India
        </span>
        {ist && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[12px] text-white/60">
            IST {ist}
          </span>
        )}
      </motion.div>
    </div>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="glass group flex h-12 w-12 items-center justify-center rounded-2xl text-violet-200/80 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/50 hover:text-white hover:shadow-[0_10px_30px_rgba(139,92,246,0.45)]"
    >
      <span className="transition-transform duration-300 group-hover:scale-110">{children}</span>
    </a>
  );
}
