"use client";

import { motion, useMotionTemplate, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export default function Background({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  // Subtle parallax: video drifts opposite the cursor
  const sx = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const sy = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const bgX = useTransform(sx, [-0.5, 0.5], [10, -10]);
  const bgY = useTransform(sy, [-0.5, 0.5], [8, -8]);

  // Spotlight follows cursor
  const spotX = useTransform(sx, [-0.5, 0.5], [30, 70]);
  const spotY = useTransform(sy, [-0.5, 0.5], [25, 65]);
  const spotBg = useMotionTemplate`radial-gradient(520px circle at ${spotX}% ${spotY}%, rgba(139,92,246,0.16), transparent 65%)`;

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Parallax video layer (desktop) */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute -inset-6 hidden md:block">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.webp"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Static poster fallback (mobile — saves data + battery) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-poster.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      />

      {/* Readability gradients */}
      <div className="video-vignette absolute inset-0" />

      {/* Cursor spotlight — premium interactive light */}
      <motion.div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{ background: spotBg }}
      />

      {/* Film grain */}
      <div className="noise-overlay absolute inset-0" />

      {/* Video play/pause — small premium control */}
      <button
        onClick={toggle}
        aria-label={playing ? "Pause background video" : "Play background video"}
        className="glass absolute bottom-24 right-6 z-20 hidden h-10 w-10 items-center justify-center rounded-full text-white/70 transition hover:scale-105 hover:text-white md:flex"
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </button>
    </div>
  );
}
