
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Code2,
  Database,
  Palette,
  Smartphone,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Custom Websites",
    description:
      "High-performance websites engineered around your brand, customers, and business goals.",
    icon: Code2,
    tags: ["Next.js", "React", "TypeScript"],
    color: "from-cyan-400/20 via-blue-500/10",
  },
  {
    number: "02",
    title: "AI Agents & Automation",
    description:
      "Intelligent workflows that reduce repetitive tasks and help your team work smarter.",
    icon: Bot,
    tags: ["AI agents", "Workflows", "Integrations"],
    color: "from-violet-500/20 via-indigo-500/10",
  },
  {
    number: "03",
    title: "Mobile Experiences",
    description:
      "Responsive, intuitive digital experiences that work beautifully across devices.",
    icon: Smartphone,
    tags: ["Responsive", "Mobile-first"],
    color: "from-blue-500/20 via-cyan-500/5",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Thoughtful interfaces and visual systems that make complex products feel simple.",
    icon: Palette,
    tags: ["Design systems", "Prototyping"],
    color: "from-fuchsia-500/15 via-violet-500/5",
  },
  {
    number: "05",
    title: "Workflow Automation",
    description:
      "Connect your tools and streamline the processes that slow your business down.",
    icon: Workflow,
    tags: ["APIs", "Automation"],
    color: "from-cyan-500/15 via-blue-500/5",
  },
  {
    number: "06",
    title: "Systems & Integrations",
    description:
      "Connect applications, data, and business tools into a more efficient ecosystem.",
    icon: Database,
    tags: ["APIs", "Data systems"],
    color: "from-indigo-500/20 via-blue-500/5",
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative isolate scroll-mt-28 overflow-hidden bg-[#050816] py-12 sm:py-24"
    >
      {/* Cinematic ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-[30rem] w-[30rem] rounded-full bg-violet-500/[0.07] blur-[140px]" />

      {/* Subtle architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      <div className="container relative z-10">
        {/* Section introduction */}
        <motion.div
          initial={{
            opacity: reduceMotion ? 1 : 0,
            y: reduceMotion ? 0 : 22,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: "easeOut",
          }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            What we do
          </span>

          <h2 className="mt-6 font-[var(--font-sora)] text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Digital solutions.
            <br />
            <span className="gradient-text">Built with purpose.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            From ambitious ideas to dependable digital products, we
            combine design, engineering, and intelligent automation
            to solve real business problems.
          </p>
        </motion.div>

        {/* Six-card asymmetric service grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index < 2;

            return (
              <motion.article
                key={service.number}
                initial={{
                  opacity: reduceMotion ? 1 : 0,
                  y: reduceMotion ? 0 : 24,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : (index % 3) * 0.07,
                  ease: "easeOut",
                }}
                
className={`group relative isolate flex min-h-[280px] flex-col overflow-hidden rounded-3xl border border-white/[0.09] bg-[#080e1c] p-5 transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_18px_60px_rgba(0,180,255,0.07)] sm:min-h-[310px] sm:p-7 lg:min-h-[320px] lg:p-8 ${
  isFeatured ? "lg:col-span-6" : "lg:col-span-3"
}`}

              >
                {/* Card-specific gradient */}
                <div
                  className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${service.color} to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Local glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 -z-10 h-48 w-48 rounded-full bg-cyan-400/[0.04] blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-cyan-400/[0.11]" />

                {/* Decorative corner line */}
                <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute right-5 top-5 h-8 w-8 rounded-tr-xl border-r border-t border-cyan-300/30" />
                </div>

                {/* Card header */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-300 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-300/30 group-hover:bg-cyan-400/10 group-hover:shadow-[0_0_24px_rgba(34,211,238,0.09)]">
                    <Icon size={23} strokeWidth={1.6} />
                  </div>

                  <span className="font-mono text-xs tracking-widest text-slate-600 transition-colors group-hover:text-cyan-300/70">
                    / {service.number}
                  </span>
                </div>

                {/* Card content */}
                <div className="mt-6 sm:mt-8">
                  <h3 className="font-[var(--font-sora)] text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-50 sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>
                </div>

                {/* Technology tags and visual arrow */}
                <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6 sm:pt-8">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-[10px] text-slate-400 transition-colors duration-300 group-hover:border-white/[0.13] group-hover:text-slate-300 sm:text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-400 group-hover:text-slate-950"
                  >
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Project CTA */}
        <motion.div
          initial={{
            opacity: reduceMotion ? 1 : 0,
            y: reduceMotion ? 0 : 16,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
            ease: "easeOut",
          }}
          className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/[0.08] bg-gradient-to-r from-white/[0.035] to-white/[0.015] p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <p className="text-sm font-medium text-white sm:text-base">
              Have a project in mind?
            </p>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Let&apos;s find the right digital solution for your business.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-400 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Discuss your project <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
