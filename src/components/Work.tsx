"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Layers3,
} from "lucide-react";
import { projects } from "@/data/projects";

function ProjectPreview({ type }: { type: string }) {
  if (type === "dashboard") {
    return (
      <div className="relative min-h-[200px] overflow-hidden rounded-2xl border border-white/10 bg-[#080d1b] p-4 sm:min-h-[220px] sm:p-5">
        <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-400/15 text-violet-300">
              <Bot size={17} />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">FlowPilot</div>
              <div className="text-[9px] text-slate-500">
                Workspace overview
              </div>
            </div>
          </div>

          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-2 py-1 text-[9px] text-emerald-300">
            <span aria-hidden="true">● </span>
            Active
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            ["Tasks", "128"],
            ["Automations", "16"],
            ["Time saved", "42h"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-2 sm:p-3"
            >
              <p className="text-[9px] text-slate-500">{label}</p>
              <p className="mt-1.5 text-lg font-semibold text-white sm:text-xl">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-medium text-slate-300">
              Workflow activity
            </span>
            <span className="text-[9px] text-violet-300">Last 7 days</span>
          </div>

          <div className="flex h-12 items-end gap-2 sm:h-14">
            {[35, 52, 42, 76, 57, 88, 65, 96, 70, 82, 56, 90].map(
              (height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-600/50 to-cyan-300/80"
                  style={{ height: `${height}%` }}
                />
              ),
            )}
          </div>
        </div>
      </div>
    );
  }

  if (type === "mobile") {
    return (
      <div className="relative flex min-h-[200px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#080d1b] px-5 py-5 sm:min-h-[220px]">
        <div className="absolute -left-10 top-5 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative w-[142px] rounded-[25px] border border-white/20 bg-[#101a2d] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <div className="overflow-hidden rounded-[18px] bg-[#f1f5f9] p-3">
            <div className="flex items-center justify-between text-[9px] font-bold text-slate-800">
              <span>orbit.</span>
              <span aria-hidden="true">☰</span>
            </div>

            <div className="mt-4 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 p-3 text-white">
              <p className="text-[8px] opacity-80">YOUR NEXT CHAPTER</p>
              <p className="mt-2 text-sm font-bold leading-tight">
                Make room for more.
              </p>
              <div className="mt-3 h-1 w-10 rounded-full bg-white/80" />
            </div>

            <p className="mt-3 text-[9px] font-bold text-slate-800">
              Explore your space
            </p>

            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="h-10 rounded-lg bg-blue-100" />
              <div className="h-10 rounded-lg bg-cyan-100" />
            </div>

            <div className="mt-3 h-2 rounded-full bg-slate-200" />
            <div className="mt-1.5 h-2 w-3/4 rounded-full bg-slate-200" />
          </div>
        </div>

        <div className="absolute right-3 top-4 rounded-xl border border-white/10 bg-[#101a2d]/90 px-2.5 py-2 text-[9px] text-cyan-200 sm:right-5 sm:text-[10px]">
          Mobile-first design
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[200px] overflow-hidden rounded-2xl border border-white/10 bg-[#080d1b] p-4 sm:min-h-[220px] sm:p-5">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-rose-400" />
        <span className="h-2 w-2 rounded-full bg-amber-300" />
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <div className="ml-3 h-5 flex-1 rounded-md border border-white/[0.08] bg-white/[0.03]" />
      </div>

      <div className="relative mt-4 overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br from-[#0d1c32] to-[#080d1b] p-5 sm:p-6">
        <div className="absolute -right-8 -top-12 h-36 w-36 rounded-full bg-cyan-400/15 blur-3xl" />

        <div className="relative max-w-xs">
          <span className="text-[9px] font-semibold tracking-[0.2em] text-cyan-300">
            DIGITAL STUDIO
          </span>

          <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
            Ideas into
            <br />
            <span className="text-cyan-300">experiences.</span>
          </h3>

          <p className="mt-2 max-w-[230px] text-[10px] leading-5 text-slate-400 sm:text-xs">
            Digital products built for ambitious businesses.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-3 py-2 text-[9px] font-semibold text-slate-950">
            Discover more <ArrowUpRight size={12} />
          </div>
        </div>

        <div className="absolute -bottom-8 -right-3 h-28 w-28 rotate-12 rounded-2xl border border-cyan-300/20 bg-cyan-400/[0.04] sm:right-8 sm:h-36 sm:w-36" />
      </div>
    </div>
  );
}

export default function Work() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      // className="relative isolate scroll-mt-28 overflow-hidden bg-[#050816] py-16 sm:py-24"
      className="relative isolate scroll-mt-28 overflow-hidden bg-[#050816] pt-4 pb-16 sm:pt-8 sm:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-32 h-80 w-80 rounded-full bg-blue-600/[0.08] blur-[120px]" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-violet-600/[0.08] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.16) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          // className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10"
        >
          <span className="section-eyebrow">Selected concepts</span>

          <h2
            id="work-heading"
            className="mt-5 font-[var(--font-sora)] text-3xl font-semibold tracking-tight text-white sm:mt-6 sm:text-4xl md:text-5xl"
          >
            Ideas brought to
            <br className="hidden sm:block" />{" "}
            <span className="gradient-text">digital life.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
            A glimpse into the kinds of digital experiences we can build —
            from high-performance websites to intelligent tools and mobile
            products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.number}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.6,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-[26px] border border-white/[0.09] bg-[#080d1b]/80 p-3.5 transition-colors duration-300 hover:border-cyan-300/25 sm:p-5"

//                 className={`group relative flex min-w-0 flex-col overflow-hidden rounded-[26px] border border-white/[0.09] bg-[#080d1b]/80 p-3.5 transition-colors duration-300 hover:border-cyan-300/25 sm:p-5 ${
//   index === 2 ? "lg:col-span-2" : ""
// }`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative flex flex-1 flex-col">
                  <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-300">
                        <Icon size={17} />
                      </span>

                      <span className="text-[9px] font-semibold tracking-[0.13em] text-slate-400 sm:text-[10px] sm:tracking-[0.15em]">
                        {project.category}
                      </span>
                    </div>

                    <span className="shrink-0 font-mono text-xs text-slate-500">
                      / {project.number}
                    </span>
                  </div>

                  <ProjectPreview type={project.type} />

                  <div className="flex flex-1 flex-col gap-4 px-1 pb-1 pt-4 sm:px-2 sm:pt-5">
                    <div>
                      <h3 className="font-[var(--font-sora)] text-xl font-semibold text-white sm:text-2xl">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[10px] text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto border-t border-white/[0.07] pt-3">
                      <span className="inline-flex items-center gap-2 text-[10px] font-medium text-cyan-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        {project.label}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 sm:mt-10 sm:flex-row sm:items-center sm:px-8 sm:py-6"
        >
          <div className="flex items-start gap-3">
            <Layers3 className="mt-1 shrink-0 text-cyan-300" size={21} />

            <div>
              <p className="font-semibold text-white">
                Have an idea worth building?
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                Let&apos;s turn your next big idea into a digital product.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/[0.08] px-5 py-3 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-400/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
          >
            Discuss a project
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}