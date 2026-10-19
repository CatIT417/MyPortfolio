"use client";

import { MotionConfig, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import About from "../components/About";
import Background from "../components/Background";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  // -0.5 .. 0.5 normalized cursor for parallax + spotlight (fixed video bg)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Respect prefers-reduced-motion: pause decorative background videos
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      document.querySelectorAll<HTMLVideoElement>("video[autoplay]").forEach((v) => {
        if (mq.matches) v.pause();
        else v.play().catch(() => {});
      });
    };
    // catch autoplay that resolves after mount
    const onPlay = (e: Event) => {
      if (mq.matches && e.target instanceof HTMLVideoElement) e.target.pause();
    };
    apply();
    document.addEventListener("play", onPlay, true);
    mq.addEventListener("change", apply);
    return () => {
      document.removeEventListener("play", onPlay, true);
      mq.removeEventListener("change", apply);
    };
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth - 0.5);
    mouseY.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <MotionConfig reducedMotion="user">
    <div onMouseMove={onMouseMove} className="relative flex min-h-screen flex-col bg-[#05010f]">
      <Navbar />
      <main className="relative flex flex-1 flex-col">
        <div className="relative flex min-h-screen flex-col">
          <Background mouseX={mouseX} mouseY={mouseY} />
          <Hero />
        </div>

        {/* About — Section 01: cinematic full-bleed workspace/cosmic background */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              aria-hidden="true"
              className="block h-full w-full object-cover max-[736px]:hidden"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/about_me.webp"
            >
              <source src="/about_me.mp4" type="video/mp4" />
            </video>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about_me.webp"
              alt=""
              className="hidden h-full w-full object-cover max-[736px]:block"
            />
            {/* dark tint for readability */}
            <div className="absolute inset-0 bg-[#05010f]/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05010f]/75 via-[#05010f]/25 to-transparent" />
            {/* blend edges with neighbouring sections */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#05010f] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05010f] to-transparent" />
          </div>
          <About />
        </div>

        <div className="relative">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              aria-hidden="true"
              className="block h-full w-full object-cover max-[736px]:hidden"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/project_bg.webp"
            >
              <source src="/project_bg.mp4" type="video/mp4" />
            </video>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/project_bg.webp"
              alt=""
              className="hidden h-full w-full object-cover max-[736px]:block"
            />
            <div className="absolute inset-0 bg-[#05010f]/60" />
          </div>
          <Projects />
        </div>
        <div className="relative overflow-hidden">
          {/* Top-anchored viewport-height bg: same zoom as hero, strictly clipped
              to this section so it can never bleed into neighbouring sections */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute left-0 top-0 h-screen w-full overflow-hidden">
              <video
                aria-hidden="true"
                className="block h-full w-full object-cover object-center max-[736px]:hidden"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/tools_skills.webp"
              >
                <source src="/tools_skills.mp4" type="video/mp4" />
              </video>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/tools_skills.webp"
                alt=""
                className="hidden h-full w-full object-cover object-center max-[736px]:block"
              />
              <div className="absolute inset-0 bg-[#05010f]/55" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#05010f]/40" />
              {/* blend edges into neighbouring sections */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#05010f] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#05010f] to-transparent" />
            </div>
          </div>
          <Skills />
        </div>

        {/* Contact — final content section, cinematic contact.mp4 background */}
        <Contact />
      </main>

      {/* Footer — end of the journey, footer.png background */}
      <Footer />
    </div>
    </MotionConfig>
  );
}
