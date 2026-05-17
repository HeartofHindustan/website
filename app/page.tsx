"use client";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, type MouseEvent } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProductCard } from "@/components/ProductCard";
import { images, marketplaces, products, reasons, testimonials } from "@/data/brand";

const stats = [
  { value: "6", label: "Signature flavors" },
  { value: "2", label: "Everyday pack sizes" },
  { value: "100%", label: "Roasted crunch" }
];

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const heroLift = useTransform(scrollYProgress, [0, 0.28], [0, -120]);
  const heroFade = useTransform(scrollYProgress, [0, 0.24], [1, 0.72]);
  const packX = useTransform(mouseX, [-1, 1], [-18, 18]);
  const packY = useTransform(mouseY, [-1, 1], [-10, 10]);

  useEffect(() => {
    let cleanup = () => {};

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, triggerModule]) => {
      const gsap = gsapModule.gsap;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".gsap-parallax").forEach((element) => {
          gsap.fromTo(
            element,
            { y: 42 },
            {
              y: -42,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2
              }
            }
          );
        });
      });

      cleanup = () => context.revert();
    });

    return () => cleanup();
  }, []);

  const updateHeroTilt = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  return (
    <main className="overflow-hidden pt-20">
      <section className="noise-overlay relative isolate bg-cinematic-hero" onMouseMove={updateHeroTilt}>
        <motion.div style={{ y: heroLift, opacity: heroFade }} className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src={images.heroBackground}
            alt=""
            fill
            priority
            sizes="100vw"
            className="scale-110 object-cover opacity-24 blur-[1px]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,248,235,0.88),transparent_34%),linear-gradient(90deg,#fff8eb_0%,rgba(255,248,235,0.82)_42%,rgba(255,248,235,0.36)_100%)]" />
        </motion.div>
        <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-cream to-transparent" />
        <div className="container-padded grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <p className="mb-5 inline-flex rounded-full border border-saffron/18 bg-white/54 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.28em] text-saffron shadow-sm backdrop-blur-xl">
              Premium Indian Wellness Snack
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.92] tracking-[-0.06em] text-mehendi sm:text-6xl lg:text-8xl">
              India&apos;s Premium Makhana Experience
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-kajal/70 sm:text-xl">
              Roasted fox nuts crafted with high-quality Indian makhana, refined flavours, and a
              warmer everyday ritual for modern homes.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#marketplaces"
                className="rounded-full bg-[linear-gradient(135deg,#f4a340,#df6e24)] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-white shadow-glow transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(231,119,37,0.34)]"
              >
                Shop on Amazon
              </a>
              <a
                href="#products"
                className="rounded-full border border-white/70 bg-white/58 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-mehendi shadow-sm backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-cream hover:text-saffron"
              >
                Explore Flavours
              </a>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/70 bg-white/44 p-4 shadow-sm backdrop-blur-xl">
                  <p className="text-3xl font-black text-saffron">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-kajal/58">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="relative min-h-[560px]"
            aria-label="Premium HOH makhana pack visual"
          >
            {[0, 1, 2, 3, 4, 5, 6].map((item) => (
              <motion.span
                key={item}
                animate={{ y: [0, -18, 0], rotate: [0, 8, -2, 0], opacity: [0.5, 0.95, 0.5] }}
                transition={{ duration: 6 + item * 0.45, repeat: Infinity, ease: "easeInOut" }}
                className="makhana-grain absolute block"
                style={{
                  width: 22 + item * 8,
                  height: 20 + item * 7,
                  left: `${4 + item * 13}%`,
                  top: `${7 + (item % 4) * 21}%`
                }}
              />
            ))}
            <div className="absolute inset-x-8 bottom-4 top-12 rounded-[4rem] bg-white/32 blur-3xl" />
            <motion.div style={{ x: packX, y: packY }} className="absolute inset-0">
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [-7, -4, -7] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[5%] top-[28%] w-[34%] rotate-[-7deg] opacity-92 drop-shadow-[0_35px_52px_rgba(33,23,15,0.24)]"
              >
                <Image src={products[2].image} alt="HOH Pudina makhana packet" placeholder="blur" priority className="h-auto w-full rounded-3xl" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[27%] top-[7%] z-10 w-[47%] drop-shadow-[0_42px_70px_rgba(33,23,15,0.32)]"
              >
                <Image src={products[0].image} alt="HOH Himalayan Salt makhana packet" placeholder="blur" priority className="h-auto w-full rounded-3xl" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [8, 5, 8] }}
                transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[2%] top-[26%] w-[35%] rotate-[8deg] opacity-95 drop-shadow-[0_35px_52px_rgba(33,23,15,0.24)]"
              >
                <Image src={products[1].image} alt="HOH Peri Peri makhana packet" placeholder="blur" priority className="h-auto w-full rounded-3xl" />
              </motion.div>
            </motion.div>
            <div className="absolute bottom-12 left-1/2 h-12 w-[76%] -translate-x-1/2 rounded-full bg-kajal/18 blur-2xl" />
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="container-padded py-12">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-saffron">Why HOH</p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.04em] text-mehendi md:text-6xl">
            Built for people who want snacks to feel as good as they taste.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="group rounded-[2rem] border border-white/70 bg-white/54 p-7 shadow-sm backdrop-blur-xl transition hover:shadow-card"
            >
              <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-saffron-glow text-lg font-black text-white shadow-glow transition group-hover:rotate-3">
                {index + 1}
              </span>
              <h3 className="text-xl font-black text-mehendi">{reason.title}</h3>
              <p className="mt-3 leading-7 text-kajal/64">{reason.text}</p>
            </motion.article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="products" className="container-padded py-16">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-saffron">Flavor Showcase</p>
            <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.04em] text-mehendi md:text-6xl">
              One premium crunch. Many Indian moods.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-kajal/66">
            Every flavor comes in 100gm and 250gm packs for trial, sharing, pantry stocking, and gifting.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-padded py-16">
        <div className="grid overflow-hidden rounded-[2.8rem] bg-mehendi shadow-card lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-96 bg-saffron-glow p-8 md:p-10">
            <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_20%_20%,white_0_2px,transparent_2px)] [background-size:28px_28px]" />
            <Image src={images.singleMakhana} alt="" fill sizes="(min-width: 1024px) 42vw, 100vw" className="gsap-parallax object-cover opacity-30 mix-blend-soft-light" />
            <div className="relative z-10">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-white/78">Brand Story</p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none tracking-[-0.05em] text-white">
                From the heartland to the modern snack shelf.
              </h2>
            </div>
          </div>
          <div className="p-8 text-cream md:p-12">
            <p className="text-xl leading-9 text-cream/82">
              HOH stands for Heart of Hindustan, a tribute to Indian roots, family rituals, and the
              farm-to-snack journey of makhana. We bring a traditional super snack into a cleaner,
              more premium format for homes, offices, travel bags, and chai evenings.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Indian sourced", "Modern FMCG finish", "Trusted family snack"].map((item) => (
                <div key={item} className="rounded-3xl border border-white/12 bg-white/8 p-5 text-sm font-bold text-cream/78">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-padded py-10">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/70 bg-white/60 p-4 shadow-card backdrop-blur-xl md:p-6">
          <Image src={images.productLineup} alt="Complete HOH makhana flavour lineup" placeholder="blur" sizes="100vw" className="h-auto w-full rounded-[1.8rem] object-cover" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-padded py-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-[2rem] border border-white/70 bg-white/62 p-7 shadow-sm backdrop-blur">
              <p className="text-lg leading-8 text-kajal/72">&quot;{testimonial.quote}&quot;</p>
              <div className="mt-6">
                <p className="font-black text-mehendi">{testimonial.name}</p>
                <p className="text-sm font-semibold text-saffron">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-padded pb-28 pt-10">
        <div className="rounded-[2.4rem] border border-white/70 bg-white/60 p-7 shadow-card backdrop-blur md:p-10">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-saffron">Social Proof</p>
              <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.04em] text-mehendi">
                Snack moments made shareable.
              </h2>
            </div>
            <a href="#" className="font-black text-saffron">Follow @hohmakhana</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Chai-time crunch", "Office desk snack", "Family movie night", "Festive pantry"].map((item, index) => (
              <div key={item} className="aspect-square rounded-[2rem] bg-gradient-to-br from-saffron/24 via-cream to-leaf/18 p-5">
                <div className="flex h-full flex-col justify-end rounded-[1.5rem] border border-white/60 bg-white/36 p-5 backdrop-blur">
                  <span className="mb-auto grid h-10 w-10 place-items-center rounded-full bg-mehendi text-sm font-black text-cream">
                    {index + 1}
                  </span>
                  <p className="text-xl font-black text-mehendi">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="marketplaces" className="container-padded pb-28">
        <div className="rounded-[2rem] border border-kajal/8 bg-cream/82 px-5 py-6 shadow-sm backdrop-blur-xl md:px-8">
          <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-saffron">Available across India&apos;s favorite quick-commerce platforms.</p>
            <Link href="/contact" className="text-sm font-black uppercase tracking-[0.16em] text-mehendi transition hover:text-saffron">
              Partner with HOH
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {marketplaces.map((marketplace) => (
              <a
                key={marketplace.name}
                href="#"
                aria-label={`Shop HOH on ${marketplace.name}`}
                className="group flex items-center gap-3 rounded-2xl border border-kajal/8 bg-white/58 px-4 py-3 transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-card"
              >
                <span
                  className="grid h-9 w-9 place-items-center rounded-xl text-sm font-black uppercase text-white shadow-sm"
                  style={{ backgroundColor: marketplace.tone }}
                >
                  {marketplace.mark}
                </span>
                <span className="text-sm font-black text-mehendi group-hover:text-saffron">{marketplace.name}</span>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <div className="fixed inset-x-4 bottom-4 z-40 grid grid-cols-2 gap-3 md:hidden">
        <a href="#marketplaces" className="rounded-full bg-[linear-gradient(135deg,#f4a340,#df6e24)] px-4 py-4 text-center text-xs font-black uppercase tracking-[0.12em] text-white shadow-glow">
          Buy Online
        </a>
        <a href="#products" className="rounded-full border border-white/70 bg-cream/86 px-4 py-4 text-center text-xs font-black uppercase tracking-[0.12em] text-mehendi shadow-card backdrop-blur">
          Flavours
        </a>
      </div>
    </main>
  );
}
