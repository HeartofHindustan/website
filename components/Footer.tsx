import Link from "next/link";
import { marketplaces } from "@/data/brand";

export function Footer() {
  return (
    <footer className="border-t border-kajal/10 bg-mehendi text-cream">
      <div className="container-padded grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-cream text-sm font-black tracking-[0.18em] text-mehendi">
            HOH
          </div>
          <p className="max-w-sm text-sm leading-7 text-cream/76">
            Heart of Hindustan brings premium roasted makhana to modern Indian homes with warmth,
            trust, and everyday wellness.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-turmeric">Navigate</h3>
          <div className="grid gap-3 text-sm text-cream/76">
            <Link href="/">Home</Link>
            <Link href="/about">About & Products</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-turmeric">Marketplaces</h3>
          <div className="grid gap-3 text-sm text-cream/76">
            {marketplaces.slice(0, 4).map((marketplace) => (
              <a key={marketplace.name} href="#" aria-label={`Shop HOH on ${marketplace.name}`}>
                {marketplace.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-turmeric">Stay In Touch</h3>
          <p className="mb-4 text-sm text-cream/76">Get launch offers and new flavor drops.</p>
          <form className="flex overflow-hidden rounded-full bg-white/12 p-1">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="you@example.com"
              className="min-w-0 flex-1 bg-transparent px-4 text-sm text-cream placeholder:text-cream/50 outline-none"
            />
            <button className="rounded-full bg-saffron px-5 py-3 text-sm font-bold text-white" type="submit">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-cream/56">
        © 2026 HOH - Heart of Hindustan. Premium makhana for healthy India.
      </div>
    </footer>
  );
}
