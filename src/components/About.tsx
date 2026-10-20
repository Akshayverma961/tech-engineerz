
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  MapPin,
  Smartphone,
  Palette,
  Gauge,
  Store,
  Scissors,
  Coffee,
  Dumbbell,
  Stethoscope,
  Wrench,
} from "lucide-react";

const principles = [
  {
    number: "01",
    icon: Palette,
    title: "Designed to stand out",
    description:
      "A polished visual identity, thoughtful layouts, and clear messaging that make your business memorable.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Made for every screen",
    description:
      "Responsive websites that look and work beautifully on phones, tablets, and desktops.",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Built for real customers",
    description:
      "Fast experiences, clear calls to action, and simple ways for customers to contact your business.",
  },
];

const businessTypes = [
  { icon: Coffee, label: "Cafés & restaurants" },
  { icon: Scissors, label: "Salons & studios" },
  { icon: Dumbbell, label: "Gyms & fitness" },
  { icon: Stethoscope, label: "Clinics & wellness" },
  { icon: Store, label: "Shops & boutiques" },
  { icon: Wrench, label: "Local service providers" },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-[#050816] py-20 sm:py-28"
    >
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.08] blur-[120px]" />
        <div className="absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[130px]" />
      </div>

      <div className="container relative z-10">
        {/* Section introduction */}
        <motion.div
          {...reveal}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16"
        >
          <div>
            <span className="section-eyebrow">
              About Tech Engineerz
            </span>

            <h2
              id="about-heading"
              className="mt-5 font-[var(--font-sora)] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Your business deserves
              <br className="hidden sm:block" />{" "}
              <span className="gradient-text">
                a better website.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:pb-1">
            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              Your business does great work. Your online presence
              should reflect that.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              At Tech Engineerz, we create professional websites
              for local businesses that want to look more credible,
              showcase their services, and make it easier for
              customers to get in touch. From the first impression
              to the final click, every detail has a purpose.
            </p>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
            >
              Let's build your online presence
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>

        {/* Core principles */}
        <div className="mt-14 grid gap-4 md:grid-cols-3 sm:mt-20">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.04] sm:p-7"
              >
                <div className="absolute right-5 top-5 font-mono text-xs text-slate-600">
                  {item.number}
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-300 transition-colors group-hover:bg-cyan-300/[0.12]">
                  <Icon size={22} strokeWidth={1.7} />
                </div>

                <h3 className="mt-6 font-[var(--font-sora)] text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Who we build for */}
        <motion.div
          {...reveal}
          className="relative mt-6 overflow-hidden rounded-[26px] border border-cyan-300/15 bg-gradient-to-br from-[#0a1729] via-[#08101e] to-[#080d1b] p-6 sm:mt-8 sm:p-9 lg:p-11"
        >
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.08] blur-[90px]" />

          <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-300">
                <MapPin size={21} />
              </div>

              <h3 className="mt-5 font-[var(--font-sora)] text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Built for local businesses.
                <br />
                <span className="gradient-text">
                  Ready for the digital world.
                </span>
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Whether you're starting out or ready to modernize
                your existing website, we'll help you present your
                business professionally and give customers a clearer
                path to connect with you.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                {[
                  "Custom design",
                  "Mobile-friendly",
                  "Clear contact options",
                ].map((benefit) => (
                  <span
                    key={benefit}
                    className="inline-flex items-center gap-2 text-xs text-slate-300"
                  >
                    <Check size={14} className="text-cyan-300" />
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {businessTypes.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex min-h-[68px] items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 transition-colors hover:border-cyan-300/20 hover:bg-cyan-300/[0.035]"
                >
                  <Icon
                    size={19}
                    strokeWidth={1.7}
                    className="shrink-0 text-cyan-300"
                  />
                  <span className="text-sm text-slate-300">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing call to action */}
        <motion.div
          {...reveal}
          className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/[0.08] pt-8 sm:mt-16 sm:flex-row sm:items-center"
        >
          <div>
            <p className="font-[var(--font-sora)] text-xl font-semibold text-white sm:text-2xl">
              Let's make your business stand out.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Tell us what you do. We'll help you plan your website.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_8px_30px_rgba(34,211,238,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(34,211,238,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
          >
            Start a project
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
