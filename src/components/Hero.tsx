
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Sparkles,
  Workflow,
} from "lucide-react";

const services = [
  { icon: Code2, label: "Web Development" },
  { icon: Bot, label: "AI Agents" },
  { icon: Workflow, label: "Automation" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      // className="relative isolate flex min-h-[850px] items-center overflow-hidden bg-[#050816] pb-20 pt-32 sm:min-h-[900px] sm:pt-36 lg:min-h-screen lg:pb-24"

      // className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#050816] pb-16 pt-32 sm:min-h-[800px] sm:pb-20 sm:pt-36 lg:min-h-screen lg:pb-24"

      className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#050816] pb-12 pt-28 sm:min-h-[800px] sm:pb-16 sm:pt-32 lg:min-h-0 lg:pb-20 lg:pt-28"
    >
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[440px] w-[440px] rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute right-[-10%] top-[15%] h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="absolute bottom-[-25%] left-[30%] h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          {/* Hero copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: reduceMotion ? 0 : 0.12 }}
            className="relative z-10"
          >
            <motion.div
              variants={reveal}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>

              <span className="text-[10px] font-semibold tracking-[0.2em] text-cyan-300 sm:text-xs">
                DIGITAL & AI STUDIO
              </span>
            </motion.div>

            <motion.h1
              variants={reveal}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="max-w-2xl font-[var(--font-sora)] text-4xl font-semibold leading-[1.13] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl xl:text-[68px]"
            >
              We engineer
              <br />
              <span className="gradient-text">what&apos;s next.</span>
              <br />
              <span className="text-white">For your business.</span>
            </motion.h1>

            <motion.p
              variants={reveal}
              transition={{ duration: 0.65 }}
              className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              High-performance websites, intelligent AI agents, and
              smart automation built to turn ambitious ideas into
              meaningful digital experiences.
            </motion.p>

            <motion.div
              variants={reveal}
              transition={{ duration: 0.65 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_8px_35px_rgba(34,211,238,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_45px_rgba(34,211,238,0.3)]"
              >
                Start a project
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#work"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06]"
              >
                Explore our work <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div
              variants={reveal}
              transition={{ duration: 0.65 }}
              className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-slate-400"
            >
              <span className="flex items-center gap-2">
                <Check size={15} className="text-cyan-400" />
                Purpose-built solutions
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} className="text-cyan-400" />
                Design-led development
              </span>
            </motion.div>

            <motion.a
              href="#services"
              variants={reveal}
              transition={{ duration: 0.65 }}
              className="mt-12 inline-flex items-center gap-3 text-xs tracking-wide text-slate-500 transition-colors hover:text-cyan-300"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-cyan-300">
                <ArrowDown size={16} />
              </span>
              SCROLL TO EXPLORE
            </motion.a>
          </motion.div>

          {/* Cinematic website showcase */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[520px] pb-8 lg:ml-auto lg:mr-2"
          >
            <div className="absolute inset-8 rounded-[40px] bg-cyan-400/20 blur-[90px]" />

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -7, 0] }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[28px] border border-sky-300/25 bg-[#071426] p-2 shadow-[0_0_80px_rgba(14,165,233,0.14)] sm:p-3"
            >
              <div className="overflow-hidden rounded-[21px] bg-[#08111f]">
                <img
                  src="/images/hero-showcase.png"
                  alt="Tech Engineerz website displayed on a laptop and smartphone in a cinematic blue-lit setting"
                  className="block h-auto w-full object-contain"
                />
              </div>
            </motion.div>

            {/* Supporting capability panel */}
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              // className="glass-panel relative z-10 mx-auto mt-4 w-full max-w-[360px] rounded-2xl p-4 sm:ml-auto sm:mr-0"
              
              className="glass-panel relative z-10 mx-auto mt-4 w-full rounded-2xl p-4 sm:p-5"

            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-white">
                    What we engineer
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Solutions for your next move
                  </p>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10">
                  <Sparkles className="text-cyan-300" size={17} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {services.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.035] px-1.5 py-3 text-center transition-colors duration-300 hover:border-cyan-300/25 hover:bg-cyan-400/[0.06]"
                  >
                    <Icon
                      size={19}
                      className="mx-auto mb-2 text-cyan-300"
                    />

                    <span className="text-[10px] leading-tight text-slate-300">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
