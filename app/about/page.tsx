import { AnimatedSection } from "@/components/AnimatedSection";
import { ProductCard } from "@/components/ProductCard";
import { products, reasons } from "@/data/brand";

export const metadata = {
  title: "About & Products | HOH - Heart of Hindustan",
  description: "Learn about HOH premium roasted makhana and explore flavor variants in 100gm and 250gm packs."
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="bg-hero-radial py-20">
        <div className="container-padded grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-saffron">About HOH</p>
            <h1 className="mt-4 font-display text-5xl font-black leading-none tracking-[-0.05em] text-mehendi md:text-7xl">
              A rooted Indian snack, elevated for today.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-kajal/70">
              Heart of Hindustan is built around a simple belief: Indian snacking can be delicious,
              premium, and better for everyday routines. Our roasted makhana celebrates the fox nut
              tradition with clean seasoning, thoughtful packaging, and consistent quality.
            </p>
          </div>
          <div className="rounded-[2.5rem] border border-white/70 bg-white/62 p-8 shadow-card backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              {["Farm-first sourcing", "Roasted texture", "Modern Indian flavors", "Family trust"].map((item) => (
                <div key={item} className="rounded-3xl bg-cream p-6">
                  <p className="text-xl font-black text-mehendi">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="container-padded py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-saffron">Our Promise</p>
            <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.04em] text-mehendi md:text-6xl">
              Premium without becoming complicated.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-[2rem] border border-white/70 bg-white/62 p-6 shadow-sm">
                <h3 className="text-xl font-black text-mehendi">{reason.title}</h3>
                <p className="mt-3 leading-7 text-kajal/64">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-padded py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-saffron">Product Range</p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.04em] text-mehendi md:text-6xl">
            Six flavors for snacking, sharing, and stocking up.
          </h2>
          <p className="mt-5 text-lg leading-8 text-kajal/66">
            Each variant is designed for both 100gm discovery packs and 250gm family packs.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </AnimatedSection>
    </main>
  );
}
