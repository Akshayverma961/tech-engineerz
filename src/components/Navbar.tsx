
"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Process", href: "#process" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const closeMenu = () => setMenuOpen(false);

  
function handleMobileNavigation(href: string) {
  setMenuOpen(false);

  const targetId = href.slice(1);

  if (window.location.hash !== href) {
    window.history.pushState(null, "", href);
  }

  window.setTimeout(() => {
    const target = document.getElementById(targetId);

    if (!target) {
      console.error(`Section not found: #${targetId}`);
      return;
    }

    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }, 250);
}


  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.04] bg-[#050816]/75 px-4 pb-3 pt-3 backdrop-blur-2xl sm:px-6 sm:pb-4 sm:pt-4"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border border-sky-400/20 bg-[#050816]/95 px-3 py-3 shadow-[0_0_35px_rgba(14,165,233,0.06)] sm:px-6"
      >
        {/* Brand */}
        <a
          href="#home"
          aria-label="Tech Engineerz home"
          onClick={closeMenu}
          className="flex min-w-0 shrink items-center gap-2.5 sm:gap-3"
        >
          <img
            src="/images/tech%20engineerz%20logo.png"
            alt="Tech Engineerz logo"
            className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-sky-400/30 sm:h-10 sm:w-10"
          />

          <span className="whitespace-nowrap text-xs font-bold tracking-[0.06em] text-white sm:text-base sm:tracking-[0.08em]">
            TECH <span className="text-cyan-400">ENGINEERZ</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-7">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="relative py-2 text-sm text-slate-300 transition-colors duration-300 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050816]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop WhatsApp */}
        <a
          href="https://wa.me/918287639606"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          title="Chat with us on WhatsApp"
          className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:bg-emerald-500/10 lg:inline-flex"
        >
          <img
            src="https://cdn.simpleicons.org/whatsapp/25D366"
            alt=""
            width={25}
            height={25}
            className="h-[25px] w-[25px]"
          />
        </a>

        {/* Desktop contact button */}
        <a
          href="#contact"
          onClick={closeMenu}
          className="hidden shrink-0 items-center gap-2 rounded-full bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] lg:inline-flex"
        >
          Contact Us <ArrowUpRight size={16} />
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition-colors hover:border-cyan-400/30 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
              height: 0,
              y: reduceMotion ? 0 : -8,
            }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{
              opacity: 0,
              height: 0,
              y: reduceMotion ? 0 : -8,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.22,
              ease: "easeOut",
            }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-sky-400/20 bg-[#080d1b]/[0.98] shadow-[0_18px_50px_rgba(0,0,0,0.4)] backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleMobileNavigation(link.href);
                  }}
                  className="rounded-xl px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-cyan-400/[0.07] hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile WhatsApp */}
              <a
                href="https://wa.me/918287639606"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                title="Chat with us on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/20"
              >
                <img
                  src="https://cdn.simpleicons.org/whatsapp/25D366"
                  alt=""
                  width={25}
                  height={25}
                  className="h-[25px] w-[25px]"
                />
              </a>

              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  handleMobileNavigation("#contact");
                }}
                className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-3 text-sm font-semibold text-slate-950 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Start a project <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
