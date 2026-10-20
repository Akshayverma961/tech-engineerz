
"use client";

import {
  ArrowUp,
  ArrowUpRight,
  Code2,
  Mail,
  Phone,
} from "lucide-react";

const EMAIL = "techengineerz1209@gmail.com";
const PHONE = "8287639606";
const WHATSAPP = "918287639606";

const exploreLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Our Process", href: "#process" },
];

const serviceLinks = [
  { label: "Web Development", href: "#services" },
  { label: "AI & Automation", href: "#services" },
  { label: "UI/UX Design", href: "#services" },
  { label: "Mobile Experiences", href: "#services" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/[0.08] bg-[#050816]"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-cyan-500/[0.06] blur-[100px]"
      />

      <div className="container relative mx-auto px-5 sm:px-8">
        {/* Main footer */}
        <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] lg:gap-12 lg:py-20">
          {/* Brand */}
          <div>
            <a
              href="#home"
              aria-label="Tech Engineerz home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300">
                <Code2 size={23} />
              </span>

              <span className="text-xl font-semibold tracking-tight text-white">
                Tech <span className="text-cyan-300">Engineerz</span>
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Building thoughtful digital experiences and intelligent
              solutions that help businesses move forward.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-white"
            >
              Let&apos;s work together
              <ArrowUpRight size={16} />
            </a>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/techengineerz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tech Engineerz on Instagram"
                title="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] hover:text-cyan-300"
              >
                {/* <Instagram size={18} /> */}
                <svg
  viewBox="0 0 24 24"
  width="18"
  height="18"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.7"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <rect x="3" y="3" width="18" height="18" rx="5" />
  <circle cx="12" cy="12" r="4" />
  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
</svg>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Tech Engineerz on WhatsApp"
                title="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:border-emerald-400/30 hover:bg-emerald-400/[0.08] hover:text-emerald-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.49 0 .13 5.36.13 11.95c0 2.1.55 4.15 1.59 5.96L0 24l6.24-1.64a11.95 11.95 0 0 0 5.84 1.49h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.52-8.42ZM12.09 21.8a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.7.97.99-3.6-.23-.37a9.87 9.87 0 0 1-1.52-5.25c0-5.46 4.45-9.91 9.92-9.91 2.65 0 5.14 1.03 7.01 2.91a9.85 9.85 0 0 1 2.9 7.02c0 5.46-4.45 9.91-9.91 9.91Zm5.44-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.49-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Get in touch
            </h3>

            <div className="mt-6 space-y-5">
              <a
                // href={`mailto:${EMAIL}`}
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
target="_blank"
rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04] text-slate-400 transition-colors group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                  <Mail size={17} />
                </span>

                <span className="min-w-0 pt-2 text-sm text-slate-400 transition-colors group-hover:text-cyan-300">
                  {EMAIL}
                </span>
              </a>

              <a
                href={`tel:+91${PHONE}`}
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04] text-slate-400 transition-colors group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                  <Phone size={17} />
                </span>

                <span className="pt-2 text-sm text-slate-400 transition-colors group-hover:text-cyan-300">
                  +91 {PHONE}
                </span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04] text-slate-400 transition-colors group-hover:border-emerald-400/30 group-hover:text-emerald-400">
                  <MessageCircleIcon />
                </span>

                <span className="pt-2 text-sm text-slate-400 transition-colors group-hover:text-emerald-400">
                  Chat on WhatsApp
                </span>
              </a>

              <p className="pl-[52px] text-xs leading-5 text-slate-500">
                Available for projects worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/[0.08] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-slate-500">
            {/* © {new Date().getFullYear()} Tech Engineerz. All rights reserved. */}
            © 2026 Tech Engineerz. All rights reserved.
          </p>

          <p className="text-xs text-slate-500">
            Crafted with care. Built for what&apos;s next.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="inline-flex h-9 w-9 items-center justify-center self-start rounded-full border border-white/10 text-slate-400 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] hover:text-cyan-300 sm:self-auto"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

function MessageCircleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </svg>
  );
}
