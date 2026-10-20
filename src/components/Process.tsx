
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Search,
  Palette,
  Code2,
  Rocket,
  ArrowUpRight,
  Check,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand the business",
    description:
      "We start by understanding your business, your customers, your goals, and what makes your services different.",
    icon: Search,
    deliverables: ["Business goals", "Target audience", "Project direction"],
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Shape the experience",
    description:
      "We plan a clear structure and create a polished visual experience that reflects your brand and builds customer trust.",
    icon: Palette,
    deliverables: ["Page structure", "Visual direction", "User experience"],
  },
  {
    number: "03",
    title: "Develop",
    subtitle: "Bring it to life",
    description:
      "We turn the design into a responsive website, then check its layout, links, forms, and usability across screen sizes.",
    icon: Code2,
    deliverables: ["Responsive build", "Functionality checks", "Quality review"],
  },
  {
    number: "04",
    title: "Launch",
    subtitle: "Go live with confidence",
    description:
      "After the final review and your approval, we help prepare the website for launch and explain the next steps.",
    icon: Rocket,
    deliverables: ["Final approval", "Launch preparation", "Handover guidance"],
  },
];

export default function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-[#050816] py-20 sm:py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-32 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-eyebrow">How we work</span>

          <h2
            id="process-heading"
            className="mt-5 font-[var(--font-sora)] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            From first idea
            <br className="hidden sm:block" /> to{" "}
            <span className="gradient-text">launch day.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            A clear, collaborative process to turn your business goals
            into a professional online experience—with every step
            explained along the way.
          </p>
        </motion.div>

        {/* Process timeline */}
        <div className="relative mt-14 grid gap-4 sm:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {/* Desktop connecting line */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-[34px] hidden h-px bg-gradient-to-r from-cyan-400/5 via-cyan-400/30 to-cyan-400/5 xl:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="group relative flex min-w-0 flex-col rounded-2xl border border-white/[0.09] bg-[#080d1b]/85 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-[#0a1222] sm:p-6"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-cyan-300/20 bg-[#0b1a2a] text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.04)] transition-all duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/[0.08]">
                    <Icon size={27} strokeWidth={1.6} />
                  </div>

                  <span className="font-mono text-xs tracking-wider text-slate-500">
                    / {step.number}
                  </span>
                </div>

                <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.17em] text-cyan-300/80">
                  Step {step.number}
                </p>

                <h3 className="mt-2 font-[var(--font-sora)] text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-1 text-sm font-medium text-slate-300">
                  {step.subtitle}
                </p>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>

                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Key milestones
                  </p>

                  <ul className="space-y-2.5">
                    {step.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-start gap-2.5 text-xs leading-5 text-slate-300"
                      >
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-cyan-300"
                        />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-cyan-300/15 bg-gradient-to-r from-cyan-400/[0.07] via-white/[0.025] to-blue-500/[0.05] p-6 sm:flex-row sm:items-center sm:px-8 sm:py-7"
        >
          <div>
            <p className="font-[var(--font-sora)] text-lg font-semibold text-white sm:text-xl">
              Have a business website in mind?
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Tell us about your business and what you'd like your website
              to achieve.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_35px_rgba(34,211,238,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
          >
            Discuss your project
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
