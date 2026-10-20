
"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  UserRound,
  Building2,
  Globe2,
} from "lucide-react";

// Add your real contact details here when you are ready.
// WhatsApp number format: country code + number, digits only.
// Example format for India: 91XXXXXXXXXX
const CONTACT_EMAIL = "techengineerz1209@gmail.com";
const WHATSAPP_NUMBER = "918287639606";

const services = [
  "Business Website",
  "Website Redesign",
  "E-commerce Website",
  "AI Agents & Automation",
  "UI/UX Design",
  "Other",
];

type FormData = {
  name: string;
  email: string;
  business: string;
  service: string;
  details: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  business: "",
  service: "Business Website",
  details: "",
};

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState<FormData>(initialForm);
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState<"success" | "error">(
    "error",
  );

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.6 },
  };

  function updateField(
    field: keyof FormData,
    value: string,
  ) {
    setForm((previous) => ({ ...previous, [field]: value }));
    setFeedback("");
  }

  function buildMessage() {
    return [
      "Hello Tech Engineerz!",
      "",
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Business: ${form.business.trim() || "Not provided"}`,
      `Service: ${form.service}`,
      "",
      "Project details:",
      form.details.trim(),
    ].join("\n");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback("");

    if (!WHATSAPP_NUMBER && !CONTACT_EMAIL) {
      setFeedbackType("error");
      setFeedback(
        "The contact channels are not configured yet. Please add your email address or WhatsApp number in Contact.tsx before using this form.",
      );
      return;
    }

    const message = buildMessage();

    // Prefer WhatsApp when a number has been configured.
    
    if (WHATSAPP_NUMBER) {
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setFeedbackType("success");
      setFeedback(
        "Your inquiry is prepared in WhatsApp. Review it there and press Send to deliver it.",
      );
      return;
    }

    // Email fallback: opens the visitor's default email application.
    // This does not send email directly from the website.
    if (CONTACT_EMAIL) {
      const subject = encodeURIComponent(
        `Project inquiry — ${form.name.trim()}`,
      );
      const body = encodeURIComponent(message);
      window.location.href =
        `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

      setFeedbackType("success");
      setFeedback(
        "Your inquiry is prepared in your email application. Review it and send it to complete your inquiry.",
      );
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-[#050816] py-20 sm:py-28"
    >
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.08] blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[130px]" />
      </div>

      <div className="container relative z-10">
        {/* Section heading */}
        <motion.div
          {...reveal}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="section-eyebrow">Let's work together</span>

          <h2
            id="contact-heading"
            className="mt-5 font-[var(--font-sora)] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Let's build something
            <br className="hidden sm:block" />{" "}
            <span className="gradient-text">
              that moves you forward.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Have a local business that needs a better online presence?
            Tell us about your idea, your goals, and what you want to
            achieve. Let's explore the right solution for your business.
          </p>
        </motion.div>

        <div className="grid items-start gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          {/* Contact information */}
          <motion.div {...reveal} className="space-y-5">
            <div className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                Start a conversation
              </p>

              <h3 className="mt-4 font-[var(--font-sora)] text-2xl font-semibold text-white">
                Tell us what you have in mind.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Whether you need a new website, a redesign, or a smarter
                digital workflow, share a few details and we'll have a
                starting point for the conversation.
              </p>

              <div className="mt-7 space-y-3">
                <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-[#080d1b]/80 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-300">
                    <Mail size={19} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">
                      Email
                    </p>
                    <p className="mt-1 break-words text-xs leading-5 text-slate-400">
                      {CONTACT_EMAIL || "Email address coming soon"}
                    </p>

                    {CONTACT_EMAIL && (
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-cyan-300 hover:text-cyan-200"
                      >
                        Email us <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-[#080d1b]/80 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/[0.06] text-emerald-300">
                    <MessageCircle size={19} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">
                      WhatsApp
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {WHATSAPP_NUMBER
                        ? "Let's discuss your project."
                        : "WhatsApp contact coming soon"}
                    </p>

                    {WHATSAPP_NUMBER && (
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-emerald-300 hover:text-emerald-200"
                      >
                        Chat on WhatsApp <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-[#0b1b2c] to-[#080d1b] p-6 sm:p-7">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-400/[0.08] blur-3xl" />

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-300">
                  <Globe2 size={21} />
                </div>

                <h3 className="mt-5 font-[var(--font-sora)] text-lg font-semibold text-white">
                  Made for local businesses.
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  From independent shops and cafés to service providers,
                  we want to help businesses present themselves
                  professionally online.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  Websites designed around your goals
                </div>
              </div>
            </div>
          </motion.div>

          {/* Inquiry form */}
          <motion.div
            {...reveal}
            transition={{
              ...reveal.transition,
              delay: reduceMotion ? 0 : 0.1,
            }}
            className="rounded-2xl border border-white/[0.09] bg-[#080d1b]/90 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.15)] sm:p-8"
          >
            <div className="mb-7 flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-300">
                <Send size={20} />
              </div>

              <div>
                <h3 className="font-[var(--font-sora)] text-xl font-semibold text-white">
                  Tell us about your project
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Fill in the details below to prepare your inquiry.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-medium text-slate-300"
                  >
                    Your name <span className="text-cyan-300">*</span>
                  </label>

                  <div className="relative">
                    <UserRound
                      size={16}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                    />
                    <input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(event) =>
                        updateField("name", event.target.value)
                      }
                      placeholder="Your full name"
                      className="min-h-12 w-full rounded-xl border border-white/10 bg-white/[0.025] pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-medium text-slate-300"
                  >
                    Email address <span className="text-cyan-300">*</span>
                  </label>

                  <div className="relative">
                    <Mail
                      size={16}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                    />
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      placeholder="you@example.com"
                      className="min-h-12 w-full rounded-xl border border-white/10 bg-white/[0.025] pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/10"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-business"
                  className="mb-2 block text-xs font-medium text-slate-300"
                >
                  Business name{" "}
                  <span className="text-slate-500">(optional)</span>
                </label>

                <div className="relative">
                  <Building2
                    size={16}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                  />
                  <input
                    id="contact-business"
                    name="business"
                    autoComplete="organization"
                    maxLength={150}
                    value={form.business}
                    onChange={(event) =>
                      updateField("business", event.target.value)
                    }
                    placeholder="Your business or brand"
                    className="min-h-12 w-full rounded-xl border border-white/10 bg-white/[0.025] pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="mb-2 block text-xs font-medium text-slate-300"
                >
                  What do you need?{" "}
                  <span className="text-cyan-300">*</span>
                </label>

                <select
                  id="contact-service"
                  name="service"
                  required
                  value={form.service}
                  onChange={(event) =>
                    updateField("service", event.target.value)
                  }
                  className="min-h-12 w-full rounded-xl border border-white/10 bg-[#0b1220] px-3.5 text-sm text-white outline-none transition focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/10"
                >
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-details"
                  className="mb-2 block text-xs font-medium text-slate-300"
                >
                  Tell us about your project{" "}
                  <span className="text-cyan-300">*</span>
                </label>

                <textarea
                  id="contact-details"
                  name="details"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={5}
                  value={form.details}
                  onChange={(event) =>
                    updateField("details", event.target.value)
                  }
                  placeholder="What does your business do? What would you like your website to achieve?"
                  className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.025] px-3.5 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/10"
                />

                <p className="mt-2 text-right text-[11px] text-slate-500">
                  {form.details.length}/3000 characters
                </p>
              </div>

              {feedback && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-2.5 rounded-xl border p-3.5 text-xs leading-6 ${
                    feedbackType === "success"
                      ? "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-200"
                      : "border-amber-400/20 bg-amber-400/[0.06] text-amber-200"
                  }`}
                >
                  {feedbackType === "success" ? (
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0"
                    />
                  ) : (
                    <Mail size={17} className="mt-0.5 shrink-0" />
                  )}
                  <span>{feedback}</span>
                </div>
              )}

              <button
                type="submit"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_8px_30px_rgba(34,211,238,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(34,211,238,0.23)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080d1b]"
              >
                Prepare my inquiry
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <p className="text-center text-[11px] leading-5 text-slate-500">
                Your details will be prepared for the contact method
                configured by Tech Engineerz. Nothing is sent automatically
                by this form.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
