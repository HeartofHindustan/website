"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About & Products" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-cream/78 backdrop-blur-xl"
    >
      <nav className="container-padded flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" aria-label="HOH home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mehendi text-sm font-black tracking-[0.18em] text-cream shadow-card">
            HOH
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-black uppercase tracking-[0.22em] text-mehendi">Heart of</span>
            <span className="block text-sm font-black uppercase tracking-[0.22em] text-saffron">Hindustan</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 rounded-full border border-white/70 bg-white/48 px-6 py-3 text-sm font-semibold text-kajal/75 shadow-sm md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-saffron">
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href="#marketplaces"
          className="rounded-full bg-[linear-gradient(135deg,#f4a340,#df6e24)] px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5"
        >
          Available On
        </a>
      </nav>
    </motion.header>
  );
}
