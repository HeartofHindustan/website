import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata = {
  title: "Contact HOH | Heart of Hindustan",
  description: "Contact HOH for business inquiries, distribution, marketplace partnerships, and customer support."
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="bg-hero-radial py-20">
        <div className="container-padded max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-saffron">Contact Us</p>
          <h1 className="mt-4 font-display text-5xl font-black leading-none tracking-[-0.05em] text-mehendi md:text-7xl">
            Let&apos;s bring premium makhana to more Indian homes.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-kajal/70">
            For distribution, marketplace partnerships, bulk orders, retail placement, or customer
            support, reach out to the HOH team.
          </p>
        </div>
      </section>

      <AnimatedSection className="container-padded grid gap-8 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <form className="rounded-[2.4rem] border border-white/70 bg-white/68 p-6 shadow-card backdrop-blur md:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-black text-mehendi">
                Name
              </label>
              <input id="name" className="w-full rounded-2xl border border-kajal/10 bg-cream px-4 py-4 outline-none transition focus:border-saffron" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-black text-mehendi">
                Email
              </label>
              <input id="email" type="email" className="w-full rounded-2xl border border-kajal/10 bg-cream px-4 py-4 outline-none transition focus:border-saffron" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-black text-mehendi">
                Phone
              </label>
              <input id="phone" className="w-full rounded-2xl border border-kajal/10 bg-cream px-4 py-4 outline-none transition focus:border-saffron" placeholder="+91 98765 43210" />
            </div>
            <div>
              <label htmlFor="inquiry" className="mb-2 block text-sm font-black text-mehendi">
                Inquiry Type
              </label>
              <select id="inquiry" className="w-full rounded-2xl border border-kajal/10 bg-cream px-4 py-4 outline-none transition focus:border-saffron">
                <option>Business inquiry</option>
                <option>Distribution</option>
                <option>Marketplace partnership</option>
                <option>Customer support</option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block text-sm font-black text-mehendi">
              Message
            </label>
            <textarea id="message" rows={6} className="w-full resize-none rounded-2xl border border-kajal/10 bg-cream px-4 py-4 outline-none transition focus:border-saffron" placeholder="Tell us how we can help." />
          </div>
          <button type="submit" className="mt-6 rounded-full bg-mehendi px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-cream shadow-card transition hover:-translate-y-1 hover:bg-leaf">
            Send Message
          </button>
        </form>

        <aside className="grid gap-5">
          <div className="rounded-[2rem] bg-mehendi p-8 text-cream shadow-card">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-turmeric">Brand Desk</p>
            <div className="mt-6 grid gap-5 text-cream/82">
              <p>
                <span className="block text-sm font-black text-cream">Email</span>
                hello@heartofhindustan.in
              </p>
              <p>
                <span className="block text-sm font-black text-cream">Phone</span>
                +91 98765 43210
              </p>
              <p>
                <span className="block text-sm font-black text-cream">Social</span>
                Instagram | LinkedIn | Facebook
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/66 p-8 shadow-sm backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-saffron">Business Inquiry</p>
            <h2 className="mt-3 text-2xl font-black text-mehendi">Retail, gifting, and distribution.</h2>
            <p className="mt-3 leading-7 text-kajal/64">
              We welcome conversations with modern trade, quick commerce, corporate gifting, and
              regional distribution partners.
            </p>
          </div>

          <div className="grid min-h-64 place-items-center rounded-[2rem] border border-dashed border-kajal/18 bg-cream p-8 text-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-saffron">Map Placeholder</p>
              <p className="mt-3 text-lg font-black text-mehendi">HOH business office location</p>
              <p className="mt-2 text-sm text-kajal/56">Embed Google Maps here when the office address is finalized.</p>
            </div>
          </div>
        </aside>
      </AnimatedSection>
    </main>
  );
}
